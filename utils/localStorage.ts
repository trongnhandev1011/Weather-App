import { LS_SEARCH_HISTORIES_KEY } from "@/constants/localStorage";
import { SearchHistoryItem } from "@/types/localStorage";
import { City, Location } from "@/types/location";
import uniqBy from "lodash/uniqBy";

export const getSearchHistoryFromLocalStorage: () => SearchHistoryItem[] =
  () => {
    if (typeof window === "undefined") return [];

    const searchHistories = localStorage.getItem(LS_SEARCH_HISTORIES_KEY);
    if (!searchHistories) return [];

    const items = JSON.parse(searchHistories);
    if (!Array.isArray(items)) return [];

    const isValidHistory = items.every(
      (item) => item?.name && item?.date && item?.latitude && item?.longitude
    );
    return isValidHistory ? items : [];
  };

export const saveSearchHistoryToLocalStorage = (location: Location) => {
  if (typeof window === "undefined") return [];

  const searchHistories = getSearchHistoryFromLocalStorage();

  const mergedSearchHistories = uniqBy(
    [
      {
        ...location,
        date: new Date(),
      },
      ...searchHistories,
    ],
    "name"
  );

  localStorage.setItem(
    LS_SEARCH_HISTORIES_KEY,
    JSON.stringify(mergedSearchHistories)
  );

  return mergedSearchHistories;
};

export const deleteSearchHistoryFromLocalStorage = (
  searchHistory: SearchHistoryItem
) => {
  if (typeof window === "undefined") return [];

  const searchHistories = getSearchHistoryFromLocalStorage();

  const filteredSearchHistories = searchHistories.filter(
    (history) => history.code !== searchHistory.code
  );

  localStorage.setItem(
    LS_SEARCH_HISTORIES_KEY,
    JSON.stringify(filteredSearchHistories)
  );

  return filteredSearchHistories;
};
