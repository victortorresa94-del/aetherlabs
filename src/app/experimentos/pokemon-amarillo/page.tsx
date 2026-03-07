"use client";

import { useEffect, useMemo, useState } from "react";

type Starter = {
  id: "bulbasaur" | "charmander" | "squirtle";
  name: string;
  emoji: string;
  type: string;
  description: string;
};

const starters: Starter[] = [
  {
    id: "bulbasaur",
    name: "Bulbasaur",
    emoji: "🌱",
    type: "Planta/Veneno",
    description: "Ideal para un inicio equilibrado y estratégico.",
  },
  {
    id: "charmander",
    name: "Charmander",
    emoji: "🔥",
    type: "Fuego",
    description: "Ataques ofensivos potentes, recomendado para valientes.",
  },
  {
    id: "squirtle",
    name: "Squirtle",
    emoji: "💧",
    type: "Agua",
    description: "Defensivo y sólido para explorar con seguridad.",
  },
];

const mapLayout = [
  "TTTTTTTTTTTTTTTTTTTT",
  "THH..P....L....HHHT",
  "T....R....R.......T",
  "T....R....R...GGG.T",
  "T....R....R...GGG.T",
  "T....R....R.......T",
  "T....R....R...WWW.T",
  "T....R....R.......T",
  "T....R....R.......T",
  "T....R....R.......T",
  "T....R....R.......T",
  "T....R....R....M..T",
  "T....R....R.......T",
  "T....R....R.......T",
  "T....R....R.......T",
  "TTTTTTTTTTTTTTTTTTTT",
];

const tileStyles: Record<string, string> = {
  T: "bg-emerald-900", // Árboles
  H: "bg-rose-300", // Casa
  P: "bg-yellow-300", // Centro del pueblo
  L: "bg-indigo-300", // Laboratorio Oak
  R: "bg-amber-200", // Camino
  G: "bg-green-400", // Hierba alta
  W: "bg-sky-400", // Agua
  M: "bg-zinc-500", // Salida montaña/ruta
  ".": "bg-green-600", // Césped normal
};

const tileLabel: Record<string, string> = {
  T: "Árbol",
  H: "Casa",
  P: "Plaza Pueblo Paleta",
  L: "Laboratorio del Profesor Oak",
  R: "Camino",
  G: "Hierba alta",
  W: "Agua",
  M: "Ruta a la montaña",
  ".": "Pradera",
};

const blockedTiles = new Set(["T", "H", "W"]);

export default function PokemonAmarilloPage() {
  const [starter, setStarter] = useState<Starter | null>(null);
  const [position, setPosition] = useState({ x: 5, y: 2 });
  const [message, setMessage] = useState(
    "Elige tu Pokémon inicial para comenzar la aventura en Pueblo Paleta."
  );

  const map = useMemo(() => mapLayout.map((row) => row.split("")), []);

  useEffect(() => {
    const handleMove = (event: KeyboardEvent) => {
      if (!starter) return;

      const keyMap: Record<string, { x: number; y: number }> = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      };

      const delta = keyMap[event.key];
      if (!delta) return;

      event.preventDefault();

      const next = { x: position.x + delta.x, y: position.y + delta.y };
      const row = map[next.y];
      if (!row) return;
      const nextTile = row[next.x];
      if (!nextTile || blockedTiles.has(nextTile)) return;

      setPosition(next);

      if (nextTile === "L") {
        setMessage("Has llegado al laboratorio. ¡El Profesor Oak te saluda!");
      } else if (nextTile === "G") {
        setMessage("Cruzas hierba alta... podría aparecer un Pokémon salvaje.");
      } else if (nextTile === "M") {
        setMessage("Has encontrado la salida hacia la siguiente ruta.");
      } else if (nextTile === "P") {
        setMessage("Estás en la plaza central de Pueblo Paleta.");
      } else {
        setMessage(`Explorando: ${tileLabel[nextTile] ?? "Terreno"}.`);
      }
    };

    window.addEventListener("keydown", handleMove);
    return () => window.removeEventListener("keydown", handleMove);
  }, [map, position, starter]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Mini Pokémon Amarillo (demo)</h1>
          <p className="text-slate-300">
            Incluye Pueblo Paleta, selección de inicial y una parte del mapa
            explorable con flechas.
          </p>
        </header>

        {!starter && (
          <section className="rounded-xl border border-yellow-400/40 bg-yellow-500/10 p-4 space-y-4">
            <h2 className="text-xl font-semibold">Elige tu Pokémon inicial</h2>
            <div className="grid gap-3 md:grid-cols-3">
              {starters.map((candidate) => (
                <button
                  key={candidate.id}
                  type="button"
                  onClick={() => {
                    setStarter(candidate);
                    setMessage(
                      `¡Has elegido a ${candidate.name}! Ya puedes explorar Pueblo Paleta.`
                    );
                  }}
                  className="rounded-lg border border-slate-700 bg-slate-900 p-4 text-left transition hover:border-yellow-300 hover:bg-slate-800"
                >
                  <p className="text-2xl">
                    {candidate.emoji} {candidate.name}
                  </p>
                  <p className="text-sm text-slate-300">Tipo: {candidate.type}</p>
                  <p className="text-sm text-slate-400 mt-2">
                    {candidate.description}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}

        <section className="grid gap-6 lg:grid-cols-[auto,1fr]">
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <div
              className="grid gap-[2px] bg-slate-800 p-2"
              style={{ gridTemplateColumns: `repeat(${map[0].length}, minmax(0, 24px))` }}
            >
              {map.flatMap((row, y) =>
                row.map((tile, x) => {
                  const isPlayer = starter && position.x === x && position.y === y;
                  return (
                    <div
                      key={`${x}-${y}`}
                      className={`h-6 w-6 ${tileStyles[tile] ?? "bg-black"} relative`}
                      title={tileLabel[tile]}
                    >
                      {isPlayer && (
                        <span className="absolute inset-0 grid place-items-center text-xs">
                          🧢
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <aside className="space-y-4 rounded-xl border border-slate-700 bg-slate-900 p-4">
            <h2 className="text-lg font-semibold">Estado del entrenador</h2>
            <p>
              Inicial: {starter ? `${starter.emoji} ${starter.name}` : "Sin elegir"}
            </p>
            <p>
              Posición: ({position.x}, {position.y})
            </p>
            <p className="text-yellow-300">{message}</p>
            <div className="text-sm text-slate-300 space-y-1">
              <p>Controles:</p>
              <ul className="list-disc list-inside">
                <li>Usa las flechas del teclado para moverte.</li>
                <li>No puedes cruzar árboles, casas ni agua.</li>
                <li>Explora la hierba alta y encuentra la salida.</li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
