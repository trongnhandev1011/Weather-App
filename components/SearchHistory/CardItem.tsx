"use client";

import { LocationContext } from "@/contexts/LocationContext";
import { SearchHistoryItem } from "@/types/localStorage";
import { formatDate } from "@/utils/date";
import { Search, Trash } from "lucide-react";
import { useContext } from "react";

export default function SearchHistoryCardItem({
  item,
  actions,
}: {
  item: SearchHistoryItem;
  actions: {
    removeSearchHistory: (searchHistory: SearchHistoryItem) => void;
  };
}) {
  const { setSelectedLocation } = useContext(LocationContext);

  return (
    <div className="flex justify-between px-[1.25rem] py-[0.75rem] bg-purple-pale dark:bg-purple-dark-bold rounded-2xl items-center">
      <div>
        <div className="dark:text-white">
          {item.name}
          {item?.country ? `, ${item.country.name}` : ""}
        </div>
        <div className="text-[0.625rem] md:hidden dark:text-text-light">
          {formatDate(item.date)}
        </div>
      </div>
      <div className="flex items-center gap-[0.625rem] dark:text-text-light">
        <div className="hidden md:block">{formatDate(item.date)}</div>
        <div
          className="p-[0.625rem] rounded-full bg-white dark:bg-inherit dark:border-[0.125rem] dark:border-text-light cursor-pointer"
          onClick={() => setSelectedLocation(item)}
        >
          <Search size={16} color="gray" />
        </div>
        <div className="p-[0.625rem] rounded-full bg-white dark:bg-inherit dark:border-[0.125rem]  dark:border-text-light cursor-pointer">
          <Trash
            size={16}
            color="gray"
            onClick={() => actions.removeSearchHistory(item)}
          />
        </div>
      </div>
    </div>
  );
}
