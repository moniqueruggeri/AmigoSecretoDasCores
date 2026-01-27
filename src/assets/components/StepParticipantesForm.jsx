export default function StepRegistroForm({ data, update, next, back }) {
  function handleSubmit(e) {
    e.preventDefault();
    next();
    back();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-12">
      <label htmlFor="email" className="subtitle">
        Email do Participante
      </label>
      <input
        type="email"
        placeholder="Digite o email do participante"
        onChange={(e) => update({ participants: e.target.value })}
        className="rounded-xl border px-4 py-3"
        value={data.participants}
        id="email"
      />
      <div className="flex gap-10">
        <button type="button" onClick={back} className="btn sec-btn mt-6">
          Voltar
        </button>
        <button type="button" onClick={next} className="btn primary-btn mt-6">
          Avançar
        </button>
      </div>
    </form>
  );
}
