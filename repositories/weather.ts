import { weatherAxiosClient } from "@/services/axios";

export const getWeather = async ({
  latitude,
  longitude,
}: {
  latitude?: string;
  longitude?: string;
}) => {
  try {
    const result = await weatherAxiosClient.get("/data/2.5/weather", {
      params: {
        lat: latitude,
        lon: longitude,
      },
    });

    return result.data;
  } catch (err) {}
};
