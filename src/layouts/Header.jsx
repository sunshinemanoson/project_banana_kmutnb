import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { AppBar, IconButton, Toolbar, Collapse } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from "react-scroll";


const PREFIX = 'Header';

const classes = {
  root: `${PREFIX}-root`,
  appbar: `${PREFIX}-appbar`,
  appbarWrapper: `${PREFIX}-appbarWrapper`,
  appbarTitle: `${PREFIX}-appbarTitle`,
  icon: `${PREFIX}-icon`,
  colorText: `${PREFIX}-colorText`,
  container: `${PREFIX}-container`,
  title: `${PREFIX}-title`,
  TexttitleColor: `${PREFIX}-TexttitleColor`,
  goDown: `${PREFIX}-goDown`,
  button: `${PREFIX}-button`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    fontFamily: "Kanit",
  },

  [`& .${classes.appbar}`]: {
    background: "none",
    fontFamilyt: "Kanit",
  },

  [`& .${classes.appbarWrapper}`]: {
    width: "80%",
    margin: "0 auto",
    fontSize: "1.5rem",
  },

  [`& .${classes.appbarTitle}`]: {
    flexGrow: "1",
  },

  [`& .${classes.icon}`]: {
    color: "#fff",
    fontSize: "2rem",
  },

  [`& .${classes.colorText}`]: {
    color: "#ffcc11",
  },

  [`& .${classes.container}`]: {
    textAlign: "center",
  },

  [`& .${classes.title}`]: {
    color: "#fff",
    fontSize: "3.5rem",
  },

  [`& .${classes.TexttitleColor}`]: {
    color: "#00ff00",
  },

  [`& .${classes.goDown}`]: {
    color: "#00ff00",
    fontSize: 40,
  },

  [`& .${classes.button}`]: {
    fontFamily: "Kanit",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 2,
    borderRadius: 50,
    boxShadow: "1px 1px 5px 4px  #ffcc11",
    color: "white",
    height: 48,
    padding: "0 20px",
    margin: "20px",
    fontSize: "20px",

  }
}));

export default function Header() {

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const goToLogin = () => {window.location = "/login";}
  const OnHover = () => {}
  return (
    <Root className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My
            <span className={classes.colorText}>Banana.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome
            <span className={classes.TexttitleColor}> To</span>
            <br />
            <span className={classes.colorText}>Banana Decison Support System</span>
          </h1>
          <IconButton>
            
            <span className={classes.button} href="login" onmouseenter={OnHover} onClick={goToLogin}><b>เข้าสู่ระบบ</b></span>
          </IconButton>
          <br></br>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </Root>
  );
}
