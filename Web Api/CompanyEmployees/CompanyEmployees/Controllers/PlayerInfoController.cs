using AutoMapper;
using CompanyEmployees.Contracts;
using CompanyEmployees.Entities.DataTransferObjects;
using CompanyEmployees.Entities.Models;
using CompanyEmployees.JwtFeatures;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace CompanyEmployees.Controllers
{
    [Route("api/playerinfo")]
    [Authorize]
    [ApiController]
    public class PlayerInfoController : ControllerBase
    {
        private readonly IRepositoryManager _repository;
        private readonly IMapper _mapper;
        private readonly JwtHandler _jwtHandler;
        private readonly UserManager<User> _userManager;

        public PlayerInfoController(IRepositoryManager repository, IMapper mapper, JwtHandler jwtHandler, UserManager<User> userManager)
        {
            _repository = repository;
            _mapper = mapper;
            _jwtHandler = jwtHandler;
            _userManager = userManager;
        }

        [HttpGet]
        [Route("getplayerinfo")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<PlayerInfo>> GetPlayerInfo()
        {
            try
            {
                var user = _userManager.GetUserName(User);

                var playeinfo = _repository.PlayerInfo.GetPlayerInfo(x=>x.UserName == user,trackChanges: false);

                var playerinfoDto = _mapper.Map<IEnumerable<PlayerInfoDto>>(playeinfo);

                return Ok(playerinfoDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error:" + ex);
            }
        }

    //    [HttpGet]
    //    [Route("getplayerinfo")]
    //    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //    public async Task<ActionResult<string>> Get()
    //    {
    //        var token = await HttpContext.GetTokenAsync("access_token");
    //        var token2 = Request.Headers["Authorization"];
    //        var readtoken = new JwtSecurityTokenHandler().ReadToken(token2);
    //        //var user = await _userManager.FindByNameAsync(token2);
    //        Console.WriteLine("VALAMI" + readtoken);
    //        //Console.WriteLine("VALAMI" + user);
    //        return Ok();
    //    }
    }
}