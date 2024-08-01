import { City } from "@/types/location";
import { Dispatch, SetStateAction, createContext } from "react";

type CityContextType = {
  selectedCity?: City;
  setSelectedCity: Dispatch<SetStateAction<City | undefined>>;
};

export const CityContext = createContext<CityContextType>({
  selectedCity: undefined,
  setSelectedCity: () => {},
});
