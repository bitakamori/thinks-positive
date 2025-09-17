"use client";
import { useState } from "react";

export default function Home() {
  const [showLuck, setShowLuck] = useState(false);
  const [dados, setDados] = useState("");
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const handleClick = async () => {
    setErro(null);
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) {
        throw new Error("Error");
      }
      const json = await res.json();
      setDados(json.slip.advice);
      setShowLuck(true);
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
            className="bg-zinc-800 md:text-5xl text-white p-4 rounded"
            onClick={handleClick}
          >
            the universe says..
          </button>
        )}
        {showLuck && (
          <div className="text-center">
            <p className="text-xl md:text-5xl font-bold">{dados}</p>
            <footer>
              <p className="pt-10 text-center text-md md:text-lg">
                come back tomorrow to talk to the universe again🔮
              </p>
            </footer>
          </div>
        )}
      </div>
    </>
  );
}
