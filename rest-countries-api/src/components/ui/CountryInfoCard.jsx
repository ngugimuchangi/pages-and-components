import PropTypes from 'prop-types';
import Info from './Info.jsx';

/**
 */
export default function CountryInfoCard({ country }) {
  return (
    <div className='country-info__text text-body'>
      <h2 className='country-info__text__name fs-lg fw-900'>{country.name}</h2>
      <div className='country-info__text__details flex flex-row flex-wrap justify-space-between fs-details'>
        <div className="country-info__text__details__col">
          <Info infoTitle='Native Name '>{country.nativeName}</Info>
          <Info infoTitle='Population '>{country.population}</Info>
          <Info infoTitle='Region '>{country.region}</Info>
          <Info infoTitle='Sub Region '>{country.subregion}</Info>
          <Info infoTitle='Capital'>{country.capital}</Info>
        </div>
        <div className="country-info__text__details__col">
          <Info infoTitle='Top Level Domain'>{country.tld}</Info>
          <Info infoTitle='Currencies'>{country.currencies.join(', ')}</Info>
          <Info infoTitle='Languages'>{country.languages.join(', ')}</Info>
        </div>
      </div>
    </div>
  );
}

// Country info card props
CountryInfoCard.propTypes = {
  country: PropTypes.object,
};
