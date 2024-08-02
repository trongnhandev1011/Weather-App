"use client";

import { LocationContext } from "@/contexts/LocationContext";
import { Location } from "@/types/location";
import clsx from "clsx";
import { Dispatch, SetStateAction, useContext } from "react";
import Skeleton from "react-loading-skeleton";

type SearchInputType = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  data: Location[];
  isFetching: boolean;
  title: string;
};

export default function SearchInput({
  value,
  setValue,
  data,
  isFetching,
  title,
}: SearchInputType) {
  const { setSelectedLocation } = useContext(LocationContext);

  return (
    <>
      {value && (
        <div
          className="w-screen h-screen opacity-0 absolute top-0 left-0 z-10"
          onClick={() => setValue("")}
        ></div>
      )}
      <div
        className={clsx(
          "flex items-center gap-[0.625rem] md:gap-[1.25rem] w-full z-50 relative",
          title === "City" && "z-[100]"
        )}
      >
        <div className="flex items-center w-full bg-purple-primary dark:bg-purple-dark-primary px-[1.375rem] py-2 rounded-[0.5rem] md:rounded-[1.25rem] relative">
          <div className="text-[0.5rem] md:text-[0.625rem] text-gray-primary dark:text-white">
            {title}
          </div>
          <div className="flex-1 ml-3">
            <input
              className="w-full bg-transparent focus-visible:outline-none dark:text-white"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div
          className={clsx(
            "bg-purple-primary dark:bg-purple-dark-primary px-[1rem] py-3 rounded-lg w-full md:w-[43.75rem] absolute shadow z-[100] top-[3.5rem]",
            !value && "hidden"
          )}
        >
          {data?.length ? (
            data?.map((location) => (
              <div
                key={location.code}
                className="hover:bg-purple-hover p-2 rounded hover:cursor-pointer dark:text-white"
                onClick={() => {
                  setSelectedLocation(location);
                  setValue("");
                }}
              >
                {`${location.name}${location.country ? `- ${location.country.name}` : ""}`}
              </div>
            ))
          ) : (
            <div>
              {isFetching ? (
                <Skeleton count={5} baseColor="gray" />
              ) : (
                <span className="dark:text-white">
                  No result found... Please try another keyword!
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
