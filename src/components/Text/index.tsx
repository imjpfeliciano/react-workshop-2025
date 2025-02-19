interface TextProps {
  label: string;
}

const Text: React.FC<TextProps> = ({ label }) => (
  <span className="text-2xl font-bold">{label}</span>
);

export default Text;
