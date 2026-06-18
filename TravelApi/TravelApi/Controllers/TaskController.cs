using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using TravelApi.Data;
using TravelApi.Models;
using TravelApi.DTO;

namespace TravelApi.Controllers;

[ApiController]
[Route("api/taasks")]
[Authorize]
public class TaaskController : ControllerBase
{
    private readonly AppDbContext _context;

    public TaaskController(AppDbContext context)
    {
        _context = context;
    }

    private long GetUserId()
    {
        var id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (id == null) throw new UnauthorizedAccessException("No user id");

        return long.Parse(id);
    }

    private bool IsAdmin()
        => User.IsInRole("ADMIN");

    // ================= GET ALL =================
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var userId = GetUserId();
        var isAdmin = IsAdmin();

        var query = _context.Taasks.AsQueryable();

        if (!isAdmin)
            query = query.Where(x => x.AccountId == userId);

        var result = await query.ToListAsync();

        return Ok(result);
    }

    // ================= GET BY ID =================
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(long id)
    {
        var userId = GetUserId();
        var isAdmin = IsAdmin();

        var taask = await _context.Taasks.FirstOrDefaultAsync(x => x.Id == id);

        if (taask == null)
            return NotFound();

        if (!isAdmin && taask.AccountId != userId)
            return Forbid();

        return Ok(taask);
    }

    // ================= CREATE =================
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateTaaskDto dto)
    {
        var userId = GetUserId();

        var taask = new Taask
        {
            Title = dto.Title,
            Description = dto.Description,
            Status = string.IsNullOrEmpty(dto.Status) ? "NEW" : dto.Status,
            AccountId = userId
        };

        _context.Taasks.Add(taask);
        await _context.SaveChangesAsync();

        return Ok(taask);
    }

    // ================= UPDATE =================
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(long id, [FromBody] CreateTaaskDto dto)
    {
        var userId = GetUserId();
        var isAdmin = IsAdmin();

        var existing = await _context.Taasks.FirstOrDefaultAsync(x => x.Id == id);

        if (existing == null)
            return NotFound();

        if (!isAdmin && existing.AccountId != userId)
            return Forbid();

        existing.Title = dto.Title;
        existing.Description = dto.Description;
        existing.Status = dto.Status ?? "NEW";

        await _context.SaveChangesAsync();

        return Ok(existing);
    }

    // ================= DELETE =================
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(long id)
    {
        var userId = GetUserId();
        var isAdmin = IsAdmin();

        var taask = await _context.Taasks.FirstOrDefaultAsync(x => x.Id == id);

        if (taask == null)
            return NotFound();

        if (!isAdmin && taask.AccountId != userId)
            return Forbid();

        _context.Taasks.Remove(taask);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}