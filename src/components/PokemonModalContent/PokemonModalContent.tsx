import { useState } from "react";
import { Pokemon } from "../../api/pokemons";
import { buildPokemonImageUrl } from "../../utils/buildPokemonImageUrl";

interface PokemonModalContentProps {
  pokemon: Pokemon;
}
const PokemonModalContent: React.FC<PokemonModalContentProps> = ({
  pokemon,
}) => {
  const [isValidating, setIsValidating] = useState(false);

  const handleValidation = () => {
    setIsValidating(true);
    setTimeout(() => {
      setIsValidating(false);
    }, 5000);
  };

  return (
    <div className="relative">
      <div>
        <h1>{pokemon.name}</h1>
        <img src={buildPokemonImageUrl(pokemon.id)} alt={pokemon.name} />
        <p>Types: {pokemon.type?.join(", ")}</p>
      </div>

      {isValidating && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex justify-center items-center opacity-10">
          <p className="text-white">Validating...</p>
        </div>
      )}

      <button
        disabled={isValidating}
        onClick={handleValidation}
        className="bg-red-500 text-white p-2 rounded-full disabled:bg-gray-300"
      >
        {isValidating ? "Validating..." : "Validate"}
      </button>
    </div>
  );
};
export default PokemonModalContent;
