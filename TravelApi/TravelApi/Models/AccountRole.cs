using System.ComponentModel.DataAnnotations.Schema;

namespace TravelApi.Models;

[Table("account_roles")]
public class AccountRole
{
    [Column("account_id")]
    public long AccountId { get; set; }
    
    [Column("role_id")]
    public long RoleId { get; set; }
    
    [ForeignKey("AccountId")]
    public Account Account { get; set; } = null!;
    
    [ForeignKey("RoleId")]
    public Role Role { get; set; } = null!;
}