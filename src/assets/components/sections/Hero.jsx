import Button from "../Button";
import naming from "../../img/naming.png";

export default function Hero() {
  return (
    <section className="hero flex flex-col gap-4">
      <div className="flex flex-col px-8 pt-8">
        <h1 className="heading-section">Divirta-se com o</h1>
        <img src={naming}  className="w-64 h-auto" alt="" />
        <h2 className="subtitle">
          Organize seu amigo secreto de forma fácil e divertida!
        </h2>
      </div>
      <div className="flex justify-between px-8 gap-3">
        <Button
        className={"btn primary-btn"}
        text={"Criar evento"}/>
        <Button 
        className={"btn sec-btn"}
        text={"Saiba mais"}/>
      </div>
    </section>
  );
}
