using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Films.Entities;
using Films.Services;
using Films.Services.Models;

namespace Films.API.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly IMoviesService moviesService;

        public MoviesController(IMoviesService moviesService)
        {
            this.moviesService = moviesService;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var movies = moviesService.Get(id);
            if (movies == null)
                return NotFound();

            return Ok(movies);
        }

        [HttpPost]
        public IActionResult Create(CreateMovies movies)
        {
            return Created("/", moviesService.Create(movies));
        }

        [httpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest(new { message = "Invalid movies ID." });
            }

            var movies = Movies.FirstOrDefault(p => p.Id == id);
            if (movies == null)
            {
                return NotFound(new { message = $"Movies with ID {id} not found." });
            }

            Movies.Remove(movies);
            return NoContent();
        }

    }
}