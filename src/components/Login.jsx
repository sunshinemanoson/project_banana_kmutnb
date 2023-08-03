import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Link as RouterLink } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [open, setOpen] = React.useState(false);
  const [openEmtry, setOpenEmtry] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogNotPass = () => {
    setOpen(true);
  };

  const handleEmtry = () => {
    setOpenEmtry(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCloseEmtry = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenEmtry(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    let input_email = data.get("email");
    let input_password = data.get("password");

    const axios = require("axios");
    // var jsonData = {
    //   email: input_email,
    //   password: input_password,
    // };
    const email = data.get("email");
    const password = data.get("password");
    if (!input_email || !input_password) {
      handleEmtry();
      alert("โปรดกรอก Eamil เเละ Pasword ให้ครบถ้วน");
      // <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      //   <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
      //     โปรดกรอก Eamil เเละ Pasword ให้ครบถ้วน
      //   </Alert>
      // </Snackbar>;
    } else {
      // window.location = "/dashboard";
      // localStorage.setItem("token", data.token);
      // localStorage.setItem("email", input_email);
      // localStorage.setItem("Page", 1);
      // localStorage.setItem("Status", 1);
      // console.log(localStorage.getItem("Status"));
      axios
        .post("http://localhost:8888/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data.status === "ok_200") {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", email);
            if (res.data.user_status === 0) {
              sessionStorage.setItem("user_status", 0);
              navigate("/feed");
            } else {
              navigate("/dashboard");
            }
          } else {
            handleLogNotPass();
          }
          console.log(res.data.msg);          
         
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://i.etsystatic.com/28684748/r/il/4f81cb/3944071472/il_fullxfull.3944071472_3m83.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar> */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Stack spacing={2} sx={{ width: "100%" }}></Stack>
            <Typography component="h1" variant="h5">
            เข้าสู่ระบบ
            </Typography>
            
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="อีเมล"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                รหัสผ่าน
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                // onClick={handleClick}
                sx={{ mt: 3, mb: 2 }}
              >
                เข้าสู่ระบบ
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="dashboard" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                <RouterLink to="/register" variant="body2" >
            {"สมัครสมาชิก"}
          </RouterLink>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Snackbar openEmtry={openEmtry} autoHideDuration={12000} onClose={handleEmtry}>
            <Alert
              onClose={handleCloseEmtry}
              severity="warning"
              sx={{ width: "100%" }}
            >
             โปรดกรอก Eamil เเละ Pasword ให้ครบถ้วน.
            </Alert>
          </Snackbar>
      <Snackbar open={open} autoHideDuration={12000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              User or Password not corected.
            </Alert>
          </Snackbar>
    </ThemeProvider>
    
  );
}
