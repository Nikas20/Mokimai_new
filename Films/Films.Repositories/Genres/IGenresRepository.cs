namespace Films.Repositories
{
    public interface IGenresRepository
    {
        int Create(Genres genres);
        Genres GetGenres(int id);
        void Update(Genres genres);
        Task DeleteAsysnc(int id);
    }
}