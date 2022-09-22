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
using Microsoft.Extensions.Hosting;
using CompanyEmployees.Repository;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanyEmployees.Controllers
{
    [Route("api/playerinfo")]
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
        [Authorize]
        public ActionResult<PlayerInfo> GetPlayerInfo()
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

        [HttpGet]
        [Route("getallplayerinfo")]
        [Authorize]
        public ActionResult<PlayerInfo> GetAllPlayerInfo()
        {
            try
            {
                var playeinfo = _repository.PlayerInfo.GetAllPlayer(trackChanges: false);

                var playerinfoDto = _mapper.Map<IEnumerable<PlayerInfoDto>>(playeinfo);

                return Ok(playerinfoDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error:" + ex);
            }
        }

        [HttpPost]
        [Route("updateplayerinfo")]
        public IActionResult UpdatePlayerInfo([FromBody] PlayerInfo player)
        {
            try
            {
                var Player = new PlayerInfo
                {
                    Id = player.Id,
                    FirstName = player.FirstName,
                    LastName = player.LastName,
                    UserName = player.UserName,
                    Score = player.Score,
                    PlayedGames = player.PlayedGames,
                    S_G = player.S_G,
                };

                _repository.PlayerInfo.UpdatePlayer(Player);
                _repository.Save();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error:" + ex);
            }
        }

        [HttpPost]
        [Route("createplayerinfo")]
        public IActionResult CreatePlayerInfo([FromBody] PlayerInfo player)
        {
            try
            {
                var id = _userManager.GetUserId(User);
                var Player = new PlayerInfo
                {
                   FirstName = player.FirstName,
                   LastName = player.LastName,
                   UserName = player.UserName,
                   Score = player.Score,
                   PlayedGames = player.PlayedGames,
                   S_G = player.S_G,
                };

                _repository.PlayerInfo.CreatePlayer(Player);
                _repository.Save();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error:" + ex);
            }
        }
    }
}