import React, { useContext, useEffect } from "react";
import ReactStreetview from "react-streetview";
import CountryContext from "../../context/countries/countryContext";

const Map = () => {
  const countryContext = useContext(CountryContext);
  const { lat, long, latitude, longitude } = countryContext;

  useEffect(() => {
    lat();
    long();
  }, []);

  let streetViewPanoramaOptions = {
    position: { lat: latitude, lng: longitude },
    preference: "nearest",
    radius: "5000",
    source: "outdoor",
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
    disableDefaultUI: true,
    showRoadLabels: false,
    clickToGo: false,
  };

  return (
    <div
      id="map"
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: "1",
      }}
    >
      <ReactStreetview
        apiKey={process.env.REACT_APP_googleMapsApiKey}
        streetViewPanoramaOptions={streetViewPanoramaOptions}
      />
    </div>
  );
};

export default Map;
