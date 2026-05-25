using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TravelApi.Models;

[Table("tours")]
public class Tour
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    
    [Column("photo_url")]
    public string photo_url { get; set; } = string.Empty;  // имя как во фронте
    
    [Column("duration_minutes")]
    public int duration_minutes { get; set; }  // имя как во фронте
    
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
    
    [Column("max_participants")]
    public int max_participants { get; set; }  // имя как во фронте
    
    [Column("average_rating", TypeName = "decimal(3,2)")]
    public decimal average_rating { get; set; }  // имя как во фронте
}