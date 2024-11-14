export interface CityData {
  code: number;
  count: number;
  list: City[];
  message: string;
}

export interface City {
  id: string;
  name: string;
  coord: Cordinate;
  sys: Country;
}

export interface Cordinate {
  lat: number;
  lon: number;
}

export interface Country {
  country: string;
}
