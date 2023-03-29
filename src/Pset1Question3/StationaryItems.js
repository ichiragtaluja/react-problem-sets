export function StationaryItems({ items, header }) {
  return (
    <>
      <h1>Question 3</h1>
      <ol>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </>
  );
}
