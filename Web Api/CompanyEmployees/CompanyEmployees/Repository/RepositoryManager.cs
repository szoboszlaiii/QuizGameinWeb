using CompanyEmployees.Contracts;
using CompanyEmployees.Entities;

namespace CompanyEmployees.Repository
{
    public class RepositoryManager : IRepositoryManager
    {
        private RepositoryContext _repositoryContext;
        private IQuestionRepository? _questionRepository;
        private IPlayerInfoRepository? _playerInfoRepository;

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

        public IPlayerInfoRepository PlayerInfo
        {
            get
            {
                if (_playerInfoRepository == null)
                    _playerInfoRepository = new PlayerInfoRepository(_repositoryContext);

                return _playerInfoRepository;
            }
        }

        public void Save() => _repositoryContext.SaveChanges();
    }
}