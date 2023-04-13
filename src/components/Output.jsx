import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Layout from "../layouts/Layout";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Accordion from "@mui/material/Accordion";
// import { List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import { CardMedia, CardContent } from "@mui/material";
import { Card } from "@mui/material";


ChartJS.register(ArcElement, Tooltip, Legend);
const theme = createTheme();

export default function Output() {
  const [nameProduct, setNameproduct] = useState([]);
  const [weight, setWeight] = useState([]);
  

  // useEffect( ()=>{
  //   const getdata = async()=>{
  //     const nameProduct =[];
  //     const weight =[];
      
  //   const reqData = await fetch("");
  //   const resData = await reqData.json();
  //   for(let i=0; i<resData.length; i++)
  //   {
  //     nameProduct.push(resData[i].nameproducts);
  //     weight.push(resData[i].weights)
  //   }
  //   setNameproduct(nameProduct);
  //   setWeight(weight);

  //   }
  //   getdata();
  // });
  
  const data = {
    labels: ["กล้วยฉาบ", "กล้วยอบเนย", "กล้วยเบรคแตก"],// ใส่ nameProduct
    datasets: [
      {
        label: "# of Votes",
        data: [70, 20, 10],//ใส่ weight
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            ผลลัพธ์ของผลิตภัณฑ์จากกล้วยดิบ
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 3,
            pb: 3,
          }}
        ></Box>
        <Container maxWidth="auto">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4} md={4} pd={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia 
                component="img" 
                image="./images/b2.jpg" 
                
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    กล้วยฉาบ
                  </Typography>
                  <Typography>
                    จากการตอบแบบสอบถามผลิตภัณฑ์ชิ้นนี้มีความเป็นไปได้ที่จะนำไปผลิต
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* <Grid item xs={12} sm={4} md={2.5} pd={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia component="img" image="./images/b3.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    กล้วยอบเนย
                  </Typography>
                  <Typography>
                    จากการตอบแบบสอบถามผลิตภัณฑ์ชิ้นนี้มีความเป็นไปได้ที่จะนำไปผลิต
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={2.5} pd={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia component="img" 
                sx={{height:245}} image="./images/b4.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    กล้วยเบรคแตก
                  </Typography>
                  <Typography>
                    จากการตอบแบบสอบถามผลิตภัณฑ์ชิ้นนี้มีความเป็นไปได้ที่จะนำไปผลิต
                  </Typography>
                </CardContent>
              </Card>
            </Grid> */}
            <Grid item xs={12} sm={4} md={4} pd={4}>
              <Accordion>
                <Doughnut data={data} />
              </Accordion>
            </Grid>
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
