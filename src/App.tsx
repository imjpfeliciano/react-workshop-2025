import { useState } from "react";
import { buildPokemonImageUrl } from "./utils/buildPokemonImageUrl";

function App() {
  const [count, setCount] = useState(0);

  const pokemonImage = buildPokemonImageUrl(count);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={pokemonImage} alt="pokemon" className="w-32 h-32" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-2 py-1 bg-slate-200  rounded border border-slate-300"
        >
          Pokemon id is: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
