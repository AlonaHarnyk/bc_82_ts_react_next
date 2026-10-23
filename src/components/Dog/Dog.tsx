import type { IDog } from '../../types';
import { Button } from '../Button/Button';

interface DogProps {
  dog: IDog;
  deleteDog: (id: number) => void;
  changeStatus: (id: number) => void;
}

export function Dog({
  dog: { id, name, age, breed, isFriendly, avatar },
  deleteDog,
  changeStatus,
}: DogProps) {
  const logId = () => {
    console.log(id);
  };
  return (
    <>
      <h3>{name}</h3>
      <p>Age:{age}</p>
      <p>Breed:{breed}</p>
      <p>Friendly:{isFriendly ? 'yes' : 'no'}</p>
      <img src={avatar} alt={name} />
      <Button textContent="View profile" handleClick={logId} />
      <Button textContent="Delete" handleClick={() => deleteDog(id)} />
      <Button
        textContent="Change status"
        handleClick={() => changeStatus(id)}
      />
    </>
  );
}
