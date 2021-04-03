import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";

import JoblyApi from "./JoblyAPI";
import CompanyCard from "./CompanyCard";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchTermChange = (str) => setSearchTerm(str);

  console.debug(
    "CompanyList...",
    "companies=",
    companies,
    "searchTerm=",
    searchTerm,
    "typeof onSearchTermChange",
    typeof onSearchTermChange
  );

  // Retrieve company list only when the searchTerm variable changes
  // Don't add companies in the dependency list
  // because the callback function changes the companies state
  useEffect(() => {
    async function getCompanies() {
      setCompanies(await JoblyApi.getCompanies(searchTerm));
    }
    getCompanies();
  }, [searchTerm]);

  return (
    <div>
      <SearchForm onSearchTermChange={onSearchTermChange} />
      <div>
        {companies.map((company) => (
          <CompanyCard company={company} key={company.handle} />
        ))}
      </div>
    </div>
  );
}

export default CompanyList;
