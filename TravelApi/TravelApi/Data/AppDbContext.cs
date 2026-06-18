using Microsoft.EntityFrameworkCore;
using TravelApi.Models;

namespace TravelApi.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Account> Accounts => Set<Account>();
    public DbSet<Role> Roles => Set<Role>();
    public DbSet<AccountRole> AccountRoles => Set<AccountRole>();
    public DbSet<Taask> Taasks => Set<Taask>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<AccountRole>()
            .HasKey(ar => new { ar.AccountId, ar.RoleId });

        modelBuilder.Entity<AccountRole>()
            .HasOne(ar => ar.Account)
            .WithMany(a => a.AccountRoles)
            .HasForeignKey(ar => ar.AccountId);

        modelBuilder.Entity<AccountRole>()
            .HasOne(ar => ar.Role)
            .WithMany(r => r.AccountRoles)
            .HasForeignKey(ar => ar.RoleId);

        modelBuilder.Entity<Taask>()
            .HasOne(t => t.Account)
            .WithMany(a => a.Taasks)
            .HasForeignKey(t => t.AccountId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}