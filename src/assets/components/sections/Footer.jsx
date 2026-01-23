export default function Footer() {
  return (
    <footer className="bg-white shadow-2xl/45 flex justify-center gap-4 p-4 items-center md:justify-evenly">
      <div className="flex justify-center gap-4 p-4">
        <p className="text-(--body-text)">© 2026</p>
        <p className="text-(--body-text) font-semibold">
          Amigo Secreto das Cores
        </p>
      </div>
      <ul className="hidden md:flex gap-6">
        <li className="font-semibold">FAQ</li>
        <li className="font-semibold">Politica de Privacidade</li>
        <li className="font-semibold">Contato</li>
      </ul>
    </footer>
  );
}
