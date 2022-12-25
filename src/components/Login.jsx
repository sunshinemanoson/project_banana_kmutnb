import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
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

const theme = createTheme();

export default function SignInSide() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    let input_email = data.get("email");
    let input_password = data.get("password");

    var jsonData = {
      email: input_email,
      password: input_password,
    };
    
    fetch("http://localhost:8888/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if(!input_email || !input_password){
          alert("โปรดกรอก Eamil เเละ Pasword ให้ครบถ้วน")
        }
        else if (data.status === "ok_200") {
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", input_email);
          window.location = "/dashboard";
          alert(data.msg);
        } else {
          alert(data.msg);
        }
        console.log("Success:", data);
      })
      .catch((error) => {
      
        console.error("Error:", error);
      });
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
            <Typography component="h1" variant="h5">
              Sign in
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
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
             
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

// export default function () {
//   return (
//     <div className='relative w-full h-screen bg-zinc-900/100'>
//       <img className='absolute w-full h-full object-cover mix-blend-overlay' src='./images/banana.jpg' alt="/" />
//       <div className='flex justify-center items-center h-full'>
//         <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
//           <h2 className='text-3xl font-bold text-center py-8'>เข้าสู่ระบบ</h2>
//           <div className='flex flex-col mb-4'>
//             <label className='font-bold'>Username</label>
//             <input
//               className='border relative bg-gray-100 p-2'
//               placeholder='Enter your username'
//               type="text"
//             />
//           </div>
//           <div className='flex flex-col mb-4'>
//             <label className='font-bold'>Password</label>
//             <input
//               className='border relative bg-gray-100 p-2'
//               placeholder='Enter your password'
//               type="password"
//             />
//           </div>
//           <button className='w-full py-3 mt-8 bg-indigo-300 hover:bg-indigo-200 relative text-white'>Sign In</button>
//           <div className='text-center mt-8'>
//             <label className='text-black'>กรุณาสมัครเข้าใช้งาน !</label>
//             <p className='text-red-400  hover:text-red-200 relative'>Sign Up</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }
