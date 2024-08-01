"use client";

import SearchHistoryContainer from "@/components/SearchHistory/Container";
import SearchInput from "@/components/SearchInput";
import { CityContext } from "@/contexts/CityContext";
import { City } from "@/types/location";
import { useState } from "react";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<City>();

  return (
    <div className="h-full w-full flex flex-col items-center pb-10">
      <div className="w-[43.75rem]">
        <CityContext.Provider
          value={{
            selectedCity,
            setSelectedCity,
          }}
        >
          <SearchInput />
          <SearchHistoryContainer />
        </CityContext.Provider>
      </div>
    </div>
  );
}
