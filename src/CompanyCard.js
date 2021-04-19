import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./CompanyCard.css";

const CompanyCard = ({ company }) => {
  console.debug("CompanyCard...", "company=", company);

  return (
    <Link className="CompanyCard card mb-4" to={`/companies/${company.handle}`}>
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{company.name}</span>
          <img src={company.logo_url || logo} alt={`${company.name} Logo`} />
        </h6>
        <p className="card-text">{company.description}</p>
      </div>
    </Link>
  );
};

export default CompanyCard;
