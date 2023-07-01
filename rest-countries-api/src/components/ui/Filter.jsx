import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import FilterOption from './FilterOption.jsx';

function Filter() {
  const continents = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const defaultText = 'Filter by Region';
  const [filter, setFilter] = useState(defaultText);
  const [filterActive, setFilterActive] = useState(false);

  function toggleFilters() {
    setFilterActive((isActive) => !isActive);
  }
  return (
    <div className=' filter text-body'>
      <div className='filter__active-option'
        onClick={() => toggleFilters()}>
        {filter === 'All' ? defaultText : filter}
        <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '2rem' }} />
      </div>
      <ul className={`filter__list${filterActive ? ' show' : ''}`}>
        {
          continents.map((continent) => <FilterOption
            key={continent.toLowerCase()}
            continent={continent}
            setFilter={setFilter}
            setFilterActive={setFilterActive}
          />)
        }
      </ul>
    </div>
  );
}

export default Filter;
