using System.ComponentModel.DataAnnotations;

namespace TravelApi.Models;

public class Account
{
    [Key]
    public long Id { get; set; }

    [Required]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;

    public List<AccountRole> AccountRoles { get; set; } = new();
    
    public List<Taask> Taasks { get; set; } = new();
}