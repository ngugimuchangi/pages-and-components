import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from './Image.jsx';
import Info from './Info.jsx';

/**
 * Country card element
 */
export default function CountryCard({ country }) {
  const {
    name, population, region, capital, flags, alpha,
  } = country;
  return (
    <Link className='card col' to={`countries/${alpha}`}>

      <div className='card__img'>
        <Image src={`${flags.svg}#svgView(preserveAspectRatio(none))`} alt={`${name}'s flag`} />
      </div>
      <div className='card__text text-body'>
        <h2 className='card__text__title fs-md fw-900'>{name}</h2>
        <Info infoTitle='Population'>{population.toLocaleString('en-US')}</Info>
        <Info infoTitle='Region'>{region}</Info>
        <Info infoTitle='Capital'>{capital}</Info>
      </div>
    </Link>
  );
}

// Country card props
CountryCard.propTypes = {
  country: PropTypes.object,
};
