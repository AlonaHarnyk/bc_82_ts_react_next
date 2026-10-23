import { useState } from "react";
import type { IDog } from "../../types";
import { Button } from "../Button/Button";
import Address from "../Address/Address";

interface DogProps {
  dog: IDog;
  deleteDog: (id: number) => void;
  changeStatus: (id: number) => void;
}

export function Dog({
  dog: { id, name, age, breed, isFriendly, avatar, address },
  deleteDog,
  changeStatus,
}: DogProps) {
  const [isAddressVisible, setIsAddressVisible] = useState(false);

  const logId = () => {
    console.log(id);
  };

  const changeAddressVisibility = () => {
    setIsAddressVisible(!isAddressVisible);
  };
  return (
    <>
      <h3>{name}</h3>
      <p>Age:{age}</p>
      <p>Breed:{breed}</p>
      <p>Friendly:{isFriendly ? "yes" : "no"}</p>
      <img src={avatar} alt={name} />
      {isAddressVisible && <Address address={address} />}
      <Button textContent="View profile" handleClick={logId} />
      <Button textContent="Delete" handleClick={() => deleteDog(id)} />
      <Button
        textContent="Change status"
        handleClick={() => changeStatus(id)}
      />
      <Button
        textContent={isAddressVisible ? "Hide address" : "Show address"}
        handleClick={changeAddressVisibility}
      />
    </>
  );
}

// Створити всередині компонента елемента списку кнопку "Show address", при натисканні на яку має відображатись адреса тварини (початково ці дані повинні бути приховані), а текстовй контент кнопки має змінюватись на "Hide address" (при натисканні алреса має приховуватись).
