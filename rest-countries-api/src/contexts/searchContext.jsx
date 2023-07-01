import { createContext, useState } from 'react';

export const SearchContext = createContext(null);
export const SearchUpdateContext = createContext(null);

function SearchContextProvider({ children }) {
  const [searchParams, setSearchParams] = useState({ query: '', region: 'All' });
  return (
    <SearchContext.Provider value={searchParams}>
      <SearchUpdateContext.Provider value={setSearchParams}>
        {children}
      </SearchUpdateContext.Provider>
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
