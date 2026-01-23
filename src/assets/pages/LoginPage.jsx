import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import EntreComCodigoForm from "../components/EntreComCodigoForm";
import Footer from "../components/sections/Footer";

export default function LoginPage() {
  return (
    <section className="login p-8 flex flex-col min-h-screen md:p-0">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white/60 rounded-xl p-10 text-center md:flex md:gap-12 md:m-auto md:items-center">
          <div className="flex-1">
            <h1 className="heading-section text-(--purple)">Entrar</h1>
            <p className="subtitle">
              Acesse seus eventos e organize seu amigo secreto.
            </p>
            <LoginForm />
            <div className="flex justify-between text-(--blue) pb-6 ">
              <Link to={"/esqueciminhasenha"}>Esqueci minha senha</Link>
              <Link to={"/criarconta"}>Criar conta</Link>
            </div>
          </div>
          <hr className="border-t border-(--grafitti)/30" />
          <div className="hidden md:block w-px self-stretch bg-[var(--grafitti)]/20" />
          <div className="flex-1">
            <div className="flex flex-col gap-4 pt-6">
              <h2 className="subtitle">Tem um código de evento?</h2>
              <EntreComCodigoForm />
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
