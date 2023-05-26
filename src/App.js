import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";
function App() {
    const [inputValue, setInputValue] = useState("");
    const [apiValue,setApiValue] = useState([]);
  return (
    <div className="p-6 m-auto cursor-pointer">
      <h1 className="text-2xl md:text-5xl lg:text-7xl text-center">
        Image Searching Bar
      </h1>
      <SearchBar searchValue={inputValue} setSearchValue={setInputValue} setApi={setApiValue}/>
      <ImageList arr={apiValue} />
    </div>
  );
}
export default App;
