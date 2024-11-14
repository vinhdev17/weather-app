import { Weather } from "../../../shared/api/weather";
import { RejectedDataType } from "../../../shared/types";

export interface IWeatherState {
  readonly weather: Weather | null;
  readonly loading: boolean;
  readonly error: RejectedDataType | null;
}

export type WeatherAction =
  | { type: "FETCH_WEATHER" }
  | { type: "FETCH_WEATHER_SUCCESS"; payload: Weather }
  | { type: "FETCH_WEATHER_ERROR"; error: RejectedDataType };
