import { Search, Trash } from "lucide-react";

export default function SearchHistoryCardItem() {
  return (
    <div className="flex justify-between px-[1.25rem] py-[0.75rem] bg-purple-primary rounded-2xl items-center">
      <div>Johor, MY</div>
      <div className="flex items-center gap-[0.625rem]">
        <div>01-09-2022 09:41am</div>
        <div className="p-[0.625rem] rounded-full bg-white">
          <Search size={16} color="gray" />
        </div>
        <div className="p-[0.625rem] rounded-full bg-white">
          <Trash size={16} color="gray" />
        </div>
      </div>
    </div>
  );
}
