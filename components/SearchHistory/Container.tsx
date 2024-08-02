import WeatherContainer from "../Weather/WeatherContainer";
import SearchHistoryCardItem from "./CardItem";

export default function SearchHistoryContainer() {
  return (
    <div className="w-full p-[3.125rem] bg-purple-primary mt-[7rem] rounded-[2.5rem] border-border-white border relative">
      <img
        src="/sun.png"
        alt="sun"
        className="absolute right-0 -top-[5.75rem]"
        width={280}
        height={250}
      />
      <WeatherContainer />
      <div className="p-6 bg-purple-light mt-6 rounded-3xl">
        <div className="mb-[1.625rem]">Search History</div>
        <div className="flex flex-col gap-[1.125rem]">
          {[...Array(5)].map((item, idx) => (
            <SearchHistoryCardItem key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
