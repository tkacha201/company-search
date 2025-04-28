import { memo } from "react";
import CompanyCard from "./CompanyCard";
import "../styles/CompanyList.css";

const CompanyList = memo(({ companies, query, showSearchMessage }) => {
  if (!query && companies.length === 0) {
    return (
      <div className="empty-state">
        <h2>Enter a search term to find companies</h2>
        <p>Type at least 3 characters to start searching</p>
      </div>
    );
  }

  if (query.length >= 3 && companies.length === 0) {
    return (
      <div className="empty-state">
        <h2>No results found</h2>
        <p>Try searching with different keywords</p>
      </div>
    );
  }

  return (
    <div className="company-list">
      <h2 className="results-header">
        {query
          ? `Found ${companies.length} result${
              companies.length !== 1 ? "s" : ""
            }`
          : "Featured Companies"}
      </h2>
      <div className="company-grid">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
      {showSearchMessage && (
        <div className="search-more-message">
          <p>Showing 15 of 30 companies. Search to explore more!</p>
        </div>
      )}
    </div>
  );
});

CompanyList.displayName = "CompanyList";

export default CompanyList;
