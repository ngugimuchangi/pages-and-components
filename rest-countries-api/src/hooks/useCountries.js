import { useContext, useMemo, useDeferredValue } from 'react';
import { SearchContext } from '../contexts/searchContext.jsx';

export default function useCountries(countriesData) {
  const searchParams = useContext(SearchContext);
  const deferredSearchParams = useDeferredValue(searchParams);

  const visibleCountries = useMemo(() => {
    const { query, region } = deferredSearchParams;
    // filter countries
    const countries = countriesData.filter((country) => {
      const isMatchRegion = (country.region === region);
      const isMatchQuery = country.name.startsWith(query)
        || country.name.toLowerCase().split(' ')
          .some((word) => word.startsWith(query.toLowerCase()));

      // filter based on user input
      if (region === 'All') return isMatchQuery;

      // filter based on user input and specified region
      return isMatchQuery && isMatchRegion;
    });
    return countries;
  }, [countriesData, deferredSearchParams]);
  return visibleCountries;
}
