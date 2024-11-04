using Act_08Back.Contracts;
using Act_08Back.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Act_08Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TurnoController : ControllerBase
    {
        private readonly ITurnoRepository _repository;
        public TurnoController(ITurnoRepository repository)
        {
            this._repository = repository;
        }
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                List<Turno> turnos = await _repository.GetAll();
                return Ok(turnos);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
            
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Turno turno)
        {
            try
            {
                bool result = await _repository.Add(turno);
                if (result)
                    return Ok("Se ha agregado con exito un turno");
                return BadRequest("ocurrio un error al intentar insertar un turno");
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
            
        }
    }
}
