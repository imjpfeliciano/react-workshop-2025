import { Pokemon } from "../../api/pokemons";
import { buildPokemonImageUrl } from "../../utils/buildPokemonImageUrl";
import Badge from "../Badge/Badge";
import Card from "../Card/Card";

interface PokemonCardProps {
  pokemon: Pokemon;
}

// Stateless component
const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => (
  <Card>
    <div className="flex flex-col items-center justify-center overflow-hidden m-auto text-center">
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

export default PokemonCard;
