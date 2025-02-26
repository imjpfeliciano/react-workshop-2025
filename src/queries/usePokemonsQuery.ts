import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "../api/pokemons";

const fetchPokemons = async (): Promise<Pokemon[]> => {
  const pokemonResponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=10000"
  );
  const { results } = await pokemonResponse.json();

  // eslint-disable-next-line
  // @ts-ignore
  const list = results.map((item) => {
    return {
      name: item.name,
      // "https://pokeapi.co/api/v2/pokemon/1/"
      id: Number(item.url.split("/")[6]),
    };
  });

  return list;
};

export const usePokemonsQuery = () => {
  return useQuery({
    queryKey: ["pokemon-list"],
    queryFn: fetchPokemons,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
