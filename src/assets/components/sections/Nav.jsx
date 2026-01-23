import { Menu } from "lucide-react";

export default function Nav () {
    return (
        <>
            <ul className="flex gap-8 hidden md:flex">
                <li>
                    Como Funciona
                </li>
                <li>
                    Sobre
                </li>
                <li>
                    FAQ
                </li>
            </ul>
            <Menu className="size-8 text-[#343434] md:hidden"/>
        </>
    )
}