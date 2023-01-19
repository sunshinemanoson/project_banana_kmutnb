import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImagesCard';
import bananafild from '../static/bananafild';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={bananafild[1]} checked={checked} className=""/>
      <ImageCard place={bananafild[0]} checked={checked} />
    </div>
  );
}