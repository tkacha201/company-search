# Company Explorer

A modern, performance-optimized search application for exploring global companies and their data.

## Features

- **Intelligent Search**: Search across company names, countries, industries, CEO names, and more with a minimum of 3 characters
- **Performance Optimized**: Fast, responsive search with multiple optimization techniques
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful Dark Theme**: Clean, visually pleasing dark interface with proper contrast for readability
- **Real-time Results**: Shows search results as you type with optimized performance

## Technical Implementation

### Performance Optimizations

1. **Debounced Search Input (300ms)**

   - Prevents excessive re-renders while typing
   - Reduces unnecessary API calls and state updates
   - Improves input performance and reduces CPU load

2. **Data Preprocessing**

   - Company data is flattened and preprocessed on initial load
   - Creates a searchable text string for each company
   - Enables fast string-based searching without complex joins
   - Cached using useMemo to prevent recomputation

3. **Memoized Components**

   - CompanyCard and CompanyList use React.memo
   - Prevents unnecessary re-renders when parent components update
   - Optimizes rendering performance for large lists

4. **Efficient Search Algorithm**

   - Uses string.includes() for fast text matching
   - Preprocessed data eliminates need for complex filtering
   - Immediate results without waiting for API calls

5. **Initial Load Optimization**
   - Shows first 15 companies by default
   - Loads more results only when searching
   - Provides instant feedback to users

## Setup and Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`

## Design Decisions

- **Dark Theme**: Modern dark theme reduces eye strain
- **Grid Layout**: Responsive 3-column grid for optimal viewing
- **Simplified Cards**: Clean, focused presentation of company data
- **Search UX**: Clear feedback with minimum 3-character requirement
- **Performance First**: All features optimized for speed and responsiveness

## Extensible Architecture

The app is designed with a modular and maintainable architecture, making it easy to extend with additional features or data fields. The separation of components, data preprocessing, and utility functions allows for straightforward integration of new properties or related entities (e.g., BoardMembers, Offices) in the future.
