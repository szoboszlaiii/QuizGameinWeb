using CompanyEmployees.Contracts;
using CompanyEmployees.Entities.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace CompanyEmployees.Repository
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected RepositoryContext RepositoryContext;

        public RepositoryBase(RepositoryContext repositoryContext)
        {
            RepositoryContext = repositoryContext;
        }

        public IQueryable<T> FindAll(bool trackChanges) =>
            !trackChanges ?
              RepositoryContext.Set<T>()
                .AsNoTracking() :
              RepositoryContext.Set<T>();

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression,
        bool trackChanges) =>
            !trackChanges ?
              RepositoryContext.Set<T>()
                .Where(expression)
                .AsNoTracking() :
              RepositoryContext.Set<T>()
                .Where(expression);

        public void Create(T entity) => RepositoryContext.Set<T>().Add(entity);

        public void CreateRange(IEnumerable<T> entities) => RepositoryContext.Set<T>().AddRange(entities);

        public void Update2(T entity) => RepositoryContext.Set<T>().Update(entity);

        public void Update(T entity) => RepositoryContext.Entry(entity).State = EntityState.Modified;

        public void Delete(T entity) => RepositoryContext.Set<T>().Remove(entity);

    }
}
