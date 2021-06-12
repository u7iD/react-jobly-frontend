import React from "react";
import JobCard from "./JobCard";
import LoadingSpinner from "./LoadingSpinner";

function JobCardList({ jobs }) {
  console.debug("JobCardList...", "jobs=", jobs);

  if (!jobs) return <LoadingSpinner />;

  return (
    <div>
      {jobs.map((job) => (
        <JobCard
          id={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          appliedStatus={job.state}
          key={job.id}
        />
      ))}
    </div>
  );
}

export default JobCardList;
