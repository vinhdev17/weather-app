import { ChangeEvent, FC, useState } from "react";
import { DropdownSearchItem } from "../dropdownSearchItem/dropdownSearchItem";
import { Dropdown } from "../../../../shared/components/dropdown";
import { Input } from "../../../../shared/components/input";
import { City, getCities } from "../../../../shared/api/city";

import "./search.css";
import { useDebounce } from "../../../../shared/hooks";
import { Spinner } from "../../../../shared/components/spinner";

interface ISearch {
  readonly className?: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<City | null>>;
}

export const Search: FC<ISearch> = (props) => {
  const { className } = props;

  const { debouncedFunction: getResultsSearchDeboune, loadingDebounce } =
    useDebounce((searchSrc: string) => handleSearchCities(searchSrc));

  const [cities, setCities] = useState<City[] | null>(null);
  const [valueSearch, setValueSearch] = useState("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);

    if (e.target.value.length >= 3) {
      getResultsSearchDeboune(e.target.value);
    }
  };

  const handleSearchCities = async (city: string) => {
    const data = await getCities(city);

    if (data) {
      setCities(data?.list);
    }
  };

  const renderContent = () => {
    if (loadingDebounce) {
      return (
        <div className="search__loading">
          <Spinner />
        </div>
      );
    }

    if (valueSearch.length < 3) {
      return (
        <div className="search__info">
          Enter search terms, at least 3 characters
        </div>
      );
    }
    return (
      <div>
        {cities?.map((city) => (
          <DropdownSearchItem
            key={city.id}
            city={city}
            setSelectedCity={props.setSelectedCity}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`search ${className ? className : ""}`}>
      <Dropdown
        labelElement={
          <Input
            placeholder="Input city..."
            value={valueSearch}
            onChange={onChangeSearch}
          />
        }
        content={renderContent()}
        className="search__dropdown"
      />
    </div>
  );
};
