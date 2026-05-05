using Films.Entities;
using Films.Services.Models;

namespace Films.Services
{
    public interface IGenresServce
    {
        int Create(CreateGenres genres);
        Product Get(int id);
        void Update(Genres creategenres);
        Task DeleteAsync(int id);
    }
}