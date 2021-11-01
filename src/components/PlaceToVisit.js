import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import places from "../static/places";
import ImageCard from "./ImageCard";
import useWindowPosition from "../hooks/useWindowPosition";
const useStyles = makeStyles((theme) => ({
    root:{
        height: '100vh',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },
        
    }
}));


function PlaceToVisit() {
    const classes = useStyles();
    const cheked = useWindowPosition('header');
    return (
        <div className={classes.root} id="place-to-visit">
            <ImageCard place={places[0]} cheked={cheked}/>
            <ImageCard place={places[1]} cheked={cheked}/>
        </div>
    )
}



export default PlaceToVisit
