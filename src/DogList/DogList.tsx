import { Dog } from "../components/Dog/Dog";
import type { IDog } from "../types";

interface DogListProps {
  dogs: IDog[];
}

export function DogList({ dogs }: DogListProps) {
  return (
    <ul>
      {dogs.map((dog) => (
        <li key={dog.id}>
          <Dog dog={dog} />
        </li>
      ))}
    </ul>
  );
}
