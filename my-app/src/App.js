import React, { useState } from "react";
import employeesdata from "./components/Data";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

function App() {
  const [teamEmployee, setTeamEmployee] = useState([]);

  function onAddTOTeam(employee) {
    setTeamEmployee([...teamEmployee, employee]);
  }

  function onRemoveFromTeam(employeeToRemove) {
    setTeamEmployee(teamEmployee.filter((emp) => emp !== employeeToRemove));
  }

  function calculateTotalAverageAge() {
    if (teamEmployee.length === 0) return 0;
    const totalAge = teamEmployee.reduce((sum, emp) => sum + emp.age, 0);
    return (totalAge / teamEmployee.length).toFixed(2);
  }

  function sortEmployeesByAge() {
    const sortedEmployees = [...teamEmployee].sort((a, b) => a.age - b.age);
    setTeamEmployee(sortedEmployees);
  }

  return (
    <div className="container">
      <div className="left">
        <h2>All Employees</h2>
        {employeesdata.map((emp) => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            onAddTOTeam={onAddTOTeam}
            onRemoveFromTeam={onRemoveFromTeam}
            isTeamEmployee={teamEmployee.includes(emp)}
          />
        ))}
      </div>
      <div className="right">
        <h2>Team Employees</h2>
        <div>
          <button onClick={sortEmployeesByAge}>Sort By age</button>
          {teamEmployee.map((emp) => (
            <div key={emp.id} className="card">
              <span>{emp.first_name}</span>
              <span>{emp.age}</span>
              <button onClick={() => onRemoveFromTeam(emp)}>REMOVE</button>
            </div>
          ))}
        </div>
        <div>Total Average Age: {calculateTotalAverageAge()}</div>
      </div>
    </div>
  );
}

export default App;
