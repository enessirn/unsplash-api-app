import searchImages from '../api'
const SearchBar = ({searchValue,setSearchValue,setApi}) => {

  const enterKeyPress = (e) => {
    if (e.key === "Enter") {
      searchImages(searchValue,setApi)
    }
  };
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }
  
  return (
    <div>
      <div className="my-6 m-auto w-full">
        <input
          type="text"
          className="bg-gray-200 border-gray-400 text-md rounded-lg  block w-full p-2.5 outline-none"
          placeholder="e.g Cars"
          onChange={handleChange}
          value={searchValue}
          onKeyPress={enterKeyPress}
        />
      </div>
    </div>
  );
};
export default SearchBar;
