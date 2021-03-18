const SearchBar = ({ inputValue, handleChange }) => {
  const title = 'Rechercher';

  return (
    <div className="SearchBar">
      <h2 className="SearchBar__title">{title}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => { handleChange(event) }}
      />
    </div>
  );
};

export default SearchBar;
