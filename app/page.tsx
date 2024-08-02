"use client";

import SearchHistoryContainer from "@/components/SearchHistory/Container";
import CitySearchInput from "@/components/SearchInput/CitySearchInput";
import CountrySearchInput from "@/components/SearchInput/CountrySearchInput";
import ThemeSwitch from "@/components/ThemeSwitch";
import { LocationContext } from "@/contexts/LocationContext";
import { Location } from "@/types/location";
import { useState } from "react";

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState<Location>();

  return (
    <div className="bg-light dark:bg-dark min-h-screen overflow-auto">
      <div className="h-full w-full flex flex-col items-center pb-10">
        <div className="md:w-[43.75rem] px-[1.125rem] px-4 md:px-0">
          <LocationContext.Provider
            value={{
              selectedLocation,
              setSelectedLocation,
            }}
          >
            <div className="flex flex-col items-center mt-[1.25rem] gap-2">
              <ThemeSwitch />
              <CitySearchInput />
              <CountrySearchInput />
            </div>
            <SearchHistoryContainer />
          </LocationContext.Provider>
        </div>
      </div>
    </div>
  );
}
