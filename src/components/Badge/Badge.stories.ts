import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fire: Story = {
  args: {
    pokemonType: "fire",
  },
};

export const Water: Story = {
  args: {
    pokemonType: "water",
  },
};

export const Grass: Story = {
  args: {
    pokemonType: "grass",
  },
};

export const Electric: Story = {
  args: {
    pokemonType: "electric",
  },
};
