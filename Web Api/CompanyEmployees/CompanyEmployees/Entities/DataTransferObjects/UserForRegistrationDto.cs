using System.ComponentModel.DataAnnotations;

namespace CompanyEmployees.Entities.DataTransferObjects
{
    public class UserForRegistrationDto
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        [Required(ErrorMessage = "Email cím kötelező.")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Jelszó kötelező.")]
        public string? Password { get; set; }

        [Compare("Password", ErrorMessage = "Jelszavaknak egyezniük kell.")]
        public string? ConfirmPassword { get; set; }
    }
}
