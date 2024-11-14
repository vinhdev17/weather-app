import { FC, useState } from "react";
import { CitiesSearch } from "../features/search";
import { Weather } from "../features/weather";
import { Provider } from "./providers/provider";
import { City } from "../shared/api/city";

const App: FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  return (
    <Provider>
      <div className="container">
        <div className="w-50 mb-5">
          <CitiesSearch setSelectedCity={setSelectedCity} />
        </div>
        <Weather selectedCity={selectedCity} />
      </div>
    </Provider>
  );
};

export default App;
