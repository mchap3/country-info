/* eslint-disable react/prop-types */
import InfoDisplay from './InfoDisplay';

const SearchResult = ({ search, setSearch, countries }) => {
  const countriesToShow = countries.filter(c => c.toLowerCase().includes(search.toLowerCase()));

  if (countriesToShow.length === 0) {
    return <div>No countries found, use another search.</div>;
  }
  else if (countriesToShow.length === 1) {
    return <InfoDisplay country={countriesToShow[0]} />;
  }
  else if (countriesToShow.length <= 10) {
    const match = countriesToShow.find(c => c.toLowerCase() === search.toLowerCase())
    if (match) {
      return <InfoDisplay country={countriesToShow[0]} />
    } else return (
      countriesToShow.map(country => 
      <div key={country}>
        {country} {}
        <button onClick={() => setSearch(country)}>
          show
        </button>
      </div>
      )
    );
  }
  else {
    return <div>Too many countries, use another search.</div>;
  }
};

export default SearchResult