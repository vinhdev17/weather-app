import { getWeatherByCity } from "../../../shared/api/weather";
import { WeatherAction } from "../model/types";

export const dispatchFetchWeather = async (
  latitude: number,
  longitude: number,
  dispatch: React.Dispatch<WeatherAction>
) => {
  dispatch({ type: "FETCH_WEATHER" });

  try {
    const response = await getWeatherByCity(latitude, longitude);
    if (!response) throw new Error("Failed to fetch weather data.");

    dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: response.current });
  } catch (error) {
    dispatch({
      type: "FETCH_WEATHER_ERROR",
      error: {
        messageError: "Failed to get weather",
      },
    });
  }
};
