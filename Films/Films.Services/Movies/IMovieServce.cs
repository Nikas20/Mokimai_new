using Films.Entities;
using Films.Services.Models;

namespace Films.Services
{
    public interface IMovieServce
    {
        int Create(CreateMovies movies);
        Product Get(int id);
        void Update(Movie createmovies);
        Task DeleteAsync(int id);
    }
}