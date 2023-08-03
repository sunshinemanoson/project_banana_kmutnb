import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Layout from "../layouts/Layout";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const cards = [1];
// const cards2 = [1];

const theme = createTheme();
const axios = require("axios");
const email = localStorage.getItem("email");
const w_type = sessionStorage.getItem("status_weight");

export default function Dashboard() {

  const navigate = useNavigate();
  const add_Raw_page = () => {
    if (localStorage.length === 3) {
      sessionStorage.setItem("status_weight", "raw");
      axios
        .post("http://localhost:8888/delete_eigen", {
          email,w_type
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      // console.log("handle !!!!");
      // console.log("1",email,w_type);
      navigate("/Add_wideth_Raw_1");
    }else {
      alert("หมดเวลา");
      navigate("/login");
    }
  };

  const add_Unraw_page = () => {
    if (localStorage.length === 3) {
      sessionStorage.setItem("status_weight", "unraw");
      axios
        .post("http://localhost:8888/delete_eigen", {
          email,w_type
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      // console.log("handle !!!!");
      // console.log("2",email,w_type);
      navigate("/Add_wideth_Raw_1");
    }else {
      alert("หมดเวลา");
      navigate("/login");
    }
  };

  const OutputRaw_page = () => {
    navigate("/outputRaw");
    sessionStorage.setItem("status_weight", "raw");
  };

  const OutputUnRaw_page = () => {
    navigate("/OutputUnraw");
    sessionStorage.setItem("status_weight", "unraw");
  };
  // const add_RawAI_page = () => {
  //   if (localStorage.length === 3) {
  //     window.location = "/Add_wideth_Raw_1";
  //     sessionStorage.setItem("status_weight", "rawAI");
  //   } else {
  //     alert("หมดเวลา");
  //     window.location = "/login";
  //   }
  // };

  // const add_UnrawAI_page = () => {
  //   if (localStorage.length === 3) {
  //     window.location = "/Add_wideth_Raw_1";
  //     sessionStorage.setItem("status_weight", "unrawAI");
  //   } else {
  //     alert("หมดเวลา");
  //     window.location = "/login";
  //   }
  // };

  // useEffect(() => {
  // 	var token = localStorage.getItem('token')
  // 	fetch("http://localhost:8888/authen", {
  // 		method: "POST", // or 'PUT'
  // 		headers: {FF
  // 		  	'Content-Type': 'application/json',
  // 			'Authorization': 'Bearer '+token
  // 		},
  // 	  })
  // 		.then((response) => response.json())
  // 		.then((data) => {
  // 		  if(data.status === 'ok_200'){
  // 			// alert('auten Succeesed.')
  // 		  }else{
  // 			// alert('auten Failed.')
  // 			localStorage.removeItem('token')
  // 			window.location = '/login'
  // 		  }
  // 		  console.log("Success:", data);
  // 		})
  // 		.catch((error) => {
  // 		  console.error("Error:", error);
  // 		});
  // },[])

  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            โปรดเลือกประเภทกล้วยของท่าน
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 3,
            pb: 3,
          }}
        ></Box>
        <Container>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://img-ha.mthcdn.com/cJEeO89zSECfgHwPvmOVdYv0F0U=/health.mthai.com/app/uploads/2019/01/banana.jpg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      กล้วยดิบ
                    </Typography>
                    <Typography>
                      กล้วยดิบ สามารถนำมาแปลรูปได้ 3 ทางเลือก ได้แก่ กล้วยฉาบ
                      กล้วยอบเนย กล้วยเบรคแตก
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="success"
                      size="large"
                      onClick={add_Raw_page}
                    >
                      เลือก
                    </Button>
                    {/* <Button  variant="contained" color="info" size="large" onClick={add_RawAI_page} >AI</Button> */}
                    <Button
                      variant="contained"
                      color="info"
                      size="large"
                      onClick={OutputRaw_page}
                    >
                      ดูผลลัพธ์
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://img.freepik.com/free-photo/top-view-tasty-breakfast-with-organic-fruits_23-2148531814.jpg?size=626&ext=jpg&ga=GA1.2.1275789563.1666711775&semt=sph"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      กล้วยสุก
                    </Typography>
                    <Typography>
                      กล้วยสุก สามารถนำมาแปลรูปได้ 7 ทางเลือก ได้แก่ กล้วยตาก
                      กล้วยกวน ทอฟฟี่กล้วย นํ้ากล้วย เครี่องดื่มแอลกอฮอร์
                      ผลิตภัณฑ์อื่นๆ
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="warning"
                      size="large"
                      onClick={add_Unraw_page}
                    >
                      เลือก
                    </Button>
                    {/* <Button  variant="contained" color="info" size="large" onClick={add_UnrawAI_page} >AI</Button> */}
                    <Button
                      variant="contained"
                      color="info"
                      size="large"
                      onClick={OutputUnRaw_page}
                    >
                      ดูผลลัพธ์
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom></Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        ></Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
