import React, { useContext, useState } from "react";
import locations from "../Locations";
import CountryContext from "../context/countries/countryContext";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DropDown = () => {
  const countryContext = useContext(CountryContext);
  const { setAnswer } = countryContext;
  const [guess, setGuess] = useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setAnswer(event.target.value);
    setGuess(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={guess}
          onChange={handleChange}
        >
          {locations ? (
            locations.map((x) => (
              <MenuItem key={x[0]} value={x[0]}>
                {x[0]}
              </MenuItem>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
