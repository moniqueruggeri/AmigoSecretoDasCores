import Cards from "../Cards";
import { BadgeEuro, Dices, Palette, Users } from "lucide-react";

const cardsData = [
  {
    id:1,
    title: "Crie um evento",
    desc: "Dê um nome ao evento e convide seus amigos para participar.",
    icon: Users,
    bgColor: "bg-(--light-rose)",
    iconColor: "text-(--rose)",
  },
  {
    id:2,
    title: "Escolha as cores",
    desc: "Defina as cores que farão parte do sorteio.",
    icon: Palette,
    bgColor: "bg-(--light-blue)",
    iconColor: "text-(--blue)",
  },
  {
    id:3,
    title: "Defina um orçamento",
    desc: "Escolha um valor de referência para os presentes.",
    icon: BadgeEuro,
    bgColor: "bg-(--light-orange)",
    iconColor: "text-(--orange)",
  },
  {
    id:4,
    title: "Sorteio Secreto",
    desc: "Cada participante recebe uma cor secreta.",
    icon: Dices,
    bgColor: "bg-(--light-green)",
    iconColor: "text-(--green)",
  },
]

export default function ComoFunciona() {
  return (
    <section className="p-8 flex flex-col gap-4 md:w-[950px] m-auto">
      <h2 className="heading-section">Como Funciona</h2>
      <ul className="flex flex-col gap-6 md:flex-row items-stretch">
        {cardsData.map((card) => (
          <Cards
            key={card.id}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            bgColor={card.bgColor}
            iconColor={card.iconColor}
          />
        ))}
      </ul>
    </section>
  );
}
