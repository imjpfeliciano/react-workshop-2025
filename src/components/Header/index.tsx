import Text from "../Text";

interface HeaderProps {
  variant?: "primary" | "secondary";
  size?: number;
  label?: string;
}

const Header: React.FC<HeaderProps> = ({
  variant = "primary",
  label = "Header",
}) => {
  const colorMapping = {
    primary: "bg-red-500",
    secondary: "bg-orange-500",
  };

  return (
    <div className={colorMapping[variant]}>
      <Text label={label} />
    </div>
  );
};

export default Header;
