import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Footer from "../components/sections/Footer";
import Logo from "../img/logo-v.png";
import CriarContaForm from "./CriarContaForm";

export default function CriarConta() {
  return (
    <section className="login p-8 flex flex-col min-h-screen md:p-0">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center md:flex md:gap-12 md:m-auto md:items-center">
          <div className="flex-1">
            <img src={Logo} className="hidden md:block" alt="" />
          </div>
          <div className="hidden md:block w-px self-stretch bg-[var(--grafitti)]/20" />
          <div className="bg-white/60 rounded-xl p-10 flex-1">
            <h1 className="heading-section text-(--purple)">Criar conta</h1>
            <p className="subtitle">
              Crie sua conta e comece a criar seus evetos.
            </p>
            <CriarContaForm />
            <div className="flex justify-center subtitle text-(--blue) pb-6 ">
              <Link to={"/"}>Já tem conta? Entrar</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md: w-full self-end">
        <Footer />
      </div>
    </section>
  );
}
