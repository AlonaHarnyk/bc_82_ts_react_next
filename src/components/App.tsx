import { useState } from "react";
import { initialDogs } from "../data/dogs";
import { DogList } from "../DogList/DogList";

export function App() {
  const [dogs, setDogs] = useState(initialDogs);

  return <DogList dogs={dogs} />;
}

// Створити перевикористовуваний компонент Button, який повинен отртмувати текстовий контент та обродник події кліку як пропси.
