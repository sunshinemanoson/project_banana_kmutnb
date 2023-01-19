import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import Button from "@mui/material/Button";
import { fontSize } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Kanit",
  },

  appbar: {
    background: "none",
    fontFamilyt: "Kanit",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
    fontSize: "1.5rem",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#ffcc11",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  TexttitleColor: {
    color: "#00ff00",
  },
  goDown: {
    color: "#00ff00",
    fontSize: "4rem",
  },
  button: {
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

  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const goToLogin = () => {window.location = "/login";}
  return (
    <div className={classes.root} id="header">
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
            <span className={classes.colorText}>Banana Consult App.</span>
          </h1>
          <IconButton>
            
            <span className={classes.button} href="login" onClick={goToLogin}><b>เข้าสู่ระบบ</b></span>
          </IconButton>
          <br></br>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
