import { pokemonList } from "../api/pokemons";
import PokemonCard from "./PokemonCard/PokemonCard";

interface ContentProps {}

const Content: React.FC<ContentProps> = () => (
  <div className="col-span-10 p-4">
    <div className="grid grid-cols-5 gap-2">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  </div>
);

export default Content;
