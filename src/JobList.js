import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "./JoblyAPI";
import SearchForm from "./SearchForm";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchTermChange = (str) => setSearchTerm(str);

  useEffect(() => {
    async function getJobs() {
      setJobs(await JoblyApi.getJobs(searchTerm));
    }
    getJobs();
  }, [searchTerm]);

  return (
    <div>
      <SearchForm onSearchTermChange={onSearchTermChange} />
      <JobCardList
        jobs={jobs.filter((job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase())
        )}
      />
    </div>
  );
}

export default JobList;
