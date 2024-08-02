import { getCities, getCountries } from "@/repositories/location";
import { PaginationParams } from "@/types/common";
import { Location } from "@/types/location";
import { useQuery } from "@tanstack/react-query";

export const useSearchCity = ({ page, size, searchKey }: PaginationParams) => {
  return useQuery<{ cities: Location[] }>({
    queryKey: [page, size, searchKey],
    queryFn: () => getCities({ page, size, searchKey }),
  });
};

export const useSearchCountry = ({
  page,
  size,
  searchKey,
}: PaginationParams) => {
  return useQuery<{ countries: Location[] }>({
    queryKey: [page, size, searchKey],
    queryFn: () => getCountries({ page, size, searchKey }),
  });
};
