import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SearchUpdateContext } from '../../contexts/searchContext.jsx';

function SearchInput() {
  const [searchInput, setSearchInput] = useState('');
  const setSearchParams = useContext(SearchUpdateContext);
  return (
    <div className='search-input-wrapper'>
      <FontAwesomeIcon className='text-input search-icon' icon={faMagnifyingGlass} size='lg' />
      <input
        id='search-input'
        className='text-input search-input'
        type='search'
        value={searchInput}
        placeholder='Search for a country...'
        onChange={(e) => {
          setSearchInput(e.target.value);
          setSearchParams((params) => ({ ...params, query: e.target.value }));
        }}
      />
    </div>);
}

export default SearchInput;
