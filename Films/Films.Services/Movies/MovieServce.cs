using System.Threading.Tasks;
using Films.Entities;
using Films.Repositories;
using Films.Services.Models;

namespace Films.Services
{
    public class MoviesService : IMoviesService
    {
        public const int DefaultItemsPerPage = 10;

        public IMoviesRepository moviesRepository;

        public MoviesService(IMoviesRepository moviesRepository)
        {
            this.moviesRepository = moviesRepository;
        }

        public int Create(CreateMovies createMovies)
        {
            var movies = new Movies()
            {
                Id = createMovies.Id,
                Title = createMovies.Title,
                Year = createMovies.Year,
                Rating = createMovies.Rating,
                GenreId = createMovies.GenreId,
                DirectorId = createMovies.DirectorId
            };

            return moviesRepository.Create(movies);
        }

        public Movies Get(int id)
        {
            return moviesRepository.Get(id);
        }

        public void Update(Movies movies)
        {
            moviesRepository.Update(movies);
        }

        public async Task DeleteAsync(int id)
        {
            await moviesRepository.DeleteAsync(id);
        }

    }
}