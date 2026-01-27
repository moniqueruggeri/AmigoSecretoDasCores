import { useState } from "react";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import StepRegistroForm from "../components/StepRegistroForm";
import StepParticipantesForm from "../components/StepParticipantesForm";
import StepCoresForm from "../components/StepCoresForm";

export default function CriarEvento() {
  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    eventName: "",
    eventDate: "",
    budget: "",
    participants: [{ email: "" }],
    colors: [],
  });

  function update(patch) {
    setData((prev) => ({ ...prev, ...patch }));
  }

  function next() {
    setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => s - 1);
  }

  return (
    <section className="criarevento min-h-screen flex flex-col">
      <Header />
      <h1 className="heading-section text-center pt-8">Criar Evento</h1>
      <div className="create-page bg-[#f2f2f2] p-8 rounded-2xl w-fit m-auto ">
        <ul className="header-form flex gap-11 justify-center pb-6">
          <li className="form-tab subtitle active">
            <span>1</span> Registro
          </li>
          <li className="form-tab subtitle">
            <span>2</span> Participantes
          </li>
          <li className="form-tab subtitle">
            <span>3</span> Cores
          </li>
          <li className="form-tab subtitle">
            <span>4</span> Revisar
          </li>
        </ul>
        <div className="relative">
          <span className="absolute left-1/8 -bottom-12/12 h-1 w-40 -translate-x-3/5 rounded-full bg-[var(--rose)]"></span>
          <hr className="border-t border-[#8e8e8e]/50" />
        </div>
        <div>
          {step === 0 && (
            <StepRegistroForm
              data={data}
              update={update}
              next={next}
              back={back}
            />
          )}

          {step === 1 && (
            <StepParticipantesForm
              data={data}
              update={update}
              next={next}
              back={back}
            />
          )}

          {step === 2 && (
            <StepCoresForm
              data={data}
              update={update}
              next={next}
              back={back}
            />
          )}

          {step === 3 && (
            <StepRevisar
              data={data}
              update={update}
              next={next}
              back={back}
            />
          )}
        </div>
      </div>
      <div className="hidden md:block md: w-full self-end">
        <Footer />
      </div>
    </section>
  );
}
