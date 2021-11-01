import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 545,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px'
    },
    media: {
        height: 340
    },
    title: {
        fontFamily: "Nunito",
        fontWeight: 'bold',
        fontSize: '2rem',
        color: 'white'
    },
    description: {
        fontFamily: "Nunito",
        fontSize: '1.1 rem',
        color: "#ddd"
    }
}));

export default function ImageCard({place, cheked }) {
    const clasess = useStyles()
  return (

    <Collapse in={cheked} {...(cheked ? {timeout: 1500} : {})}>
      <Card className={clasess.root}>
        <CardMedia
          component="img"
          className={clasess.media}
          image={place.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom  variant="h5" component="div" className={clasess.title}>
            {place.title}
          </Typography>
          <Typography variant="body2" className={clasess.description} component="p" color="text.secondary">
              {place.description}
          </Typography>
        </CardContent>     
      </Card>
    </Collapse>
  );
}