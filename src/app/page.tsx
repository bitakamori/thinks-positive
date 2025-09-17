"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [showLuck, setShowLuck] = useState(false);
  const [dados, setDados] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const CACHE_KEY = "advice_cache";
  const CACHE_EXPIRATION = 1440 * 60 * 1000;

  const loadAdvice = async (useCache = true) => {
    setErro(null);

    if (useCache) {
      const cacheData = localStorage.getItem(CACHE_KEY);
      if (cacheData) {
        try {
          const { advice, timestamp } = JSON.parse(cacheData);
          const now = Date.now();
          if (now - timestamp < CACHE_EXPIRATION) {
            setDados(advice);
            setShowLuck(true);
            return true;
          }
        } catch (e) {
          console.error(e);
          localStorage.removeItem(CACHE_KEY);
        }
      }
    }
  };
  useEffect(() => {
    loadAdvice(true);
    setLoading(true);
  }, []);

  const handleClick = async () => {
    await loadAdvice(false);
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) {
        throw new Error("Error API");
      }
      const json = await res.json();
      const advice = json.slip.advice;
      setDados(advice);
      setShowLuck(true);
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ advice, timestamp: Date.now() })
      );
      return true;
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
        {!loading && <p className="text-5xl text-center">🔮</p>}
        {!showLuck && loading && (
          <button
            className="bg-zinc-800 md:text-5xl text-white p-4 rounded"
            onClick={handleClick}
          >
            the universe says..
          </button>
        )}
        {showLuck && loading && (
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
