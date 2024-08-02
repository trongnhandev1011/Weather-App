import axios from "axios";

export const weatherAxiosClient = axios.create({
  baseURL: "http://api.openweathermap.org",
  params: {
    appId: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
  },
});

export const locationsAxiosClient = axios.create({
  baseURL: "https://api.thecompaniesapi.com/v1/locations",
});
