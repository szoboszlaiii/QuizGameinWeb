using System.ComponentModel.DataAnnotations.Schema;

namespace CompanyEmployees.Entities.DataTransferObjects
{
    public class QuestionDto
    {
            public string? Questions { get; set; }
            public string? Answer1 { get; set; }
            public string? Answer2 { get; set; }
            public string? Answer3 { get; set; }
            public string? Answer4 { get; set; }
            public string? Correct_Answer { get; set; }
    }
}
