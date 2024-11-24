export default function Section() {
  return (
    <div className="bg-slate-900 p-5 rounded-md text-white flex justify-evenly items-center font-semibold xl:w-[25%] lg:w-[30%] md:w-[30%] sm:w-[40%]">
      <span className="p-1 hover:text-stone-900 hover:bg-gray-300 hover:rounded-md transition-all hover:cursor-pointer">
        Sports
      </span>
      <span className="p-1 hover:text-stone-900 hover:bg-gray-300 hover:rounded-md transition-all hover:cursor-pointer">
        Weather
      </span>
      <span className="p-1 hover:text-stone-900 hover:bg-gray-300 hover:rounded-md transition-all hover:cursor-pointer">
        City
      </span>
    </div>
  );
}
