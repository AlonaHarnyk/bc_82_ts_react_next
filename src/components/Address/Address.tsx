import type { IAddress } from "../../types";

interface AddressProps {
  address: IAddress;
}

export default function Address({
  address: { street, city, country },
}: AddressProps) {
  return (
    <>
      <p>Street: {street}</p>
      <p>City: {city}</p>
      <p>Counry: {country}</p>
    </>
  );
}
