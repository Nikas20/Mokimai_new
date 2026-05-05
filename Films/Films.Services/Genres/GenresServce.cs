using System.Threading.Tasks;
using Films.Entities;
using Films.Repositories;
using Films.Services.Models;

namespace Films.Services
{
    public class GenresServce : IGenresService
    {
        public const int DefaultItemsPerPage = 10;

        public IGenresRepository genresRepository;

        public GenresService(IGenresRepository genresRepository)
        {
            this.genresRepository = genresRepository;
        }

        public int Create(CreateGenres createGenres)
        {
            var genres = new Genres()
            {
                Id = createGenres.Id,
                Name = createGenres.Name
            };

            return genresRepository.Create(genres);
        }

        public Genres Get(int id)
        {
            return genresRepository.Get(id);
        }

        public void Update(Genres genres)
        {
            genresRepository.Update(genres);
        }

        public async Task DeleteAsync(int id)
        {
            await genresRepository.DeleteAsync(id);
        }

    }
}