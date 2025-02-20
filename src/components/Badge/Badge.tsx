import clsx from "clsx";

interface BadgeProps {
  pokemonType: string;
}

const typeColors = {
  fire: "bg-red-500 text-white",
  water: "bg-blue-500 text-white",
  grass: "bg-green-500 text-white",
  electric: "bg-yellow-500 text-black",
  poison: "bg-purple-500 text-white",
  ground: "bg-yellow-800 text-white",
  bug: "bg-green-800 text-white",
  fairy: "bg-pink-500 text-white",
  normal: "bg-gray-500 text-white",
  fighting: "bg-red-800 text-white",
  flying: "bg-blue-800 text-white",
  psychic: "bg-purple-800 text-white",
  rock: "bg-yellow-600 text-white",
  ghost: "bg-indigo-800 text-white",
  ice: "bg-blue-300 text-white",
  dragon: "bg-red-300 text-white",
  dark: "bg-gray-800 text-white",
  steel: "bg-gray-400 text-white",
  unknown: "bg-gray-500 text-white",
  shadow: "bg-gray-500 text-white",
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
