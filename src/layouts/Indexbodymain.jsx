import React from 'react';
import { styled } from '@mui/material/styles';
import ImageCard from './ImagesCard';
import bananafild from '../static/bananafild';
import useWindowPosition from '../hook/useWindowPosition.jsx';

const PREFIX = 'Indexbodymain';

const classes = {
  root: `${PREFIX}-root`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.root}`]: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  }
}));

export default function () {

  const checked = useWindowPosition('header');
  return (
    <Root className={classes.root} id="place-to-visit">
      <ImageCard place={bananafild[1]} checked={checked} className=""/>
      <ImageCard place={bananafild[0]} checked={checked} />
    </Root>
  );
}