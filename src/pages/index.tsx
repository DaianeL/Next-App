// import Image from "next/image";
// import { Inter } from "next/font/google";

import Card from "@/components/Card";
import { Header } from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

let nome = "Teste de dados mocados";
console.log(nome);

function click() {
  console.log("Clicou");
}

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-items-center items-center gap-4">
        <Header />
        <div className="text-lg">App Next</div>
        <div
          style={{ color: "black", backgroundColor: "ButtonFace" }}
          className="text-black text-sm"
        >
          Resposta API: {nome}
        </div>
        <button className="border-2 border-cyan-600 w-56" onClick={click}>
          Enviar
        </button>
        <Card title={"Card Teste"} description={"Teste de descrição"} />
        <Card title={"Card Teste 1"} description={"Teste de descrição"} />
        <Card title={"Card Teste 2"} description={"Teste de descrição"} />
      </main>
    </>
  );
}
