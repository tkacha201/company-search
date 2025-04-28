// Flatten company data for efficient searching
export const preprocessCompanyData = (
  companies,
  financialData,
  companyDetails
) => {
  return companies.map((company) => {
    const finance = financialData.find((fd) => fd.company_id === company.id);
    const details = companyDetails.find((cd) => cd.company_id === company.id);

    return {
      ...company,
      finance: finance || null,
      details: details || null,
      searchableText: `
          ${company.name} 
          ${company.country} 
          ${company.industry} 
          ${company.founded_year}
          ${details?.company_type || ""}
          ${details?.size || ""}
          ${details?.ceo_name || ""}
          ${details?.headquarters || ""}
          Revenue: ${finance?.revenue || ""}
          Net Income: ${finance?.net_income || ""}
        `.toLowerCase(),
    };
  });
};

// Search function that filters companies based on a query
export const searchCompanies = (preprocessedCompanies, query) => {
  if (!query || query.length < 3) return [];

  const lowerCaseQuery = query.toLowerCase();
  return preprocessedCompanies.filter((company) =>
    company.searchableText.includes(lowerCaseQuery)
  );
};

// Debounce function for optimizing search input
export const debounce = (func, delay) => {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

// Format currency for display
export const formatCurrency = (value) => {
  if (!value) return "N/A";
  return value;
};
