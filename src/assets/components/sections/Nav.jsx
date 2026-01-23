import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <ul className="flex gap-8 hidden md:flex">
        <li>
          <Link to={"/comofunciona"}>Como Funciona</Link>
        </li>
        <li>
          <Link to={"/sobre"}>Sobre</Link>
        </li>
        <li><Link to={"/faq"}>FAQ</Link></li>
      </ul>
      <Menu className="size-8 text-[#343434] md:hidden" />
    </>
  );
}
