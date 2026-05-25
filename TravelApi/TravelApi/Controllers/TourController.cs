using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelApi.Data;
using TravelApi.Models;

namespace TravelApi.Controllers;

[ApiController]
[Route("api")]
public class TourController : ControllerBase
{
    private readonly AppDbContext _context;

    public TourController(AppDbContext context) => _context = context;

    [HttpGet("tour")]
    public async Task<IActionResult> GetAllTours()
    {
        var tours = await _context.Tours.ToListAsync();
        return tours.Any() ? Ok(tours) : NoContent();
    }

    [HttpGet("tour/{id}")]
    public async Task<IActionResult> GetTour(long id)
    {
        var tour = await _context.Tours.FindAsync(id);
        return tour == null ? NotFound(new { message = "Tour not found" }) : Ok(tour);
    }

    [HttpPost("tour")]
    public async Task<IActionResult> AddTour([FromBody] Tour tour)
    {
        _context.Tours.Add(tour);
        await _context.SaveChangesAsync();
        return Ok(tour);  // Возвращаем созданный тур
    }

    [HttpPut("tour/{id}")]
    public async Task<IActionResult> UpdateTour(long id, [FromBody] Tour tour)
    {
        if (id != tour.Id) return BadRequest(new { message = "ID mismatch" });
        
        var existing = await _context.Tours.FindAsync(id);
        if (existing == null) return NotFound(new { message = "Tour not found" });
        
        existing.Title = tour.Title;
        existing.Description = tour.Description;
        existing.photo_url = tour.photo_url;
        existing.duration_minutes = tour.duration_minutes;
        existing.Price = tour.Price;
        existing.max_participants = tour.max_participants;
        existing.average_rating = tour.average_rating;
        
        await _context.SaveChangesAsync();
        return Ok(existing);
    }

    [HttpDelete("tour/{id}")]
    public async Task<IActionResult> DeleteTour(long id)
    {
        var tour = await _context.Tours.FindAsync(id);
        if (tour == null) return NotFound(new { message = "Tour not found" });
        
        _context.Tours.Remove(tour);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpGet("tour/pagination")]
    public async Task<IActionResult> GetPaginatedTours(
        [FromQuery] int page = 0,
        [FromQuery] int size = 6,
        [FromQuery] string sort = "Id")
    {
        var query = _context.Tours.AsQueryable();
        query = sort.ToLower() switch
        {
            "title" => query.OrderBy(t => t.Title),
            "price" => query.OrderBy(t => t.Price),
            _ => query.OrderBy(t => t.Id)
        };
        
        var total = await query.CountAsync();
        var tours = await query.Skip(page * size).Take(size).ToListAsync();
        
        return Ok(new { content = tours, totalPages = (int)Math.Ceiling(total / (double)size) });
    }
}