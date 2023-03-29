export function StudentDetails({
  student: { name, english, maths, computers },
}) {
  const totalMarks = english + maths + computers;
  let grade;

  if (totalMarks >= 225) {
    grade = "A";
  } else if (totalMarks >= 180) {
    grade = "B";
  } else if (totalMarks >= 180) {
    grade = "C";
  } else {
    grade = "D";
  }

  return (
    <div>
      <h1>Question7</h1>
      <p>Name: {name}</p>
      <p>English: {english}</p>
      <p>Maths: {maths}</p>
      <p>Computers: {computers}</p>
      <p>Total: {totalMarks}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}
