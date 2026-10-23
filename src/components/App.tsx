import { useState } from "react";
import { initialDogs } from "../data/dogs";
import { DogList } from "../DogList/DogList";

export function App() {
  const [dogs, setDogs] = useState(initialDogs);

  const deleteDog = (id) => {
    const filteredDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(filteredDogs);
  };

  return <DogList dogs={dogs} />;
}
