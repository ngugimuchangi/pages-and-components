import { useEffect } from 'react';
import { useAsyncValue } from 'react-router-dom';
import CountryInfoCard from '../../../components/ui/CountryInfoCard.jsx';
import Image from '../../../components/ui/Image.jsx';
import BorderCountries from '../../../components/ui/BorderCountries.jsx';

/**
 * Compilation of all country details for a page
 */
export default function CountryDetails() {
  const country = useAsyncValue();
  useEffect(() => {
    document.title = `Where in the world | ${country.name}`;
  }, [country.name]);
  return (
    <>
      <div className='country-info__flag'>
        <Image src={`${country.flags.svg}#svgView(preserveAspectRatio(none))`} />
      </div>
      <div className='country-info__text--container'>
        <CountryInfoCard country={country} />
        <BorderCountries borderCountries={country.borders} />
      </div>
    </>
  );
}
