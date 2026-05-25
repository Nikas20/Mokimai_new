using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelApi.Data;
using TravelApi.Models;
using TravelApi.Services;
using System.Text;
using System.Net.Http.Headers;

namespace TravelApi.Controllers;

[ApiController]
[Route("api")]
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
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
    {
        Console.WriteLine($"Register: Email={dto.Email}, Password={dto.Password}");
        
        if (string.IsNullOrEmpty(dto.Email))
            return BadRequest(new { message = "Email is required" });

        if (await _context.Accounts.AnyAsync(x => x.Email == dto.Email))
            return BadRequest(new { message = "Account with this email already exists!" });

        var account = new Account
        {
            Email = dto.Email,
            Password = _passwordService.Hash(dto.Password)
        };

        _context.Accounts.Add(account);
        await _context.SaveChangesAsync();

        var userRole = await _context.Roles.FirstOrDefaultAsync(r => r.RoleName == "USER");
        if (userRole == null)
        {
            userRole = new Role("USER");
            _context.Roles.Add(userRole);
            await _context.SaveChangesAsync();
        }

        _context.AccountRoles.Add(new AccountRole { AccountId = account.Id, RoleId = userRole.Id });
        await _context.SaveChangesAsync();

        var token = _jwtService.Generate(account);
        return Ok(token);
    }

    [HttpPost("token")]
    public async Task<IActionResult> Token()
    {
        // Читаем Basic Auth из заголовка
        string email = null;
        string password = null;
        
        var authHeader = Request.Headers["Authorization"].ToString();
        if (!string.IsNullOrEmpty(authHeader) && authHeader.StartsWith("Basic "))
        {
            var encodedUsernamePassword = authHeader.Substring("Basic ".Length).Trim();
            var decodedBytes = Convert.FromBase64String(encodedUsernamePassword);
            var decodedString = Encoding.UTF8.GetString(decodedBytes);
            var credentials = decodedString.Split(':', 2);
            
            if (credentials.Length == 2)
            {
                email = credentials[0];
                password = credentials[1];
            }
        }
        
        Console.WriteLine($"Token request from Basic Auth: Email={email}");
        
        if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            return Unauthorized(new { message = "Email and password required" });

        var account = await _context.Accounts
            .Include(a => a.AccountRoles)
            .ThenInclude(ar => ar.Role)
            .FirstOrDefaultAsync(x => x.Email == email);

        if (account == null || !_passwordService.Verify(password, account.Password))
            return Unauthorized(new { message = "Invalid email or password" });

        var token = _jwtService.Generate(account);
        return Ok(token);
    }
}

public class RegisterDto
{
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}