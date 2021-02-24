import React from "react";

import Map from "./components/pages/Map";
import MainContent from "./components/pages/MainContent";
import CountryState from "./context/countries/CountryState";

const App = () => {
  return (
    <CountryState>
      <Map />
      <MainContent />
    </CountryState>
  );
};
export default App;
