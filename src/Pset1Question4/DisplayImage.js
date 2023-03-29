export function DisplayImage({ imageLink, caption }) {
  return (
    <>
      <h1>Question 4</h1>
      <img style={{ width: "400px" }} src={imageLink} alt={caption} />
    </>
  );
}
