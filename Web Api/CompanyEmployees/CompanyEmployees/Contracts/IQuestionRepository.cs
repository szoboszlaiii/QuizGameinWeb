using CompanyEmployees.Entities.Models;

namespace CompanyEmployees.Contracts
{
    public interface IQuestionRepository
    {
        IEnumerable<Questions_v> GetAllQuestion(bool trackChanges);
    }
}
