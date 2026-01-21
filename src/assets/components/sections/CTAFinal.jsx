import Button from "../Button";

export default function CTAFinal() {
  return (
    <section className="p-8 flex flex-col gap-3
    ">
      <h2 className="heading-section">Pronto pra começar?</h2>
      <p className="subtitle">
        Organize seu amigo secreto de forma fácil e divertida!
      </p>
      <div className="flex flex-col gap-4">
        <Button text={"Crie um evento"} className={"primary-btn btn"} />
        <Button text={"Entre com um código"} className={"sec-btn btn"} />
      </div>
    </section>
  );
}
