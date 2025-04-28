import { memo } from "react";
import { formatCurrency } from "../utils/searchUtils";
import "../styles/CompanyCard.css";

const CompanyCard = memo(({ company }) => {
  const { name, country, industry, founded_year, finance, details } = company;

  return (
    <div className="company-card">
      <div className="card-header">
        <h2 className="company-name">{name}</h2>
        <span className="company-industry">{industry}</span>
      </div>

      <div className="card-info">
        <div className="info-section">
          <h3>Company Info</h3>
          <p>
            <span className="label">Founded:</span> {founded_year}
          </p>
          <p>
            <span className="label">Country:</span> {country}
          </p>
          {details && (
            <>
              <p>
                <span className="label">CEO:</span> {details.ceo_name}
              </p>
              <p>
                <span className="label">HQ:</span> {details.headquarters}
              </p>
            </>
          )}
        </div>

        <div className="info-section">
          <h3>Financial Data</h3>
          {finance ? (
            <>
              <p>
                <span className="label">Revenue:</span>{" "}
                {formatCurrency(finance.revenue)}
              </p>
              <p>
                <span className="label">Net Income:</span>{" "}
                {formatCurrency(finance.net_income)}
              </p>
            </>
          ) : (
            <p>No financial data available</p>
          )}
        </div>
      </div>
    </div>
  );
});

CompanyCard.displayName = "CompanyCard";

export default CompanyCard;
