const COLORS = ["Rosa", "Azul", "Verde", "Amarelo"];

export default function StepCores({ data, update, next, back }) {
  const selected = data.colors ?? []; // se vier undefined, vira []

  function handleSubmit(e) {
    e.preventDefault();
    next();
  }

  function toggle(color) {
    let newColors;

    if (selected.includes(color)) {
      newColors = selected.filter((c) => c !== color);
    } else {
      newColors = [...selected, color];
    }

    console.log("clicou:", color, "=>", newColors); // pra você ver no console
    update({ colors: newColors });
  }

  return (
    <div className="flex flex-col gap-4 pt-8">
      <h2 className="subtitle">Cores</h2>

      <div className="flex flex-wrap gap-3">
        {COLORS.map((color) => (
          <button
            key={color}
            type="button"                 // IMPORTANTÍSSIMO
            onClick={() => toggle(color)} // IMPORTANTÍSSIMO
            className={[
              "px-4 py-2 rounded-xl border",
              selected.includes(color)
                ? "border-[var(--purple)]"
                : "border-[var(--grafitti)]/20",
            ].join(" ")}
          >
            {color}
          </button>
        ))}
      </div>

      <p className="text-sm text-[var(--grafitti)]/70">
        Selecionadas: {selected.join(", ") || "nenhuma"}
      </p>

      <div className="flex gap-10">
        <button type="button" onClick={back} className="btn sec-btn mt-6">
          Voltar
        </button>
        <button type="button" onClick={next} className="btn primary-btn mt-6">
          Avançar
        </button>
      </div>
    </div>
  );
}
