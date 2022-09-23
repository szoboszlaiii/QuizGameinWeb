using AutoMapper;
using CompanyEmployees.Entities.DataTransferObjects;
using CompanyEmployees.Entities.Models;

namespace CompanyEmployees
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UserForRegistrationDto, User>()
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));

            CreateMap<Questions_v, QuestionDto>()
                .ForMember(u => u.Correct_Answer, opt => opt.MapFrom(x => x.Correct_Answer));

            CreateMap<PlayerInfo, PlayerInfoDto>()
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.UserName));
        }
    }
}
