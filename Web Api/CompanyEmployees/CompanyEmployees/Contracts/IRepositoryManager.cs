namespace CompanyEmployees.Contracts
{
    public interface IRepositoryManager
    {
        IQuestionRepository Question { get; }
        IPlayerInfoRepository PlayerInfo { get; }   
        void Save();
    }
}
