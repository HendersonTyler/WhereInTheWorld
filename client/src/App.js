import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactStreetview from "react-streetview";
import locations from "./Locations";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles({
	root: {
		width: "100%",
		maxWidth: 500,
	},
});

const randomLocation = Math.floor(Math.random() * 6);

const streetViewPanoramaOptions = {
	position: latLong(),
	preference: "nearest",
	radius: "5000",
	source: "outdoor",
	pov: { heading: 100, pitch: 0 },
	zoom: 1,
	disableDefaultUI: true,
	showRoadLabels: false,
	clickToGo: false,
};

function round(num) {
	return Math.round((num + Number.EPSILON) * 10000) / 10000;
}

function latLong() {
	const lat =
		locations[randomLocation][1] +
		Math.random() * (0.0099 - 0.0001) +
		0.0001;
	const long =
		locations[randomLocation][2] +
		Math.random() * (0.0099 - 0.0001) +
		0.0001;
	return { lat: round(lat), lng: round(long) };
}

const App = () => {
	const [userGuess, setUserGuess] = useState("");
	const [checkAnswer, setCheckAnswer] = useState(false);

	const classes = useStyles();

	return (
		<>
			<div
				id='map'
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

			<Container
				style={{
					height: "100vh",
					display: "flex",
					alignItems: "center",
				}}
				component='main'
				maxWidth='xs'
			>
				<CssBaseline />
				<Card
					style={{ zIndex: "2" }}
					className={classes.root}
					variant='outlined'
				>
					<CardContent>
						<Typography
							style={{
								fontSize: "xx-large",
								textAlign: "center",
							}}
							varient='h1'
							component='h1'
							gutterBottom
						>
							Where in the World?
						</Typography>
						{!checkAnswer ? (
							<>
								<Typography variant='body2' component='p'>
									<br />
									Can you guess which city you are in?
								</Typography>

								<br />
								<form
									onSubmit={(e) => {
										e.preventDefault();
										setCheckAnswer(true);
									}}
								>
									<Autocomplete
										id='city-box'
										options={locations}
										onChange={(e) =>
											setUserGuess(
												e.target.firstChild.data
											)
										}
										getOptionLabel={(option) => option[0]}
										style={{ width: 300 }}
										renderInput={(params) => (
											<TextField
												{...params}
												label='City'
												variant='outlined'
											/>
										)}
									/>
									<br />
									<div style={{ textAlign: "center" }}>
										<Button
											type='submit'
											variant='contained'
										>
											Submit
										</Button>
									</div>
								</form>
							</>
						) : (
							<div style={{ textAlign: "center" }}>
								{locations[randomLocation][0] === userGuess ? (
									<CheckIcon
										fontSize='large'
										style={{ color: "green" }}
									/>
								) : (
									<ClearIcon
										fontSize='large'
										style={{ color: "red" }}
									/>
								)}
								<br />
								You are in {locations[randomLocation][0]}.
								<br />
								<br />
								<form>
									<div style={{ textAlign: "center" }}>
										<Button
											type='submit'
											variant='contained'
										>
											Try Again
										</Button>
									</div>
								</form>
							</div>
						)}
					</CardContent>
				</Card>
			</Container>
		</>
	);
};
export default App;
