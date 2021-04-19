import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList";
import JoblyApi from "./JoblyAPI";
import LoadSpinner from "./LoadingSpinner";

const CompanyDetail = () => {
  const [company, setCompany] = useState({});
  const { handle } = useParams();

  console.debug("CompanyDetail...", "company=", company, "handle=", handle);

  // important to get applied jobs from API call
  // not from the currentUser object;
  // otherwise if a user applies for a job
  // from the /jobs URL, the company detail page
  // will still show the job as not applied
  useEffect(() => {
    const getCompanyDataAndJobsForUser = async () => {
      const companyData = await JoblyApi.getCompany(handle);
      setCompany(companyData);
    };
    getCompanyDataAndJobsForUser();
  }, [handle]);

  // company is an empty object and company.jobs is undefined
  // before useEffect runs; show LoadSpinner before we get the
  // company object
  if (!company) return <LoadSpinner />;
  return (
    <div className="col-md-8 offset-md-2">
      <h4 className="text-capitalize">{company.name}</h4>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
};

export default CompanyDetail;
