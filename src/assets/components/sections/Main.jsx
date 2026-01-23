import Regras from "./Regras";
import CTAFinal from "./CTAFinal";
import ComoFunciona from "./ComoFunciona";
import Hero from "./Hero";

export default function Main() {
  return (
    <main className="main">
      <Hero />
      <ComoFunciona />
      <div className="mx-auto w-full md:w-[950px] flex flex-col gap-4 md:flex-row md:items-stretch pb-16">
        <Regras />
        <CTAFinal />
      </div>
    </main>
  );
}
