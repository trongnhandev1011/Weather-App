import { locationsAxiosClient } from "@/services/axios";
import { PaginationParams } from "@/types/common";

export const getCities = async ({
  page = 1,
  size = 5,
  searchKey = "",
}: PaginationParams) => {
  try {
    const result = await locationsAxiosClient.get("/cities", {
      params: {
        page,
        size,
        search: searchKey,
      },
    });

    return result.data;
  } catch (err) {}
};

export const getCountries = async ({
  page = 1,
  size = 5,
  searchKey = "",
}: PaginationParams) => {
  try {
    const result = await locationsAxiosClient.get("/countries", {
      params: {
        page,
        size,
        search: searchKey,
      },
    });

    return result.data;
  } catch (err) {}
};
