// WeatherContext.tsx
import React, { createContext, useReducer, ReactNode } from "react";
import {
  initialWeatherState,
  IWeatherState,
  WeatherAction,
  weatherReducer,
} from "../../features/weather";
import { createContextAndErrorIfNull } from "../../shared/hooks";

interface WeatherContextType {
  state: IWeatherState;
  dispatch: React.Dispatch<WeatherAction>;
}

export const WeatherContext =
  createContextAndErrorIfNull<WeatherContextType>(null);

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(weatherReducer, initialWeatherState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
