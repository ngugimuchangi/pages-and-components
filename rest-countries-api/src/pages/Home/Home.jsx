import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import SearchBar from '../../components/ui/SearchBar.jsx';
import SearchContextProvider from '../../contexts/searchContext.jsx';
import CountryCards from './components/CountryCards.jsx';
import CountryCardSkeletons from './components/CountryCardSkeletons.jsx';
import fetchData from '../../utils/fetchData';
import formatCountryData from '../../utils/formatCountryData';

/**
 * Home route data provider
 * @returns {Promise} - country data promise
 */
export async function loader() {
  const countries = fetchData('https://restcountries.com/v3.1/all')
    .then((data) => data.map((country) => formatCountryData(country)));
  return defer({ countries });
}

/**
 * Home page
 */
export default function Home() {
  const { countries } = useLoaderData();
  return (
    <SearchContextProvider>
      <SearchBar />
      <Suspense fallback={<CountryCardSkeletons />}>
        <Await resolve={countries} errorElement={<CountryCardSkeletons />}>
          <CountryCards />
        </Await>
      </Suspense>
    </SearchContextProvider>
  );
}
