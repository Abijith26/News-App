import NewsShower from "./components/NewsShower";
import SearchField from "./components/SearchField";
import TopBar from "./components/TopBar";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [isNewsSearched, setIsNewsSearched] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div>
      <TopBar />
      {/* <p className="text-orange-700 font-bold">
        Herzlich Willkommen zum Projekt ,,NEWS App"
      </p> */}
      <SearchField
        search={search}
        setSearch={setSearch}
        setSearchResult={setSearchResult}
        setIsNewsSearched={setIsNewsSearched}
      />

      <NewsShower searchResult={searchResult} isNewsSearched={isNewsSearched} />
    </div>
  );
}

export default App;
