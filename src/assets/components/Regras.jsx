import { CircleCheck } from "lucide-react";

export default function Regras() {
  return (
    <section className="px-8">
      <h1 className="heading-section">Regras</h1>
      <u className="list-none no-underline bg-white flex flex-col gap-7 text-(length:--body-text) shadow-xl p-9 rounded-2xl">
        <li className="list">
          <CircleCheck  className="w-6 h-6 shrink-0 text-(--green)"/>
          <p>Cada Participante recebe uma cor secreta</p>
        </li>
        <li className="list">
          <CircleCheck className="w-6 h-6 shrink-0 text-(--green)"/>
          <p>Compra de presentes da cor</p>
        </li>
        <li className="list">
          <CircleCheck className="w-6 h-6 shrink-0 text-(--green)"/>
          <p className="w-full">Todos ganham presente de todas as cores</p>
        </li>
      </u>
    </section>
  );
}
