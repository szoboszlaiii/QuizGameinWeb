using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanyEmployees.Entities.Models
{
    [Table("PlayerInfo")]
    public class PlayerInfo
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string? Id { get; set; }

        [Column("FirstName")]
        public string? FirstName { get; set; }

        [Column("LastName")]
        public string? LastName { get; set; }

        [Column("UserName")]
        public string? UserName { get; set; }

        [Column("Score")]
        public int? Score { get; set; }

        [Column("PlayedGames")]
        public int? PlayedGames { get; set; }

        [Column("S_G")]
        public double? S_G { get; set; }

    }
}
