using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanyEmployees.Entities.Models
{
    [Table("PlayerInfo_v")]
    public class PlayerInfo
    {
        [Column("Id")]
        public string? Id { get; set; }

        [Column("FirstName")]
        public string? FirstName { get; set; }

        [Column("LastName")]
        public string? LastName { get; set; }

        [Column("UserName")]
        public string? UserName { get; set; }

    }
}
