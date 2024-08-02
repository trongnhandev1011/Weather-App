"use client";

import useDebounce from "@/hooks/useDebounce";
import { useSearchCountry } from "@/services/location/queries";
import { useState } from "react";
import SearchInput from ".";

export default function CountrySearchInput() {
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce(value, 1000);

  const { data, isFetching } = useSearchCountry({
    searchKey: debounceValue,
  });

  return (
    <SearchInput
      value={value}
      setValue={setValue}
      data={data?.countries ?? []}
      isFetching={isFetching}
      title="Country"
    />
  );
}
