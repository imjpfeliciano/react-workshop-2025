interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4 shadow-md bg-indigo-950 text-white">
      <div>Pokemon App</div>
      <div>Nav items</div>
    </div>
  );
};

export default Header;
