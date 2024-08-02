export type Location = {
  code: string;
  latitude: string;
  longitude: string;
  name: string;
  country?: {
    code: string;
    name: string;
  };
};

export type City = Location & {
  country: {
    code: string;
    name: string;
  };
};

export type Country = Location;
