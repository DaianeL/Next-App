// import Image from "next/image";
// import { Inter } from "next/font/google";

import { Header } from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

let nome = "Teste de dados mocados";
console.log(nome);

function click() {
  console.log("Clicou");
}

export default function Home() {
  return (
    <main className="flex flex-col justify-items-center items-center gap-4">
      <Header />
      <div className="text-lg">App Next</div>
      <div className="text-black">Resposta API: {nome}</div>
      <button className="border-2 border-cyan-600 w-56" onClick={click}>
        Enviar
      </button>
    </main>
  );
}
