using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelApi.Data;
using TravelApi.DTO;
using TravelApi.Models;
using TravelApi.Services;

namespace TravelApi.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly PasswordService _passwordService;
    private readonly JwtService _jwtService;

    public AuthController(AppDbContext context, PasswordService passwordService, JwtService jwtService)
    {
        _context = context;
        _passwordService = passwordService;
        _jwtService = jwtService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDto dto)
    {
        if (await _context.Accounts.AnyAsync(x => x.Email == dto.Email))
            return BadRequest("Email exists");

        var account = new Account
        {
            Email = dto.Email,
            Password = _passwordService.Hash(dto.Password)
        };

        _context.Accounts.Add(account);
        await _context.SaveChangesAsync();

        var role = await _context.Roles.FirstOrDefaultAsync(x => x.RoleName == "USER");

        if (role == null)
        {
            role = new Role("USER");
            _context.Roles.Add(role);
            await _context.SaveChangesAsync();
        }

        _context.AccountRoles.Add(new AccountRole
        {
            AccountId = account.Id,
            RoleId = role.Id
        });

        await _context.SaveChangesAsync();

        var full = await _context.Accounts
            .Include(x => x.AccountRoles)
            .ThenInclude(x => x.Role)
            .FirstAsync(x => x.Id == account.Id);

        var token = _jwtService.Generate(full);

        return Ok(new { token });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto)
    {
        var account = await _context.Accounts
            .Include(x => x.AccountRoles)
            .ThenInclude(x => x.Role)
            .FirstOrDefaultAsync(x => x.Email == dto.Email);

        if (account == null)
            return Unauthorized();

        if (!_passwordService.Verify(dto.Password, account.Password))
            return Unauthorized();

        var token = _jwtService.Generate(account);

        return Ok(new { token });
    }
}