import { IWeatherState, WeatherAction } from "./types";

export const initialState: IWeatherState = {
  weather: null,
  loading: false,
  error: null,
};

export const weatherReducer = (
  state: IWeatherState,
  action: WeatherAction
): IWeatherState => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return { ...state, loading: true, error: null };
    case "FETCH_WEATHER_SUCCESS":
      return { ...state, loading: false, weather: action.payload };
    case "FETCH_WEATHER_ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
