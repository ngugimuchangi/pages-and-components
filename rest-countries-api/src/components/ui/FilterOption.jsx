import { useContext } from 'react';
import { SearchUpdateContext } from '../../contexts/searchContext.jsx';

function FilterOption({ continent, setFilterActive, setFilter }) {
  const setSearchParams = useContext(SearchUpdateContext);
  /**
   * Sets current filters and
   * closes filter options
   */
  function changeRegion() {
    setFilter(continent);
    setFilterActive(false);
    setSearchParams((params) => ({
      ...params,
      region: continent === 'America' ? 'Americas' : continent,
    }));
  }

  return (
    <li className='filter__list__option' onClick={() => changeRegion()}>
      {continent}
    </li>);
}

export default FilterOption;
