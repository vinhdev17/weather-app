import { FC, useContext } from "react";
import defaultImage from "../../../../shared/assets/images/defaultImage.png";
import { WeatherContext } from "../../../../app/providers/WeatherProvider";
import { dispatchFetchWeather } from "../../../weather/dispatches/dispatchFetchWeather";

import "./dropdownSearchItem.css";
import { City } from "../../../../shared/api/city";

interface IDropdownSearchItem {
  readonly image?: string;
  readonly city: City;
  setSelectedCity: React.Dispatch<React.SetStateAction<City | null>>;
}

export const DropdownSearchItem: FC<IDropdownSearchItem> = (props) => {
  const { image = defaultImage, city } = props;
  const { dispatch } = useContext(WeatherContext);

  const searchWeather = async () => {
    await await dispatchFetchWeather(
      city?.coord?.lat,
      city?.coord?.lon,
      dispatch
    );
    props.setSelectedCity(city);
  };

  return (
    <div className="dropdown-search-item" onClick={searchWeather}>
      <img src={image} className="dropdown-search-item__image" />
      <div className="ropdown-search-item__content-wrapper">
        <h1 className="dropdown-search-item__title">{city?.name}</h1>
        <h2 className="dropdown-search-item__subtitle">{city?.sys?.country}</h2>
      </div>
    </div>
  );
};
