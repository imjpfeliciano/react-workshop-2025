import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "../api/pokemons";

const fetchPokemonById = async (pokemonId: string): Promise<Pokemon> => {
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  const data = await pokemonResponse.json();

  return {
    id: data.id,
    name: data.name,
    // eslint-disable-next-line
    // @ts-ignore
    type: data.types.map(({ type }) => type.name),
  };
};

export const usePokemonQuery = (pokemonId: string) => {
  return useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: () => fetchPokemonById(pokemonId),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
