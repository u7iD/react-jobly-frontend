import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "./JoblyAPI";
import LoadingSpinner from "./LoadingSpinner";
import SearchForm from "./SearchForm";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchTermChange = (str) => setSearchTerm(str);
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getJobs() {
      setJobs(await JoblyApi.getJobs(searchTerm));
    }
    getJobs();
  }, [searchTerm]);

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="col-md-8 offset-md-2">
      <SearchForm onSearchTermChange={onSearchTermChange} />
      {filteredJobs.length > 0 ? (
        <JobCardList jobs={filteredJobs} />
      ) : (
        <p>Sorry no records found</p>
      )}
    </div>
  );
}

export default JobList;
