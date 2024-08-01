export type Weather = {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    sea_level: number;
    pressure: number;
    humidity: number;
    grnd_level: number;
    feels_like: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    mains: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
};
