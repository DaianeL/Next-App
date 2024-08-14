export function Header() {
  return (
    <header className="flex justify-between items-center w-full p-4 bg-cyan-600">
      <h1 className="text-xl font-bold text-white">Next App</h1>
      <nav className="flex gap-4">
        <a href="#" className="text-white text-sm">
          Início
        </a>
        <a href="#" className="text-white text-sm">
          Sobre
        </a>
        <a href="#" className="text-white text-sm">
          Contato
        </a>
      </nav>
    </header>
  );
}
