using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanyEmployees.Entities.Models
{
    [Keyless]
    public class Questions_v
    {
        [Column("questions")]
        public string? Questions { get; set; }

        [Column("answer1")]
        public string? Answer1 { get; set; }

        [Column("answer2")]
        public string? Answer2 { get; set; }

        [Column("answer3")]
        public string? Answer3 { get; set; }

        [Column("answer4")]
        public string? Answer4 { get; set; }

        [Column("correct_answer")]
        public string? Correct_Answer { get; set; }
    }
}
