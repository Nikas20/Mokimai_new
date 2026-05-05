using Microsoft.EntityFrameworkCore;
using Films.Entities;

namespace Films.Data
{
    public class FilmsDbContext : DbContext
    {
        public DbSet<Movies> Movies { get; set; }
        public DbSet<Genres> Genres { get; set; }
        public DbSet<Directors> Directors { get; set; }

        public FilmsDbContext(DbContextOptions<FilmsDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Movies>(o =>
            {
                o.HasKey(e => e.Id);
                o.HasOne(e => e.Genres)
                    .WithMany(e => e.Movies)
                    .HasForeignKey(e => e.GenreId);
                o.HasOne(e => e.Directors)
                    .WithMany(e => e.Movies)
                    .HasForeignKey(e => e.DirectorId);

            });
            modelBuilder.Entity<Genres>(o =>
            {
                o.HasKey(e => e.Id);
            });
            modelBuilder.Entity<Directors>(o =>
            {
                o.HasKey(e => e.Id);
            });
        }
    }
}