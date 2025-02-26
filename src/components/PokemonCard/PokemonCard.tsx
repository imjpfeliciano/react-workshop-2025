import { Pokemon } from "../../api/pokemons";
import { useTeamContext } from "../../context/teamContext";
import { buildPokemonImageUrl } from "../../utils/buildPokemonImageUrl";
import Badge from "../Badge/Badge";
import Card from "../Card/Card";

interface PokemonCardProps {
  pokemon: Pokemon;
}

// Stateless component
const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { isTeamMember } = useTeamContext();
  return (
    <Card>
      <div className="flex flex-col items-center justify-center overflow-hidden m-auto text-center relative">
        {isTeamMember(String(pokemon.id)) && (
          <div className="absolute top-0 right-0">
            <div className="bg-yellow-300 h-5 w-5 rounded-full">*</div>
          </div>
        )}
        <img
          src={buildPokemonImageUrl(pokemon.id)}
          alt={pokemon.name}
          className="w-20 h-20"
        />
        <div className="ml-4">
          <h2 className="font-bold">{pokemon.name}</h2>
          <p>#{pokemon.id}</p>

          <div className="flex grow">
            {pokemon.type?.map((pokemonType) => (
              <Badge pokemonType={pokemonType.toLocaleLowerCase()} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PokemonCard;
