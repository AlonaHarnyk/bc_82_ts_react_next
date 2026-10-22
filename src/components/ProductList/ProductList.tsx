import type { IProduct } from "../../types";
import { Product } from "../Product/Product";
import { ProductDetails } from "../ProductDetails/ProductDetails";

interface ProductListProps {
  products: IProduct[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Product product={product} />
          <ProductDetails details={product.details} />
        </li>
      ))}
    </ul>
  );
}
