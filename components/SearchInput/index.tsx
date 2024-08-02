import { CityContext } from "@/contexts/CityContext";
import useDebounce from "@/hooks/useDebounce";
import { useSearchCity } from "@/services/location/queries";
import clsx from "clsx";
import { Search } from "lucide-react";
import { useContext, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function SearchInput() {
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce(value, 1000);

  const { data, isFetching } = useSearchCity({
    searchKey: debounceValue,
  });

  const { setSelectedCity } = useContext(CityContext);

  return (
    <>
      {value && (
        <div
          className="w-screen h-screen opacity-0 absolute top-0 left-0 z-10"
          onClick={() => setValue("")}
        ></div>
      )}
      <div className="flex items-center mt-[1.25rem] gap-[1.25rem] w-full z-50">
        <div className="flex items-center w-full bg-purple-primary px-[1.375rem] py-2 rounded-[1.25rem] relative">
          <div>
            <div className="text-[0.625rem] text-gray-primary">Country</div>
            <div>Singa |</div>
          </div>
          <div className="flex-1 ml-3">
            <input
              className="w-full bg-transparent focus-visible:outline-none"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className="p-[1.125rem] rounded-[1.25rem] bg-purple-strong">
          <Search size={24} color="white" />
        </div>
      </div>
      <div
        className={clsx(
          "bg-purple-primary px-[1rem] py-3 rounded-lg w-[620px] absolute shadow z-50",
          !value && "hidden"
        )}
      >
        {data?.cities.length ? (
          data?.cities.map((city) => (
            <div
              className="hover:bg-purple-hover p-2 rounded hover:cursor-pointer"
              onClick={() => {
                setSelectedCity(city);
                setValue("");
              }}
            >
              {city.name} - {city.country.name}
            </div>
          ))
        ) : (
          <div>
            {isFetching ? (
              <Skeleton count={5} baseColor="gray" />
            ) : (
              "No result found... Please try another keyword!"
            )}
          </div>
        )}
      </div>
    </>
  );
}
