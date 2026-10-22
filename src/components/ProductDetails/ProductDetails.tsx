import type { IDetails } from "../../types";

interface ProductDetailsProps {
  details: IDetails;
}

export function ProductDetails({
  details: { brand, color, warranty },
}: ProductDetailsProps) {
  return (
    <>
      <h4>Details:</h4>
      <p>Brand: {brand}</p>
      <p>Color: {color}</p>
      <p>Warranty: {warranty}</p>
    </>
  );
}
