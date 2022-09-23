using CompanyEmployees.Contracts;
using CompanyEmployees.Entities.Models;

namespace CompanyEmployees.Repository
{
    public class QuestionRepository : RepositoryBase<Questions_v>, IQuestionRepository
    {
        public QuestionRepository(RepositoryContext repositoryContext)
            : base(repositoryContext)
        {
        }

        public IEnumerable<Questions_v> GetAllQuestion(bool trackChanges) =>
           FindAll(trackChanges)
           .ToList();
    }
}
