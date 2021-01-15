import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactStreetview from 'react-streetview';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
      },
  });


const streetViewPanoramaOptions = {
    // position: {lat: 46.9171876, lng: 17.8951832},
    position: {lat: 40.730610, lng: -74.0060},
    pov: {heading: 100, pitch: 0},
    zoom: 1,
    disableDefaultUI: true,
    showRoadLabels: false,
    clickToGo: false
    };

const App = () => {
    const classes = useStyles();
   
    return (
        <>
            <div id="map" style={{width: '100vw', height: '100vh', position: 'absolute', zIndex: '1'}}>
                <ReactStreetview
                    apiKey={process.env.REACT_APP_googleMapsApiKey}
                    streetViewPanoramaOptions={streetViewPanoramaOptions}
                    />
            </div>
            
            <Container style={{ height: '100vh', display: 'flex', alignItems: 'center'}} component="main" maxWidth="xs">
                <CssBaseline />
                <Card style={{zIndex: '2'}} className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography style={{fontSize: 'xx-large', textAlign: 'center'}} varient="h1" component="h1" gutterBottom>
                        Where in the World?
                        </Typography>
                        <Typography variant="body2" component="p">
                            <br/>
                        Can you guess where you are?
                        </Typography>
                        <br/>
                        <div style={{textAlign: 'center'}}>
                            <Button variant="contained">Let's Play</Button>
                        </div>
                    </CardContent>                    
                </Card>
            </Container>
        </>
    );
}
export default App;