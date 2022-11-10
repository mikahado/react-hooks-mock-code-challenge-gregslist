import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [searchTerm, setSearchTerm] = useState("")
 
  const handleSearch = (newSearch) =>
    setSearchTerm(newSearch)
  
  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer search={searchTerm}/>
    </div>
  );
}

export default App;
