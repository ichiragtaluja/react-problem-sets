export function ProductCard({ name, quantity, sales }) {
  return (
    <li key={name}>
      Name: {name}, Quantity : {quantity} Sales : {sales}
    </li>
  );
}
