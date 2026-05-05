using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Films.Data;
using Films.Entities;


namespace Shop.Repositories
{
    public class GenresRepository : IGenresRepository
    {
        private readonly FilmsDbContext dbContext;

        public GenresRepository(FilmsDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public int Create(Genres genres)
        {
            var entityEntry = dbContext.Genres.Add(genres);

            dbContext.SaveChanges();

            return entityEntry.Entity.Id;
        }

        public GenresRepository Get(int id)
        {
            return dbContext.Genres.SingleOrDefault(o => o.Id == id);
        }
        public void Update(Genres genres)
        {
            dbContext.Genres.Update(genres);
            dbContext.SaveChanges();
        }
        public async Task DeleteAsync(int id)
        {
            await dbContext.Genres.Where(o => o.Id == id).ExecuteDeleteAsync();

            await dbContext.SaveChangesAsync();
        }

    }
}