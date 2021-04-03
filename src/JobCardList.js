import React, { useContext } from "react";
import JobCard from "./JobCard";
import CurrentUserContext from "./CurrentUserContext";

function JobCardList({ jobs }) {
  const currentUser = useContext(CurrentUserContext);

  const appliedJobIds = currentUser.jobs.map((job) => job.id);
  console.debug(
    "JobCardList...",
    "jobs=",
    jobs,
    "currentUser=",
    currentUser,
    "appliedJobIds=",
    appliedJobIds
  );

  return (
    <div>
      {jobs.map((job) => (
        <JobCard
          id={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          appliedStatus={appliedJobIds.indexOf(job.id) > -1 ? true : false}
          key={job.id}
        />
      ))}
    </div>
  );
}

export default JobCardList;
