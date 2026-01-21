import symbol from "../../img/symbol.png";
import naming from '../../img/naming.png'
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="h-[80] flex justify-between items-center px-8 py-3 shadow-xl bg-[#f3f3f3]">
      <div className="flex gap-3 items-center">
        <img src={symbol} className="h-10" alt="Amigo Secreto das cores" />
        <img src={naming} className="h-12.5" alt="Amigo Secreto das Cores" />
      </div>
      <Nav />
    </header>
  );
}
