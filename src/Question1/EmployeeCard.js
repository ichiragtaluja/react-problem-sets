export function EmployeeCard({ name, designation, workExperience }) {
  return (
    <div>
      <h1>Question 1</h1>
      <p>Name: {name}</p>
      <p style={{ color: "green" }}>Designation: {designation}</p>
      <p style={{ color: "blue" }}>Work Experience: {workExperience}</p>
    </div>
  );
}
