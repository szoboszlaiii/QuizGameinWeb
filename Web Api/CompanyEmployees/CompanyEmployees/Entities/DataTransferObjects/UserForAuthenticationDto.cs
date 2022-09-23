using System.ComponentModel.DataAnnotations;

namespace CompanyEmployees.Entities.DataTransferObjects
{
    public class UserForAuthenticationDto
    {
        [Required(ErrorMessage = "Email cím kötelező.")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Jelszó kötelező.")]
        public string? Password { get; set; }
    }
}
