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
  const { isOpen: modalOpen, openModal, closeModal } = useModal();

  const typeList = getPokemonTypes();

  let filteredPokemonList = listItems;
  if (typesToShow !== "all") {
    filteredPokemonList = listItems.filter((pokemon) =>
      pokemon.type.includes(typesToShow)
    );
  }

  const handlePokemonClick = (id: number) => {
    setSelectedPokemon(id);
    openModal();
  };

  if (filteredPokemonList.length === 0) {
    return (
      <div className="col-span-10 p-4">
        <div className="flex justify-center items-center h-full">
          <p className="text-2xl text-gray-500">No Pokemon found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-10 p-4">
      <select onChange={(e) => setTypesToShow(e.target.value)}>
        <option value="all">All</option>
        {typeList.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <p>Selected pokemon id: {selectedPokemon}</p>
      <p>Selecte type: {typesToShow}</p>

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
        {filteredPokemonList.map((pokemon) => (
          <div key={pokemon.id} onClick={() => handlePokemonClick(pokemon.id)}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
