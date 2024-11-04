using Act_08Back.Models;

namespace Act_08Back.Contracts
{
    public interface ITurnoRepository
    {
        Task<List<Turno>> GetAll();
        Task<bool> Add(Turno turno);
    }
}
