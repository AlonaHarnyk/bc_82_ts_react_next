// Створити перевикористовуваний компонент Button, який повинен отртмувати текстовий контент та обробник події кліку як пропси.

interface ButtonProps {
  textContent: string;
  handleClick: () => void;
}

export function Button({ textContent, handleClick }: ButtonProps) {
  return <button onClick={handleClick}>{textContent}</button>;
}
