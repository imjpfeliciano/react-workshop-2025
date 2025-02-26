import type { Meta, StoryObj } from "@storybook/react";
import PokemonCard from "./PokemonCard";

const meta = {
  title: "Components/PokemonCard",
  component: PokemonCard,
  tags: ["autodocs"],
} satisfies Meta<typeof PokemonCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pokemon: {
      id: 1,
      name: "Bulbasaur",
      type: ["grass"],
    },
  },
};
