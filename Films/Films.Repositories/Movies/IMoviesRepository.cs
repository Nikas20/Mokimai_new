namespace Films.Repositories;

namespace Films.Repositories
{
    public interface IMoviesRepository
    {
        int Create(Movies movies);
        Movies GetGenres(int id);
        void Update(Movies movies);
        Task DeleteAsysnc(int id);
    }
}