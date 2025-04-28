import { useState, useMemo, useEffect } from "react";
import { companies, financialData, companyDetails } from "./data/companiesData";
import { preprocessCompanyData, searchCompanies } from "./utils/searchUtils";
import SearchBar from "./components/SearchBar";
import CompanyList from "./components/CompanyList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const preprocessedCompanies = useMemo(
    () => preprocessCompanyData(companies, financialData, companyDetails),
    []
  );

  useEffect(() => {
    if (query.length >= 3) {
      setSearchResults(searchCompanies(preprocessedCompanies, query));
    } else if (query.length === 0) {
      setSearchResults(preprocessedCompanies.slice(0, 15));
    } else {
      setSearchResults([]);
    }
  }, [query, preprocessedCompanies]);

  useEffect(() => {
    setSearchResults(preprocessedCompanies.slice(0, 15));
  }, [preprocessedCompanies]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Company Explorer</h1>
        <p className="app-subtitle">
          Search through global companies and their data
        </p>
      </header>

      <main className="app-main">
        <SearchBar onSearch={setQuery} />
        <CompanyList
          companies={searchResults}
          query={query}
          showSearchMessage={searchResults.length === 15 && !query}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
