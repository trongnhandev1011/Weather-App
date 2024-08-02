"use client";

import useDebounce from "@/hooks/useDebounce";
import { useSearchCity } from "@/services/location/queries";
import { useState } from "react";
import SearchInput from ".";

export default function CitySearchInput() {
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce(value, 1000);

  const { data, isFetching } = useSearchCity({
    searchKey: debounceValue,
  });

  return (
    <SearchInput
      value={value}
      setValue={setValue}
      data={data?.cities ?? []}
      isFetching={isFetching}
      title="City"
    />
  );
}
