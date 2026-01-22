import Button from "../Button";

export default function CTAFinal() {
  return (
    <section className="p-8 flex flex-col gap-3
    ">
      <h2 className="heading-section">Pronto pra começar?</h2>
      <p className="subtitle">
      Crie seu evento agora e organize um amigo secreto diferente de tudo que você já viu.
      </p>
      <div className="flex flex-col gap-4">
        <Button text={"Criar evento"} className={"primary-btn btn"} />
        <Button text={"Entre com um código"} className={"sec-btn btn"} />
      </div>
    </section>
  );
}
