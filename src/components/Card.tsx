interface CardProps {
  title: string;
  description: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg w-64">
      <div className="p-6">
        <h2 className="font-bold text-xl">{props.title}</h2>
        <p className="text-gray-700 mt-2">{props.description}</p>
        <button className="bg-cyan-600 text-white px-4 py-2 rounded mt-4">
          Clique aqui
        </button>
      </div>
    </div>
  );
}
