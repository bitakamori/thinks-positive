"use client";
import { useState } from "react";

export default function Home() {
  const [showLuck, setShowLuck] = useState(false);
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const handleClick = async () => {
    setErro(null);
    try {
      const res = await fetch("https://api.quotable.io/random");
      if (!res.ok) {
        throw new Error("falha");
      }
      const json = await res.json();
      setDados(json);
      console.log(json);
    } catch (error) {
      if (error instanceof Error) {
        setErro(error.message);
      } else {
        setErro(String(error));
      }
    }
  };
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        {!showLuck && (
          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={handleClick}
          >
            your luck of the day
          </button>
        )}
        {showLuck && <p> sua frase </p>}
      </div>
    </>
  );
}
