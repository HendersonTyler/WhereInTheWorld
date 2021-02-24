import React, { useReducer } from "react";
import CountryContext from "./countryContext";
import CountryReducer from "./countryReducer";
import { CHECKANSWER, LAT, LONG, SETANSWER } from "../types";

import locations from "../../Locations";

const CountryState = (props) => {
  const randomLocation = Math.floor(Math.random() * 6);
  const initalState = {
    latitude: 0,
    longitude: 0,
    location: locations[randomLocation],
    guess: "",
    correct: false,
    beenAnswered: false,
  };
  const [state, dispatch] = useReducer(CountryReducer, initalState);

  function round(num) {
    return Math.round((num + Number.EPSILON) * 10000) / 10000;
  }

  const lat = () => {
    const lat =
      locations[randomLocation][1] + Math.random() * (0.0099 - 0.0001) + 0.0001;
    dispatch({
      type: LAT,
      payload: round(lat),
    });
  };

  const long = () => {
    const long =
      locations[randomLocation][2] + Math.random() * (0.0099 - 0.0001) + 0.0001;
    dispatch({
      type: LONG,
      payload: round(long),
    });
  };

  const setAnswer = (city) => {
    dispatch({
      type: SETANSWER,
      payload: city,
    });
  };

  const checkAnswer = (location, guess) => {
    var isRight = false;
    if (location === guess) {
      isRight = true;
    } else {
      isRight = false;
    }
    dispatch({
      type: CHECKANSWER,
      payload: isRight,
    });
  };

  return (
    <CountryContext.Provider
      value={{
        lat,
        long,
        setAnswer,
        checkAnswer,
        beenAnswered: state.beenAnswered,
        latitude: state.latitude,
        longitude: state.longitude,
        location: state.location,
        guess: state.guess,
        correct: state.correct,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
