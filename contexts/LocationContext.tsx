import { Location } from "@/types/location";
import { Dispatch, SetStateAction, createContext } from "react";

type LocationContextType = {
  selectedLocation?: Location;
  setSelectedLocation: Dispatch<SetStateAction<Location | undefined>>;
};

export const LocationContext = createContext<LocationContextType>({
  selectedLocation: undefined,
  setSelectedLocation: () => {},
});
