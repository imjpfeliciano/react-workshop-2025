import { buildPokemonImageUrl } from "../../utils/buildPokemonImageUrl";
import Badge from "../Badge/Badge";
import Card from "../Card/Card";
import { Pokemon } from "../Content";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
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

          <Badge pokemonType={pokemon.type} />
        </div>
      </div>
    </Card>
  );
};

export default PokemonCard;
