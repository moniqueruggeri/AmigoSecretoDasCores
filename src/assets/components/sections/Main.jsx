import Regras from "../Regras";
import CTAFinal from "./CTAFinal";
import ComoFunciona from "./ComoFunciona";
import Hero from "./Hero";

export default function Main () {
    return (
        <main className="main">
            <Hero/>
            <ComoFunciona/>
            <Regras/>
            <CTAFinal/>
        </main>
    )
}