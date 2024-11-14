import { fetchData } from "../fetchData";
import { WeatherData } from "./types";

export async function getWeatherByCity(
  latitude: number,
  longitude: number
): Promise<WeatherData | null> {
  try {
    const response = await fetchData<WeatherData>({
      url: "onecall",
      params: {
        lat: latitude,
        lon: longitude,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
