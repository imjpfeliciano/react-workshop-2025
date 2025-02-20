interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className="bg-white shadow-md p-4 flex grow">{children}</div>
);

export default Card;
