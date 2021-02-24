import { LAT, LONG, SETANSWER, CHECKANSWER } from "../types";

const countryReducer = (state, action) => {
  switch (action.type) {
    case LAT:
      return {
        ...state,
        latitude: action.payload,
      };
    case LONG:
      return {
        ...state,
        longitude: action.payload,
      };
    case SETANSWER:
      return {
        ...state,
        guess: action.payload,
      };
    case CHECKANSWER:
      return {
        ...state,
        correct: action.payload,
        beenAnswered: true,
      };

    default:
      return state;
  }
};

export default countryReducer;
