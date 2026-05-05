using Films.Entities;
using Films.Services.Models;

namespace Films.Services
{
    public interface IDirectorsServce
    {
        int Create(CreateDirectors directors);
        Product Get(int id);
        void Update(Directors createdirectors);
        Task DeleteAsync(int id);
    }
}