import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

const MockPokemon = {
  id: 1,
  name: "Bulbasaur",
  type: ["grass", "poison"],
};

describe("PokemonCard", () => {
  it("renders pokemonCard correctly", () => {
    render(<PokemonCard pokemon={MockPokemon} />);
    expect(screen.getByTestId("pokemon-name")).toBeInTheDocument();
  });

  it("renders favorite symbol if isFavorite is set to true", () => {
    render(<PokemonCard pokemon={MockPokemon} isFavorite />);
    expect(screen.queryByTestId("pokemon-is-favorite")).toBeInTheDocument();
  });

  it("avoid render favorite symbol if isFavorite is set to false", () => {
    render(<PokemonCard pokemon={MockPokemon} />);
    expect(screen.queryByTestId("pokemon-is-favorite")).toBeNull();
  });

  it("renders pokemon badges if type array is bigger than zero", () => {
    const card = render(<PokemonCard pokemon={MockPokemon} />);
    expect(card.getByTestId("pokemon-type-list").childNodes).toHaveLength(2);
  });

  it("avoid render pokemon badges if types length is zero", () => {
    const card = render(<PokemonCard pokemon={{
        ...MockPokemon,
        type: []
    }} />);
    expect(card.getByTestId("pokemon-type-list").childNodes).toHaveLength(0);
  });
});
