import { Link } from 'react-router-dom';

export default function BorderCountries({ borderCountries }) {
  return (
    <div className='border-countries fs-details'>
      <pre className='info'>
        <span className='info__title text-body fw-600'>Border Countries: </span>
        <span className={`info__details text-body fw-300 ${borderCountries.length ? 'flex-info flex flex-wrap' : ''}`} >
          {
            borderCountries.length
              ? borderCountries.map((country, index) => (
                <Link key={index} to={`/countries/${country.alpha}`}>
                  <span key={index} className='border-country fs-details text-body'> {country.name}</span>;
                </Link>

              ))
              : <span className='text-body fs-details'>None</span>
          }
        </span>
      </pre>
    </div>
  );
}
