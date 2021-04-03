import React from "react";
import logo from "./logo.png";

function CompanyCard({ company }) {
  console.debug("CompanyCard...", "company=", company);

  return (
    <a href={`/companies/${company.handle}`}>
      <div style={{ outline: "aqua 2px solid" }}>
        <h6>
          <span>{company.name}</span>
          <img src={company.logo_url || logo} alt={`${company.name} Logo`} />
        </h6>
        <p>{company.description}</p>
      </div>
    </a>
  );
}

export default CompanyCard;
