using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TravelApi.Models;

[Table("roles")]
public class Role
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    [Column("role_name")]
    public string RoleName { get; set; } = string.Empty;

    public List<AccountRole> AccountRoles { get; set; } = new();

    public Role() { }
    public Role(string roleName) { RoleName = roleName; }
}