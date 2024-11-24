import News from "./News";

export default function NewsShower({ searchResult }) {
  return (
    <div className="mt- flex justify-center items-center ">
      {searchResult.length === 0 && <p>No News Searched</p>}
      {searchResult.length > 0 && <News data={searchResult} />}
    </div>
  );
}
