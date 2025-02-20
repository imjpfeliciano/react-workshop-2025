import { useState } from "react";
import { getPokemonTypes, Pokemon, pokemonList } from "../api/pokemons";
import useModal from "../hooks/useModal";
import Modal from "./Modal/Modal";
import PokemonCard from "./PokemonCard/PokemonCard";
import PokemonModalContent from "./PokemonModalContent/PokemonModalContent";

interface ContentProps {
  listItems?: Pokemon[];
}

// Stateful component
const Content: React.FC<ContentProps> = ({ listItems = pokemonList }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(1);
  const [typesToShow, setTypesToShow] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen: modalOpen, openModal, closeModal } = useModal();

  const typeList = getPokemonTypes();

  let filteredPokemonList = listItems;

  if (typesToShow !== "all") {
    filteredPokemonList = listItems.filter((pokemon) =>
      pokemon.type.includes(typesToShow)
    );
  }

  if (searchTerm.length > 0) {
    filteredPokemonList = filteredPokemonList.filter((pokemon) =>
      pokemon.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  const handlePokemonClick = (id: number) => {
    setSelectedPokemon(id);
    openModal();
  };

  return (
    <div className="col-span-10 p-4">
      <div className="flex flex-row justify-between items-center gap-4">
        {/* search pokemon by name */}
        <input
          type="text"
          placeholder="Search Pokemon"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        <select onChange={(e) => setTypesToShow(e.target.value)}>
          <option value="all">All</option>
          {typeList.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <p>Selected pokemon id: {selectedPokemon}</p>
      <p>Selecte type: {typesToShow}</p>
      <p>Search term: {searchTerm}</p>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <PokemonModalContent
          pokemon={
            pokemonList.find(
              (pokemon) => pokemon.id === selectedPokemon
            ) as Pokemon
          }
        />
      </Modal>

      {/* Lista de Pokemon */}
      <div className="grid grid-cols-5 gap-2">
        {filteredPokemonList.length > 0 ? (
          filteredPokemonList.map((pokemon) => (
            <div
              key={pokemon.id}
              onClick={() => handlePokemonClick(pokemon.id)}
            >
              <PokemonCard pokemon={pokemon} />
            </div>
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
