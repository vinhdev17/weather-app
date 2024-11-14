import { FC } from "react";
import { WeatherProvider } from "./WeatherProvider";

interface IProviders {
  readonly children: JSX.Element;
}

export const Provider: FC<IProviders> = ({ children }) => {
  return <WeatherProvider>{children}</WeatherProvider>;
};
