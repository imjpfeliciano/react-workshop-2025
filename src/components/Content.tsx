import { useState } from "react";
import { Link } from "react-router";
import { getPokemonTypes } from "../api/pokemons";
import { useTeamContext } from "../context/teamContext";
import { usePokemonsQuery } from "../queries/usePokemonsQuery";
import PokemonCard from "./PokemonCard/PokemonCard";

interface ContentProps {
  // listItems?: Pokemon[];
}

// Stateful component
const Content: React.FC<ContentProps> = () => {
  const { data, isLoading } = usePokemonsQuery();
  const { isTeamMember } = useTeamContext();

  const [typesToShow, setTypesToShow] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const typeList = getPokemonTypes();

  let filteredPokemonList = data;

  if (typesToShow !== "all") {
    filteredPokemonList = data?.filter((pokemon) =>
      pokemon.type?.includes(typesToShow)
    );
  }

  if (searchTerm.length > 0) {
    filteredPokemonList = filteredPokemonList?.filter((pokemon) =>
      pokemon.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  return (
    <div className="col-span-10 p-4">
      <div className="flex flex-row justify-between items-center gap-4 pb-4">
        {/* search pokemon by name */}
        <input
          className="p-2 border border-gray-300 rounded-md grow"
          type="text"
          placeholder="Search Pokemon"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        <label className="text-gray-500">Filter by type:</label>
        <select
          onChange={(e) => setTypesToShow(e.target.value)}
          className="p-2 border border-gray-300 rounded-md grow-0"
        >
          <option value="all">All</option>
          {typeList.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de Pokemon */}
      <div className="grid grid-cols-5 gap-2">
        {!isLoading && filteredPokemonList && filteredPokemonList.length > 0 ? (
          filteredPokemonList?.map((pokemon) => (
            <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
              <PokemonCard
                pokemon={pokemon}
                isFavorite={isTeamMember(String(pokemon.id))}
              />
            </Link>
          ))
        ) : (
          <div className="col-span-10 p-4">
            <div className="flex justify-center items-center h-full">
              <p className="text-2xl text-gray-500">No Pokemon found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
