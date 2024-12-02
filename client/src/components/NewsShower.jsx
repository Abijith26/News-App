import News from "./News";

export default function NewsShower({ searchResult, isNewsSearched }) {
  return (
    <div className="h-96">
      <div className="mt-5 p-5 mx-24  rounded-md bg-gray-400 text-white  h-auto w-auto">
        {!isNewsSearched && <p className="text-center">Search for any News</p>}
        {searchResult.length > 0 && <News data={searchResult} />}
      </div>
    </div>
  );
}
