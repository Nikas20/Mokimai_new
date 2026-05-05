using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Films.Data;
using Films.Entities;


namespace Shop.Repositories
{
    public class DirectorsRepository : IDirectorsRepository
    {
        private readonly FilmsDbContext dbContext;

        public DirectorsRepository(FilmsDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public int Create(Directors directors)
        {
            var entityEntry = dbContext.Directors.Add(directors);

            dbContext.SaveChanges();

            return entityEntry.Entity.Id;
        }

        public DirectorsRepository Get(int id)
        {
            return dbContext.Directors.SingleOrDefault(o => o.Id == id);
        }
        public void Update(Directors directors)
        {
            dbContext.Directors.Update(directors);
            dbContext.SaveChanges();
        }
        public async Task DeleteAsync(int id)
        {
            await dbContext.Directors.Where(o => o.Id == id).ExecuteDeleteAsync();

            await dbContext.SaveChangesAsync();
        }

    }
}