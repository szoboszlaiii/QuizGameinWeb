namespace CompanyEmployees.Contracts
{
    public interface IRepositoryManager
    {
        IQuestionRepository Question { get; }
        void Save();
    }
}
