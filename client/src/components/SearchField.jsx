import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Section from "./Section";
// import NewsShower from "./NewsShower";

export default function SearchField({ search, setSearch, setSearchResult }) {
  const searchDiv = useRef();
  const APIKey = "9GBRqRCkVpd6Voo5SG35kXXzKnKJ0Prk";

  useEffect(() => {
    gsap.fromTo(
      searchDiv.current,
      { y: -100, opacity: 0 },
      {
        y: 10,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, []);

  async function newsSearch(e) {
    e.preventDefault();
    console.log("News Search Begins...");
    const res = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${APIKey}`
    );
    const data = await res.json();
    console.log(data);
    setSearchResult([...data.response.docs]);
    console.log("News Search Ends...");
    setSearch("");
  }

  return (
    <div
      className="w-screen flex justify-evenly items-center"
      id="search-bar"
      ref={searchDiv}
    >
      <form
        className="px-4 w-full xl:max-w-[500px] lg:max-w-[400px] md:max-w-[370px] sm:max-w-[330px]"
        onSubmit={newsSearch}
      >
        <label
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          htmlFor="default-search"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <path
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="currentColor"
              ></path>
            </svg>
          </div>
          <input
            required=""
            placeholder="Search"
            className="block w-full p-4 py-5 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="default-search"
            type="search"
            value={search}
            onInput={(e) => setSearch(e.target.value)}
          />
          <button className="absolute end-2.5 bottom-1/2 translate-y-1/2 p-4 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="currentColor"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
      <Section />
    </div>
  );
}
