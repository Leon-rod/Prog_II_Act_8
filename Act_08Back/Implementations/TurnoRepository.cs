using Act_08Back.Contracts;
using Act_08Back.Models;
using Microsoft.EntityFrameworkCore;

namespace Act_08Back.Implementations
{
    public class TurnoRepository : ITurnoRepository
    {
        private readonly TURNOSContext _context;
        public TurnoRepository(TURNOSContext context)
        {
            this._context = context;
        }
        public async Task<bool> Add(Turno turno)
        {
            await _context.Turnos.AddAsync(turno);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<List<Turno>> GetAll()
        {
            List<Turno> turnos = await _context.Turnos.ToListAsync();
            return turnos;
        }
    }
}
