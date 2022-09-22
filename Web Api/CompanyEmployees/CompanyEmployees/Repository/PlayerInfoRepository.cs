using CompanyEmployees.Contracts;
using CompanyEmployees.Entities.Models;
using Microsoft.AspNetCore.Identity;
using System.Linq.Expressions;

namespace CompanyEmployees.Repository
{
    public class PlayerInfoRepository : RepositoryBase<PlayerInfo>, IPlayerInfoRepository
    {
        public PlayerInfoRepository(RepositoryContext repositoryContext)
            : base(repositoryContext)

        {
        }

        public IEnumerable<PlayerInfo> GetPlayerInfo(Expression<Func<PlayerInfo, bool>> expression, bool trackChanges) =>
           FindByCondition(expression, trackChanges)
           .OrderBy(c => c.UserName)
           .ToList();

        public void CreatePlayer(PlayerInfo entity) => Create(entity);

        public void UpdatePlayer(PlayerInfo entity) => Update(entity);

        public IEnumerable<PlayerInfo> GetAllPlayer(bool trackChanges) =>
          FindAll(trackChanges)
          .OrderByDescending(x => x.S_G)
          .ToList();

    }
}
