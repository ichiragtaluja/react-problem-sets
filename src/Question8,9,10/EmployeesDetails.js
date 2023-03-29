export function EmployeesDetails({ employees }) {
  const totalSalary = employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );

  function highlightLevel2(level, designation) {
    if (level === 2) {
      return { backgroundColor: "orange" };
    }

    if (designation === "President") {
      return { border: "3px solid green" };
    }
  }

  function applyBorderToPresident(designation) {}

  return (
    <>
      <h1>Question 8</h1>
      <ul>
        {employees.map(({ name, level, dept, designation, salary }) => (
          <li style={highlightLevel2(level, designation)} key={name}>
            name: {name} level: {level} dept:{dept} designation: {designation}{" "}
            salary: {salary}
          </li>
        ))}
      </ul>
      <h1>Question 9</h1>
      <p>Total Salary Expense: {totalSalary}</p>
    </>
  );
}
