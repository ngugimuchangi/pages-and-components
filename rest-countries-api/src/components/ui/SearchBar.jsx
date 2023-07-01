import SearchInput from './SearchInput.jsx';
import Filter from './Filter.jsx';

function SearchBar() {
  return (
    <div className='search flex flex-row flex-wrap justify-space-between align-center'>
      <SearchInput />
      <Filter />
    </div>
  );
}
export default SearchBar;
