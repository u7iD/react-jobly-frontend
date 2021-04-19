import React from "react";
import JobCard from "./JobCard";
import LoadingSpinner from "./LoadingSpinner";

function JobCardList({ jobs, applyForJob }) {
  console.debug(
    "JobCardList...",
    "jobs=",
    jobs,
    "typeof applyForJob= ",
    typeof applyForJob
  );

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
          applyForJob={applyForJob}
          key={job.id}
        />
      ))}
    </div>
  );
}

export default JobCardList;
