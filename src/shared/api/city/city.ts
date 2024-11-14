import { fetchData } from "../fetchData";
import { CityData } from "./types";

export async function getCities(city: string): Promise<CityData | null> {
  try {
    const response = await fetchData<CityData>({
      url: "find",
      params: {
        q: city,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
