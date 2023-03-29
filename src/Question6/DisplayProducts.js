import { ProductCard } from "./ProductCard";

export function DisplayProducts({ products }) {
  return (
    <div>
      <h1>Question 6</h1>
      <ul>
        {products
          .filter(({ quantity, sales }) => sales > quantity)
          .map(({ name, quantity, sales }) => (
            <ProductCard name={name} quantity={quantity} sales={sales} />
          ))}
      </ul>
    </div>
  );
}
