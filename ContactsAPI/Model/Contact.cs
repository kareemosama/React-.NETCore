using System.ComponentModel.DataAnnotations;

namespace ContactsAPI.Model
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }  

        public long Phone { get; set; }

        public string Address { get; set; }

    }
}
