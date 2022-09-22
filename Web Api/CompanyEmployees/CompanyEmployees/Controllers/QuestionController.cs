using AutoMapper;
using CompanyEmployees.Contracts;
using CompanyEmployees.Entities.DataTransferObjects;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CompanyEmployees.Controllers
{
    [Route("api/questions")]
    [Authorize]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IRepositoryManager _repository;
        private readonly IMapper _mapper;

        public QuestionController(IRepositoryManager repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("getquestions")]
        public IActionResult GetQuestions()
        {
            try
            {
                var claims = User.Claims;

                var question=_repository.Question.GetAllQuestion(trackChanges: false);

                var questionsDto = _mapper.Map<IEnumerable<QuestionDto>>(question);

                return Ok(questionsDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error:" + ex);
            }
        }
    }
}