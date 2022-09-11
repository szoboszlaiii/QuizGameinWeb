using CompanyEmployees.Contracts;
using CompanyEmployees.Entities;

namespace CompanyEmployees.Repository
{
    public class RepositoryManager : IRepositoryManager
    {
        private RepositoryContext _repositoryContext;
        private IQuestionRepository? _questionRepository;

        public RepositoryManager(RepositoryContext repositoryContext)
        {
            _repositoryContext = repositoryContext;
        }

        public IQuestionRepository Question
        {
            get
            {
                if (_questionRepository == null)
                    _questionRepository = new QuestionRepository(_repositoryContext);

                return _questionRepository;
            }
        }

        public void Save() => _repositoryContext.SaveChanges();
    }
}