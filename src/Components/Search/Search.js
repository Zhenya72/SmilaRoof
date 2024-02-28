import st from './Search.module.scss'
const Search = ({ searchTerm, handleSearch }) => {
  return (
    <input
      className={st.input}
      type="text"
      placeholder="Пошук за назвою"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default Search;
