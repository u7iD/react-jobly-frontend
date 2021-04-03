import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";
import JobCardList from "./JobCardList";
import JoblyApi from "./JoblyAPI";

function CompanyDetail() {
  const [company, setCompany] = useState({});
  const { handle } = useParams();
  const currentUser = useContext(CurrentUserContext);

  console.debug(
    "CompanyDetail...",
    "company=",
    company,
    "handle=",
    handle,
    "currentUser=",
    currentUser
  );

  useEffect(() => {
    async function getCompanyData() {
      const companyData = await JoblyApi.getCompany(handle);
      setCompany(companyData);
    }
    getCompanyData();
  }, [handle]);

  return (
    <div>
      <h5>{company.title}</h5>
      <p>{company.description}</p>
      {/* Check company.jobs is not undefined; otherwise we pass undefined 
          to the jobs prop to JobCardList and causes an error; company is an empty
          object before useEffect runs */}
      {company.jobs && <JobCardList jobs={company.jobs} />}
    </div>
  );
}

export default CompanyDetail;
