namespace Films.Repositories;

namespace Films.Repositories
{
    public interface IDirectorsRepository
    {
        int Create(Directors directors);
        Directors GetGenres(int id);
        void Update(Directors directors);
        Task DeleteAsysnc(int id);
    }
}