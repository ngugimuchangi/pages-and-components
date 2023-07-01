/**
 * Formats country data from REST API
 * @param {object} country - raw country data from fetch request
 * @returns {object} - formatted country data
 */
export default function formatCountryData(country) {
  const name = country.name.common;
  const nativeName = country.name.nativeName
    ? country.name.nativeName[Object.keys(country.name.nativeName)[0]]?.common : '';
  const capital = country.capital ? country.capital[0] : '';
  const languages = country.languages ? Object.values(country.languages) : [];
  const { region } = country;
  const { subregion } = country;
  const { population } = country;
  const { flags } = country;
  const tld = country.tld ? country.tld[0] : '';
  const currencies = country.currencies
    ? Object.values(country.currencies).map((currency) => currency.name) : [];
  const { borders = [] } = country;
  const alpha = country.cca2;
  const countryData = {
    name,
    alpha,
    nativeName,
    capital,
    region,
    subregion,
    population,
    flags,
    currencies,
    languages,
    tld,
    borders,
  };
  return countryData;
}
