import { getWeather } from "@/repositories/weather";
import { Weather } from "@/types/weather";
import { useQuery } from "@tanstack/react-query";

export const useGetWeatherByLocation = ({
  latitude,
  longitude,
}: {
  latitude?: string;
  longitude?: string;
}) => {
  return useQuery<Weather>({
    queryKey: [latitude, longitude],
    queryFn: () => getWeather({ latitude, longitude }),
    enabled: !!(latitude && longitude),
    refetchInterval: 5 * 60 * 1000, // refetch every 5 minutes
  });
};
