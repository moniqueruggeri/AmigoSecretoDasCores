import symbol from "../../img/symbol.png";
import naming from "../../img/naming.png";
import Nav from "./Nav";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-[80]  px-8 py-3 shadow-xl bg-[#f3f3f3]">
      <div className="flex items-center justify-between md:w-[950px] md:m-auto">
        <div className="flex gap-3 items-center">
          <img src={symbol} className="h-10" alt="Amigo Secreto das cores" />
          <img src={naming} className="w-40" alt="Amigo Secreto das Cores" />
        </div>
        <Nav />
        <Link to={"/criarevento"}>
          <Button
            text={"Criar evento"}
            className={"primary-btn btn w-40 hidden md:block"}
          />
        </Link>
      </div>
    </header>
  );
}
