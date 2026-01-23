import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function EntreComCodigoForm() {
    const navigate = useNavigate();

    const [code, setcode] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();

        navigate("/evento");
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text"
            placeholder="Digite o código"
            value={code}
            onChange={(e) => setcode(e.target.value)} 
            className="rounded-xl border py-3 px-4"/>
            <button type="submit" className="btn sec-btn">
                Acessar Evento
            </button>
        </form>
    )
}