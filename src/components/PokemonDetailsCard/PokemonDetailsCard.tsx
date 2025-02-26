import { useParams } from "react-router";
import { useTeamContext } from "../../context/teamContext";
import { usePokemonQuery } from "../../queries/usePokemonQuery";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonDetailsCard: React.FC = () => {
  const { pokemonId } = useParams();
  const { addTeamMember, isTeamMember, removeTeamMember } = useTeamContext();
  const { isLoading, data: pokemon } = usePokemonQuery(pokemonId!);

  return (
    <div className="w-full">
      <div>Pokemon details for id: {pokemonId}</div>

      {isLoading && <div>Loading...</div>}

      {pokemon && (
        <div className="w-[500px]">
          <PokemonCard
            pokemon={pokemon}
            isFavorite={isTeamMember(String(pokemon.id))}
          />
          <div className="flex justify-between">
            {isTeamMember(pokemonId!) ? (
              <button
                onClick={() => removeTeamMember(pokemonId!)}
                className="bg-red-500 px-2 py-1 rounded-md"
              >
                Remove from team
              </button>
            ) : (
              <button
                onClick={() => addTeamMember(pokemonId!)}
                className="bg-green-500 px-2 py-1 rounded-md"
              >
                Add to team
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetailsCard;
