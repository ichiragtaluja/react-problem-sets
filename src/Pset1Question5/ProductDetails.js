import { ProductCard } from "./ProductCard";

export function ProductDetails({ products }) {
  return (
    <div>
      <h1>Question 5</h1>
      <ul>
        {products.map(({ name }) => (
          <ProductCard name={name} />
        ))}
      </ul>
    </div>
  );
}
