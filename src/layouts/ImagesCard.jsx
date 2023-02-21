import React from 'react';
import {Card,CardContent,CardMedia,Typography} from '@mui/material';
import { Collapse,styled } from '@mui/material';

const PREFIX = 'ImagesCard';

const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
  title: `${PREFIX}-title`,
  desc: `${PREFIX}-desc`
};

const StyledCollapse = styled(Collapse)({
  [`& .${classes.root}`]: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  [`& .${classes.media}`]: {
    height: 440,
  },
  [`& .${classes.title}`]: {
    fontFamily: 'Kanit',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  [`& .${classes.desc}`]: {
    fontFamily: 'Kanit',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});

export default function ImageCard({ place, checked }) {


  return (
    <StyledCollapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </StyledCollapse>
  );
}