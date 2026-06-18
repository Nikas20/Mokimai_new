using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TravelApi.Models;

[Table("taasks")]
public class Taask
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    [Required]
    public string Title { get; set; } = string.Empty;

    [Required]
    public string Description { get; set; } = string.Empty;

    public string Status { get; set; } = "NEW";

    public long AccountId { get; set; }

    [JsonIgnore]
    public Account? Account { get; set; }
}