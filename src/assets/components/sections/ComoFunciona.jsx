import Cards from "../Cards";
import { BadgeEuro, Dices, Palette, Users } from "lucide-react";

const cardsData = [
  {
    id:1,
    title: "Crie um evento",
    desc: "Crie o evento e convide seus amigos",
    icon: Users,
    bgColor: "bg-(--light-rose)",
    iconColor: "text-(--rose)",
  },
  {
    id:2,
    title: "Escolha as cores",
    desc: "Crie o evento e convide seus amigos",
    icon: Palette,
    bgColor: "bg-(--light-blue)",
    iconColor: "text-(--blue)",
  },
  {
    id:3,
    title: "Defina um orçamento",
    desc: "Crie o evento e convide seus amigos",
    icon: BadgeEuro,
    bgColor: "bg-(--light-orange)",
    iconColor: "text-(--orange)",
  },
  {
    id:4,
    title: "Sorteio Secreto",
    desc: "Crie o evento e convide seus amigos",
    icon: Dices,
    bgColor: "bg-(--light-green)",
    iconColor: "text-(--green)",
  },
]

export default function ComoFunciona() {
  return (
    <section className="p-8 flex flex-col gap-4">
      <h2 className="heading-section">Como Funciona</h2>
      <ul className="flex flex-col gap-6">
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
