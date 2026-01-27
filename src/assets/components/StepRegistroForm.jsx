export default function StepRegistroForm({ data, update, next }) {
  function handleSubmit(e) {
    e.preventDefault();
    next();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-12">
      <label htmlFor="nomeDoEvento" className="subtitle">
        Nome do Evento
      </label>
      <input
        type="text"
        placeholder="Digite o nome do evento"
        onChange={(e) => update({ eventName: e.target.value })}
        className="rounded-xl border px-4 py-3"
        value={data.eventName}
        id="nomeDoEvento"
      />
      <div className="flex gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="dataDoEvento" className="subtitle">
            Data do Evento
          </label>
          <input
            type="date"
            name="data"
            id="dataDoEvento"
            placeholder="Selecione a data"
            onChange={(e) => update({ eventDate: e.target.value })}
            className="rounded-xl border px-4 py-3"
            value={data.eventDate}
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="orcamento" className="subtitle">
            Orçamento sugerido
          </label>
          <input
            type="number"
            name="orcamento"
            id="orcamento"
            placeholder="Digite o valor ($)"
            onChange={(e) => update({ budget: e.target.value })}
            className="rounded-xl border px-4 py-3"
            value={data.budget}
          />
        </div>
      </div>

      <button type="submit" className="btn primary-btn mt-6">
        Avançar
      </button>
    </form>
  );
}
