import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PokemonCard from "../PokemonCard/PokemonCard";

interface PokemonDetailsCardProps {}

const PokemonDetailsCard: React.FC<PokemonDetailsCardProps> = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      const data = await pokemonResponse.json();

      setPokemon(data);
    };

    if (pokemonId === undefined) {
      return;
    }

    fetchPokemonDetails();
  }, [pokemonId]);

  return (
    <div className="w-full">
      <div>Pokemon details for id: {pokemonId}</div>

      {pokemon && (
        <div className="w-[500px]">
          <PokemonCard
            pokemon={{
              id: pokemon.id,
              name: pokemon.name,
              type: pokemon.types.map(({ type }) => type.name),
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PokemonDetailsCard;
