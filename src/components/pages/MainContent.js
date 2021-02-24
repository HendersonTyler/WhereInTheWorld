import React, { useContext } from "react";
import DropDown from "../DropDown";
import CountryContext from "../../context/countries/countryContext";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

const MainContent = () => {
  const countryContext = useContext(CountryContext);
  const {
    guess,
    checkAnswer,
    beenAnswered,
    location,
    correct,
  } = countryContext;

  const classes = useStyles();

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <Card style={{ zIndex: "2" }} className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            style={{
              fontSize: "xx-large",
              textAlign: "center",
            }}
            varient="h1"
            component="h1"
            gutterBottom
          >
            Where in the World?
          </Typography>
          {!beenAnswered ? (
            <>
              <Typography variant="body2" component="p">
                <br />
                Can you guess which city you are in?
              </Typography>

              <br />
              <DropDown />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  checkAnswer(location[0], guess);
                }}
              >
                <br />
                <div style={{ textAlign: "center" }}>
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center" }}>
              {correct === true ? (
                <CheckIcon fontSize="large" style={{ color: "green" }} />
              ) : (
                <ClearIcon fontSize="large" style={{ color: "red" }} />
              )}
              <br />
              You are in {location[0]}.
              <br />
              <br />
              <form>
                <div style={{ textAlign: "center" }}>
                  <Button type="submit" variant="contained">
                    Try Again
                  </Button>
                </div>
              </form>
            </div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default MainContent;
