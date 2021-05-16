import React, { useState } from "react";
import JoblyApi from "./JoblyAPI";

function JobCard({ id, title, salary, equity, appliedStatus }) {
  const [applied, setApplied] = useState(appliedStatus);
  const handleClick = async (event) => {
    if (!applied) {
      // await applyForJob(id);
      const message = await JoblyApi.applyForJob(id);
      setApplied(Boolean(message));
    }
  };
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h6 className="card-title text-capitalize">{title}</h6>
        <div className="card-text">
          Salary: $
          {salary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          })}
        </div>
        {/* use toPrecision to avoid floating point number such as 14.000000000000002% */}
        <div className="card-text">
          Equity:{" "}
          {equity * 100 > 10
            ? (equity * 100).toPrecision(2)
            : (equity * 100).toPrecision(1)}
          %
        </div>
        <div className="text-right">
          <button
            className="btn btn-large btn-danger font-weight-bold"
            onClick={handleClick}
            disabled={applied}
          >
            {applied ? "APPLIED" : "APPLY"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
