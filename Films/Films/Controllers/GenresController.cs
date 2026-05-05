using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Films.Entities;
using Films.Services;
using Films.Services.Models;

namespace Films.API.Controllers
{
    [Route("api/[controller]")]
    public class GenresController : ControllerBase
    {
        private readonly IGenresService genresService;

        public GenresController(IGenresService genresService)
        {
            this.genresService = genresService;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var genres = genresService.Get(id);
            if (genres == null)
                return NotFound();

            return Ok(genres);
        }

        [HttpPost]
        public IActionResult Create(CreateGenres genres)
        {
            return Created("/", genresService.Create(genres));
        }

        [httpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest(new { message = "Invalid genres ID." });
            }

            var genres = Genres.FirstOrDefault(p => p.Id == id);
            if (genres == null)
            {
                return NotFound(new { message = $"Genres with ID {id} not found." });
            }

            Genres.Remove(genres);
            return NoContent();
        }

    }
}