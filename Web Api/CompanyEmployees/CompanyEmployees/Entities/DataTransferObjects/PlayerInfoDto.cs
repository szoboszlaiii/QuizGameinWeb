using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanyEmployees.Entities.Models
{
    public class PlayerInfoDto
    {
        public string? Id { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? UserName { get; set; }

        public int? Score { get; set; }

        public int? PlayedGames { get; set; }

        public double? S_G { get; set; }

    }
}
