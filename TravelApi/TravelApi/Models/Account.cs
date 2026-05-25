using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TravelApi.Models;

[Table("account")]
public class Account
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;

    public List<AccountRole> AccountRoles { get; set; } = new();
    
    [NotMapped]
    public List<Role> Roles => AccountRoles?.Select(ar => ar.Role).ToList() ?? new();
}