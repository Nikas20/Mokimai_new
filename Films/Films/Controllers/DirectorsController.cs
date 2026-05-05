using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Films.Entities;
using Films.Services;
using Films.Services.Models;

namespace Films.API.Controllers
{
    [Route("api/[controller]")]
    public class DirectorsController : ControllerBase
    {
        private readonly IDirectorsService directorsService;

        public DirectorsController(IDirectorsService directorsService)
        {
            this.directorsService = directorsService;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var directors = directorsService.Get(id);
            if (directors == null)
                return NotFound();

            return Ok(directors);
        }

        [HttpPost]
        public IActionResult Create(CreateDirectors directors)
        {
            return Created("/", directorsService.Create(directors));
        }

        [httpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest(new { message = "Invalid directors ID." });
            }

            var directors = Directors.FirstOrDefault(p => p.Id == id);
            if (directors == null)
            {
                return NotFound(new { message = $"Directors with ID {id} not found." });
            }

            Directors.Remove(directors);
            return NoContent();
        }

    }
}