import type { IDog } from "../../types";
import { Button } from "../Button/Button";

interface DogProps {
  dog: IDog;
}

export function Dog({
  dog: { id, name, age, breed, isFriendly, avatar },
}: DogProps) {
  const logId = () => {
    console.log(id);
  };

  const deleteDog = () {
    
  }

  return (
    <>
      <h3>{name}</h3>
      <p>Age:{age}</p>
      <p>Breed:{breed}</p>
      <p>Friendly:{isFriendly ? "yes" : "no"}</p>
      <img src={avatar} alt={name} />
      <Button textContent="View profile" handleClick={logId} />
      <Button textContent="Delete" handleClick={}
    </>
  );
}

// У кожному елементі списку потрібно додати кнопку "View profile". При натисканні на кнопку має викликатися обробник події onClick, а у консолі браузера повинен виводитись ідентифікатор тварини.
