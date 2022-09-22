using CompanyEmployees.Entities.Models;
using CompanyEmployees.Repository;
using System.Linq.Expressions;

namespace CompanyEmployees.Contracts
{
    public interface IPlayerInfoRepository
    {
        IEnumerable<PlayerInfo> GetPlayerInfo(Expression<Func<PlayerInfo, bool>> expression,bool trackChanges);

        IEnumerable<PlayerInfo> GetAllPlayer(bool trackChanges);

        public void CreatePlayer(PlayerInfo entity);

        public void UpdatePlayer(PlayerInfo entity);
    }
}
