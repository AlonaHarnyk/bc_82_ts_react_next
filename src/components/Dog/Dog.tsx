import type { IDog } from "../../types";

interface DogProps {
  dog: IDog;
}

export function Dog({
  dog: { name, age, breed, isFriendly, avatar },
}: DogProps) {
  return (
    <>
      <h3>{name}</h3>
      <p>Age:{age}</p>
      <p>Breed:{breed}</p>
      <p>Friendly:{isFriendly ? "yes" : "no"}</p>
      <img src={avatar} alt={name} />
    </>
  );
}
