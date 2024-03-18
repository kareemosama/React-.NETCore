using ContactsAPI.Data;
using ContactsAPI.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor.Compilation;
using Microsoft.EntityFrameworkCore;

namespace ContactsAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly ContactsAPIDbContext _dbcontext;
        public ContactsController(ContactsAPIDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        

        [HttpGet]
        public async Task<IActionResult> GetAllContacts()
        {
           return Ok(await _dbcontext.Contacts.ToListAsync());
           
        }

        [HttpPost]
        public async Task<IActionResult> AddContact(Contact data) {

            var contact = new Contact()
            {
                Address = data.Address,
                Email = data.Email,
                FullName = data.FullName,
                Phone = data.Phone
            };

           await _dbcontext.Contacts.AddAsync(contact);
           await _dbcontext.SaveChangesAsync();

            return Ok(contact);
        
        }
        [HttpGet]
        [Route("{id:}")]
        public async Task<IActionResult> GetContacts([FromRoute] int id)
        {
            var contact = await _dbcontext.Contacts.FindAsync(id);

            if(contact == null)return NotFound(); 

            return Ok(contact);

        }

        [HttpPut]
        [Route("{id:}")]
        public async Task<IActionResult> UpdateContact([FromRoute] int id,Contact data)
        {

            var contact = await  _dbcontext.Contacts.FindAsync(id);
            if(contact != null)
            {
                contact.FullName = data.FullName;
                contact.Phone = data.Phone;
                contact.Email = data.Email;
                contact.Address = data.Address;

                await _dbcontext.SaveChangesAsync();
                return Ok(contact);
            
            }
            return NotFound();
        }

        [HttpDelete]
        [Route("{id:}")]
        public async Task<IActionResult> DeleteContacts([FromRoute] int id)
        {

            var contact = await _dbcontext.Contacts.FindAsync(id);
            

            if (contact != null) _dbcontext.Remove(contact); await _dbcontext.SaveChangesAsync(); return Ok(contact);

            return NotFound();

        }

    }
}
