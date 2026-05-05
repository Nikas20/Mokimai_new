using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Films.Data;
using Films.Entities;


namespace Shop.Repositories
{
    public class MoviesRepository : IMoviesRepository
    {
        private readonly FilmsDbContext dbContext;

        public MoviesRepository(FilmsDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public int Create(Movies movies)
        {
            var entityEntry = dbContext.Movies.Add(movies);

            dbContext.SaveChanges();

            return entityEntry.Entity.Id;
        }

        public MoviesRepository Get(int id)
        {
            return dbContext.Movies.SingleOrDefault(o => o.Id == id);
        }
        public void Update(Movies movies)
        {
            dbContext.Movies.Update(movies);
            dbContext.SaveChanges();
        }
        public async Task DeleteAsync(int id)
        {
            await dbContext.Movies.Where(o => o.Id == id).ExecuteDeleteAsync();

            await dbContext.SaveChangesAsync();
        }

    }
}