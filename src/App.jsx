import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home";
import ComoFunciona from "./assets/components/sections/ComoFunciona";
import Sobre from "./assets/pages/Sobre";
import FAQ from "./assets/pages/FAQ";
import Contato from "./assets/pages/Contato"
import PoliticaDePrivacidade from "./assets/pages/PoliticaDePrivacidade"
import CriarEvento from "./assets/pages/CriarEvento";
import SaibaMais from "./assets/pages/SaibaMais"
import EntreComCodigo from "./assets/pages/EntreComCodigo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/comofunciona" element={<ComoFunciona/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/politicadeprivacidade" element={<PoliticaDePrivacidade/>}/>
      <Route path="/contato" element={<Contato/>}/>
      <Route path="/criarevento" element={<CriarEvento/>}/>
      <Route path="/saibamais" element={<SaibaMais/>}/>
      <Route path="/entrecomcodigo" element={<EntreComCodigo/>}/>
    </Routes>
  );
}
