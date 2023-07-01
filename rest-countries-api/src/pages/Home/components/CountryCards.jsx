import { useAsyncValue } from 'react-router-dom';
import CountryCard from '../../../components/ui/CountryCard.jsx';
import useCountries from '../../../hooks/useCountries';

/**
 * Country cards
 */
export default function CountryCards() {
  const countries = useAsyncValue();
  const visibleCountries = useCountries(countries);

  return (
    <div className='cards-section flex flex-row flex-wrap'>
      {
        visibleCountries.map((country, index) => <CountryCard key={index} country={country} />)
      }
    </div>

  );
}
