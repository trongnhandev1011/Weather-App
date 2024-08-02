"use client";

import {
  deleteSearchHistoryFromLocalStorage,
  getSearchHistoryFromLocalStorage,
  saveSearchHistoryToLocalStorage,
} from "@/utils/localStorage";
import WeatherContainer from "../Weather/WeatherContainer";
import SearchHistoryCardItem from "./CardItem";
import { useContext, useEffect, useState } from "react";
import { SearchHistoryItem } from "@/types/localStorage";
import { LocationContext } from "@/contexts/LocationContext";

export default function SearchHistoryContainer() {
  const { selectedLocation } = useContext(LocationContext);
  const [searchHistories, setSearchHistories] = useState<SearchHistoryItem[]>(
    []
  );

  const removeSearchHistory = (searchHistory: SearchHistoryItem) => {
    const newSearchHistories =
      deleteSearchHistoryFromLocalStorage(searchHistory);

    setSearchHistories(newSearchHistories);
  };

  useEffect(() => {
    setSearchHistories(getSearchHistoryFromLocalStorage());
  }, []);

  useEffect(() => {
    if (!selectedLocation) return;

    const newSearchHistories =
      saveSearchHistoryToLocalStorage(selectedLocation);
    setSearchHistories(newSearchHistories);
  }, [selectedLocation]);

  return (
    <div className="search-history-container w-full p-[1.5rem] md:p-[3.125rem] bg-purple-primary dark:bg-purple-dark-primary mt-[7rem] rounded-[1.25rem] md:rounded-[2.5rem] border-border-white dark:border-purple-dark-primary border relative">
      <img
        src="/sun.png"
        alt="sun"
        className="absolute right-0 -top-[3rem] md:-top-[5.75rem] w-[9.375rem] h-[8.5rem] md:w-[17.5rem] md:h-[15.625rem]"
      />
      <WeatherContainer />
      <div className="p-6 bg-purple-light dark:bg-purple-dark-light mt-6 rounded-3xl">
        <div className="mb-[1.625rem] dark:text-white">Search History</div>
        <div className="flex flex-col gap-[1.125rem]">
          {searchHistories.map((history, idx) => (
            <SearchHistoryCardItem
              item={history}
              key={idx}
              actions={{ removeSearchHistory }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
