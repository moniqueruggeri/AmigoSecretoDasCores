import Button from "../Button";
import naming from "../../img/naming.png";
import desktopImg from "../../img/desktop-img.png";

export default function Hero() {
  return (
    <section className="md:pt-20">
      <div className="mx-auto w-full md:w-[950px] flex flex-col gap-4 md:flex-row md:items-stretch">
        <div className="flex flex-col px-8 pt-8 md:flex-1">
          <h1 className="heading-section md:leading-10">Divirta-se com o</h1>
          <img src={naming} className="w-64 h-auto md:w-100 md:pb-6" alt="" />
          <hr className="hidden md:flex md:pb-6" />
          <h2 className="subtitle py-4">
            Organize seu amigo secreto de um jeito simples, criativo e muito
            mais divertido.
          </h2>
          <div className="flex justify-between gap-3 md:pt-8">
            <Button className={"btn primary-btn"} text={"Criar evento"} />
            <Button className={"btn sec-btn"} text={"Saiba mais"} />
          </div>
        </div>
        <img
          src={desktopImg}
          className="hidden md:block w-50 h-auto flex-1"
          alt="amigas"
        />
      </div>
    </section>
  );
}
