import { useParams } from "react-router";
import { usePokemonQuery } from "../../queries/usePokemonQuery";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonDetailsCard: React.FC = () => {
  const { pokemonId } = useParams();
  const { isLoading, data: pokemon } = usePokemonQuery(pokemonId!);

  return (
    <div className="w-full">
      <div>Pokemon details for id: {pokemonId}</div>

      {isLoading && <div>Loading...</div>}

      {pokemon && (
        <div className="w-[500px]">
          <PokemonCard pokemon={pokemon} />
        </div>
      )}
    </div>
  );
};

export default PokemonDetailsCard;
