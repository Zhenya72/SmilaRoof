import st from './Search.module.scss'
const Search = ({ searchTerm, handleSearch, isDisabled }) => {
  return (
    <input
      className={st.input}
      type="text"
      placeholder="Пошук за назвою"
      value={searchTerm}
      onChange={handleSearch}
      disabled={isDisabled}
    />
  );
}

export default Search;
