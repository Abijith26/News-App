import SearchField from "./components/SearchField";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <TopBar />
      {/* <p className="text-orange-700 font-bold">
        Herzlich Willkommen zum Projekt ,,NEWS App"
      </p> */}
      <SearchField />
    </div>
  );
}

export default App;
