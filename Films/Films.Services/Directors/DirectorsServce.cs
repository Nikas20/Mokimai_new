using System.Threading.Tasks;
using Films.Entities;
using Films.Repositories;
using Films.Services.Models;

namespace Films.Services
{
    public class DirectorsServce : IDirectorsService
    {
        public const int DefaultItemsPerPage = 10;

        public IDirectorsRepository directorsRepository;

        public DirectorsService(IDirectorsRepository directorsRepository)
        {
            this.directorsRepository = directorsRepository;
        }

        public int Create(CreateDirectors createDirectors)
        {
            var directors = new Directors()
            {
                Id = createDirectors.Id,
                Title = createDirectors.Title,
                Year = createDirectors.Year,
                Rating = createDirectors.Rating,
                GenreId = createDirectors.GenreId,
                DirectorId = createDirectors.DirectorId
            };

            return directorsRepository.Create(directors);
        }

        public Directors Get(int id)
        {
            return directorsRepository.Get(id);
        }

        public void Update(Directors directors)
        {
            directorsRepository.Update(directors);
        }

        public async Task DeleteAsync(int id)
        {
            await directorsRepository.DeleteAsync(id);
        }

    }
}