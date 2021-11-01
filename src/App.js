import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";
import bgImage from "./assets/bg.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',    
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <CssBaseline />
       <Header />
       <PlaceToVisit/>
    </div>
   
  );
}

export default App;
