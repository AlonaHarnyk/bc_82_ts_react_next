interface ButtonProps {
  textContent: string;
  handleClick: () => void;
}

export default function Button({ textContent, handleClick }: ButtonProps) {
  return <button onClick={handleClick}>{textContent}</button>;
}
