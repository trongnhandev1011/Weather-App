import { getCities } from "@/repositories/location";
import { PaginationParams } from "@/types/common";
import { City } from "@/types/location";
import { useQuery } from "@tanstack/react-query";

export const useSearchCity = ({ page, size, searchKey }: PaginationParams) => {
  return useQuery<{ cities: City[] }>({
    queryKey: [page, size, searchKey],
    queryFn: () => getCities({ page, size, searchKey }),
  });
};
