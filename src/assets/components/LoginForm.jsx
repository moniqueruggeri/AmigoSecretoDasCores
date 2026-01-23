import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        navigate("/dashboard");
    }
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-6">
            <input type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border px-4 py-3" />
            <input type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl border px-4 py-3" />

            <button type="submit" className="btn primary-btn">
                Entrar
            </button>
        </form>
    )
}