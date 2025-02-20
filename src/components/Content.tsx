import PokemonCard from "./PokemonCard/PokemonCard";

interface ContentProps {}

export interface Pokemon {
  name: string;
  id: number;
  type: "fire" | "water" | "grass" | "electric";
}

const PokemonList: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "grass",
  },
  {
    id: 2,
    name: "Ivysaur",
    type: "grass",
  },
  {
    id: 3,
    name: "Venusaur",
    type: "grass",
  },
  {
    id: 4,
    name: "Charmander",
    type: "fire",
  },
  {
    id: 5,
    name: "Charmeleon",
    type: "fire",
  },
];

const Content: React.FC<ContentProps> = () => (
  <div className="col-span-10 p-4">
    <div className="grid grid-cols-4 gap-2">
      {PokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  </div>
);

export default Content;
