import React, {useState, useEffect} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Link as Scroll} from "react-scroll";


const useStyles = makeStyles((theme) => ({  
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh'
    },
    appbar: {
        background: 'none',
        fontFamily: "Nunito, san-serif"
    },
    appTitile: {
        flexGrow: '1',
    },

    appbarWrapper: {
        width: "80%",
        margin: "0 auto"
    },
    icon: {
        color:'white',
        fontSize: '1rem'
    },
    colorText: {
        color: "#5AFF3D"
    },

    container: {
        textAlign: 'center'
    },
    title: {
        color: "white",
        fontFamily: "Nunito",
        fontSize: '4rem'
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem'
    }
}));

function Header() {
    const classes = useStyles();
    const [cheked, setChekd] = useState(false);
    useEffect(() => {
        setChekd(true);
        return () => {
            setChekd(false);
        }
    }, [])
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appTitile}>My<span className={classes.colorText}>Island.</span></h1>
                    <IconButton className={classes.icon}>
                        <SortIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse in={cheked} {...(cheked ? {timeout: 1000} : {})} collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br/> My <span className={classes.colorText}>Island.</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown}/>
                    </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )

}

export default Header
