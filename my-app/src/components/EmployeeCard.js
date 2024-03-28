import React from "react";

function EmployeeCard({ employee, onAddTOTeam, isTeamEmployee }) {
  function toggleTeamStatus() {
    if (!isTeamEmployee) {
      onAddTOTeam(employee);
    }
  }

  return (
    <div className="card">
      <span>{employee.first_name}</span>
      <span>{employee.age}</span>
      {isTeamEmployee ? (
        <button disabled>ADD</button>
      ) : (
        <button onClick={toggleTeamStatus}>ADD</button>
      )}
    </div>
  );
}

export default EmployeeCard;
