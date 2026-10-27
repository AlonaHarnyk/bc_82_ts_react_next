interface ButtonProps {
  handleClick: () => void;
  textContent: string;
}

export default function Button({ handleClick, textContent }: ButtonProps) {
  return <button onClick={handleClick}>{textContent}</button>;
}
