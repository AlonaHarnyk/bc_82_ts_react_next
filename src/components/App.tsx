import { useState } from 'react';
import { initialDogs } from '../data/dogs';
import { DogList } from '../components/DogList/DogList';

export function App() {
  const [dogs, setDogs] = useState(initialDogs);

  const deleteDog = (id: number) => {
    const filteredDogs = dogs.filter(dog => dog.id !== id);
    setDogs(filteredDogs);
  };

  const changeStatus = (id: number) => {
    const newArr = dogs.map(dog => {
      if (dog.id === id) {
        dog.isFriendly = !dog.isFriendly;
      }
      return dog;
    });

    setDogs(newArr);
  };

  return (
    <DogList dogs={dogs} deleteDog={deleteDog} changeStatus={changeStatus} />
  );
}

// Додати до компонента елемента списку кнопку Change status of friendliness ,
// при натисканні на яку статус тварини має змінюватись на протилежний.
