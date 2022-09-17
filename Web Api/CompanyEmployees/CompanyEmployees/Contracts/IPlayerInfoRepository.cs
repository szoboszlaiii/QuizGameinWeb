using CompanyEmployees.Entities.Models;
using System.Linq.Expressions;

namespace CompanyEmployees.Contracts
{
    public interface IPlayerInfoRepository
    {
        IEnumerable<PlayerInfo> GetPlayerInfo(Expression<Func<PlayerInfo, bool>> expression,bool trackChanges);
    }
}
