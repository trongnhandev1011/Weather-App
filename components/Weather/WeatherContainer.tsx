"use client";

import { LocationContext } from "@/contexts/LocationContext";
import { useGetWeatherByLocation } from "@/services/weather/queries";
import { convertKDegreeToCDegree } from "@/utils/convert";
import { formatDate } from "@/utils/date";
import { useContext } from "react";

export default function WeatherContainer() {
  const { selectedLocation } = useContext(LocationContext);

  const { data: weather } = useGetWeatherByLocation({
    latitude: selectedLocation?.latitude,
    longitude: selectedLocation?.longitude,
  });

  if (!weather) return;

  return (
    <div>
      <div className="text-sm md:text-base dark:text-white">
        Today's Weather
      </div>
      <div className="text-purple-strong dark:text-white text-[4rem] leading-[4rem] md:text-[6.5rem] md:leading-[6.5rem] font-bold mb-2">
        {convertKDegreeToCDegree(weather?.main.temp)}
      </div>
      <div className="dark:text-white hidden md:block">
        H: {convertKDegreeToCDegree(weather?.main.temp_max)}° L:{" "}
        {convertKDegreeToCDegree(weather?.main.temp_min)}
      </div>
      <div className="justify-between mt-2 hidden md:flex">
        <div className="text-gray-strong dark:text-white font-bold">
          {weather?.name}
        </div>
        <div className="text-gray-strong dark:text-white">
          {formatDate(new Date())}
        </div>
        <div className="text-gray-strong dark:text-white">
          Humidity: {weather.main.humidity}%
        </div>
        <div className="text-gray-strong dark:text-white">
          {weather.weather[0].description}
        </div>
      </div>
      <div className="grid grid-cols-2 md:hidden">
        <div className="dark:text-white">
          H: {convertKDegreeToCDegree(weather?.main.temp_max)}° L:{" "}
          {convertKDegreeToCDegree(weather?.main.temp_min)}
        </div>
        <div className="text-gray-strong dark:text-white">
          Humidity: {weather.main.humidity}%
        </div>
        <div className="text-gray-strong dark:text-white font-bold">
          {weather?.name}
        </div>
        <div className="text-gray-strong dark:text-white">
          {formatDate(new Date())}
        </div>
        <div className="text-gray-strong dark:text-white">
          {weather.weather[0].description}
        </div>
      </div>
    </div>
  );
}
