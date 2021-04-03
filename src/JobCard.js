import React, { useState } from "react";
import JoblyApi from "./JoblyAPI";

function JobCard({ id, title, salary, equity, appliedStatus }) {
  const [applied, setApplied] = useState(appliedStatus);
  const handleClick = async () => {
    if (!applied) {
      await JoblyApi.applyForJob(id);
      setApplied(true);
    }
  };
  return (
    <div>
      <h6>
        <span>{title}</span>
      </h6>
      <div>Salary: {salary}</div>
      <div>Equity: {equity}</div>
      <button onClick={handleClick} disabled={applied}>
        {applied ? "APPLIED" : "APPLY"}
      </button>
    </div>
  );
}

export default JobCard;
