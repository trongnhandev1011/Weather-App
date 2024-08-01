import { CityContext } from "@/contexts/CityContext";
import { useGetWeatherByCity } from "@/services/weather/queries";
import { convertKDegreeToCDegree } from "@/utils/convert";
import { useContext } from "react";

export default function WeatherContainer() {
  const { selectedCity } = useContext(CityContext);

  const { data: weather } = useGetWeatherByCity({
    latitude: selectedCity?.latitude,
    longitude: selectedCity?.longitude,
  });

  if (!weather) return;

  return (
    <div>
      <div className="">Today's Weather</div>
      <div className="text-purple-strong text-[5rem] leading-[5rem] font-bold">
        {convertKDegreeToCDegree(weather?.main.temp)}
      </div>
      <div>
        H: {convertKDegreeToCDegree(weather?.main.temp_max)}° L:{" "}
        {convertKDegreeToCDegree(weather?.main.temp_min)}
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-gray-strong font-bold">{weather?.name}</div>
        <div className="text-gray-strong">{new Date().toUTCString()}</div>
        <div className="text-gray-strong">
          Humidity: {weather.main.humidity}%
        </div>
        <div className="text-gray-strong">{weather.weather[0].description}</div>
      </div>
    </div>
  );
}
