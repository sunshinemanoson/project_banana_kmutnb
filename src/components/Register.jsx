import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import swal from "sweetalert";
import { Link as RouterLink } from 'react-router-dom'; 

const theme = createTheme();
const axios = require("axios");

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");
    const fname = data.get("firstName");
    const lname = data.get("lastName");
    var jsonData = {
      email: email,
      password: password,
      fname: fname,
      lname: lname,
    };
    // console.log(data.get("email"))
    // console.log(data.get("fname"))
    
    if (!email || !password || !fname || !lname) {
      alert("โปรดกรอกให้ครบถ้วน");
    } else {
      localStorage.setItem("token", data.token);
      axios
        .post("http://localhost:8888/getuser", {
          email,
        })
        .then((res) => {
          console.log(res.data);
          console.log("res:", res);
          console.log("email:", email);
          if (res.data.flag === false) {
            swal("สมัครสมาชิกไม่สำเร็จ!", "Email นี้มีอยู่ในระบบแล้ว กรุณาเปลี่ยน Email.", "error");
          } else {
            fetch("http://localhost:8888/register", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(jsonData),
            })
              .then((response) => response.json())
              .then((data) => {})
              .catch((error) => {
                console.error("Error:", error);
              });
              swal("สมัครสมาชิกสำเร็จ!", "สมัครสมาชิกสำเร็จขอบคุณที่บริการ.", "success");
              setTimeout(() => {
                const firstNameTextField = document.getElementById("firstName");
                const firstNameValue = firstNameTextField.value;
                sessionStorage.setItem("user_firstName", firstNameValue);

                const lastNameTextField = document.getElementById("lastName");
                const lastNameValue = lastNameTextField.value;
                sessionStorage.setItem("user_lastName", lastNameValue);

                return <RouterLink to="/Add_infouser" />;
              }, 2000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log("Success:", data);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            สมัครสมาชิก
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="นามสกุล"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="อีเมล"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
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
                </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              สมัครสมาชิก
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <RouterLink to="/login" >
                มีแอคเคาท์ แล้วใช่ไหม ? เข้าสู่ระบบ
               </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
