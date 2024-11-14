import { FC, useContext } from "react";

import { WeatherContext } from "../../../app/providers/WeatherProvider";

import "./weather.css";
import { Spinner } from "../../../shared/components/spinner";
import { City } from "../../../shared/api/city";

interface IWeather {
  readonly selectedCity?: City | null;
}

export const Weather: FC<IWeather> = ({ selectedCity }) => {
  const { state } = useContext(WeatherContext);
  const { weather, error, loading } = state;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <>{error.messageError}</>;
  }

  return (
    <div className="weather">
      <div>
        {selectedCity?.name}, {weather?.temp}°C
      </div>
      <div>Humidity: {weather?.humidity}%</div>
    </div>
  );
};
