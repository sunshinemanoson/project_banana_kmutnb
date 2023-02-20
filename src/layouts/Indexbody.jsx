import React from 'react';
import { styled } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Header from './Header';
import  Indexbodymain from './Indexbodymain';

const PREFIX = 'Indexbody';

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
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/banana_BG5.jpeg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));

export default function App() {

  return (
    <Root className={classes.root}>
      <CssBaseline />
      <Header />
      <Indexbodymain />     
    </Root>
  );
} 