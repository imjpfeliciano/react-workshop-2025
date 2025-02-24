import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge", () => {
  it("renders the correct type according to pokemonType", () => {
    render(<Badge pokemonType="fire" />);
    expect(screen.getByText("fire")).toBeInTheDocument();
  });

  it("renders the correct badge color according to pokemonType", () => {
    render(<Badge pokemonType="fire" />);
    const badge = screen.getByText("fire");
    expect(badge).toHaveClass("bg-red-500 text-white");
  });
});
