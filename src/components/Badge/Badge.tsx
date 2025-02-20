import clsx from "clsx";

interface BadgeProps {
  pokemonType: "fire" | "water" | "grass" | "electric";
}

const typeColors = {
  fire: "bg-red-500 text-white",
  water: "bg-blue-500 text-white",
  grass: "bg-green-500 text-white",
  electric: "bg-yellow-500 text-black",
};

const Badge: React.FC<BadgeProps> = ({ pokemonType }) => (
  <div
    className={clsx(
      "inline-flex items-center px-2 py-1 rounded-full text-xs capitalize",
      typeColors[pokemonType]
    )}
  >
    {pokemonType}
  </div>
);

export default Badge;
