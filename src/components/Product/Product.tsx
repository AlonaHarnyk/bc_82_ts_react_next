import type { IProduct } from "../../types";

interface ProductProps {
  product: IProduct;
}

export function Product({
  product: { name, price, category, isAvailable },
}: ProductProps) {
  return (
    <>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <p>Is avaliable:{isAvailable ? "yes" : "no"}</p>
    </>
  );
}
