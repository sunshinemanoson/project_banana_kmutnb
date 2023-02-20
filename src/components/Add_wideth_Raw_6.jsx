import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Layout from "../layouts/Layout";

const theme = createTheme();
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function valuetext(value) {
  console.log();
  return `${value}`;
}

const axios = require("axios");

export default function Add_wideth_Raw() {
  const [testVal1, setTestVal1] = useState([]);
  const [testVal2, setTestVal2] = useState([]);
  const [testVal3, setTestVal3] = useState([]);
  const [testVal4, setTestVal4] = useState([]);
  const [testVal5, setTestVal5] = useState([]);

  const add_weight = [testVal1, testVal2, testVal3, testVal4, testVal5];
  // const add_weight = [{"cartilir1":testVal },{"cartilir2":testVal2},{"cartilir3":testVal3},{"cartilir4":testVal4},{"cartilir5":testVal5}]
  const w_name = [
    "cartilir26",
    "cartilir27",
    "cartilir28",
    "cartilir29",
    "cartilir30",
    "cartilir31",
  ];
  const email = localStorage.getItem("email");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = document.getElementById("Add_width1");
  //   const data = new FormData(form);
  //   var jsonData = {
  //     w_wight: data.get("Add_width1"),
  //   };
  //   fetch("http://localhost:8888/add_weight", {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(jsonData),
  //   })
  //     .then((response) => response.json())
  // .then((data) => {
  //   if (data.status === "ok_200") {
  //     localStorage.setItem("token", data.token);
  //     window.location = "/dashboard";
  //     alert(data.msg);
  //   } else {
  //     alert(data.msg);
  //   }
  //   console.log("Success:", data);
  // })
  // .catch((error) => {
  //   console.error("Error:", error);
  // });
  // };

  const handleSubmit_2 = () => {
    if ((testVal1.length,testVal2.length,testVal3.length,testVal4.length,testVal5.length === 0)) {
      alert("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      console.log("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      console.log(testVal1, testVal2, testVal3, testVal4, testVal5);
    } else if ((testVal1, testVal2, testVal3, testVal4, testVal5 === 0)) {
      alert("ไม่สามารถค่าเป็น 0 ได้โปรดกรอกอีกครั้ง");
    } else if (localStorage.length === 2) {
      // console.log((add_weight.testVal1 && add_weight.testVa2) , (add_weight.testVa3 && add_weight.testVa4)  === 0);
      console.log(
        testVal1 || testVal2 || testVal3 || testVal4 || testVal5 === 0
      );
      // console.log(add_weight.length)
      let data_ar = [];
      for (let i = 0, len = w_name.length; i < len; i++) {
        const w_data = {
          w_name: w_name[i],
          w_wight: add_weight[i],
          email: email,
        };
        data_ar.push(w_data);
      }
      window.location = '/Choice_Raw'
      // console.log(localStorage.getItem("token").length)
      axios
        .post("http://localhost:8888/add_weight", {
          data_ar,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log("handle !!!!");
    } else {
      alert("token expired");
      console.log(localStorage.length);
      window.location = "/login";
    }
  };

  const val_w1 = (e, num) => {
    setTestVal1(num);
    console.log(num);
  };

  const val_w2 = (e, num) => {
    // let array = [];
    // array.push(num);
    // let val = e.target.value;
    // console.log(val);
    // console.log(num);
    // console.log(array);
    setTestVal2(num);
    console.log(num);
  };
  const val_w3 = (e, num) => {
    setTestVal3(num);
    console.log(num);
  };
  const val_w4 = (e, num) => {
    setTestVal4(num);
    console.log(num);
  };
  const val_w5 = (e, num) => {
    setTestVal5(num);
    console.log(num);
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            โปรดเลือกระดับความสำคัญของปัจจัยรอง
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ flexGrow: 1, m: 6 }}>
          <Grid container spacing={6.5}>
            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                    สามารถเก็บได้ที่อุณหภูมิปกติ (4.1)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={8} md={8}>
              <Item>
                <Slider
                  aria-label="Add_width1"
                  aria-labelledby="Add_width1"
                  id="Add_width1"
                  name="Add_width1"
                  defaultValue={0}
                  onChange={val_w1}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-9}
                  max={9}
                />
              </Item>
            </Grid>
            <Grid item xs={2} md={2}>
              <Item>
                <h2 id="criteria2" name="criteria2">
                    ระยะเวลาในการเก็บรักษาด (4.2)
                </h2>
              </Item>
            </Grid>
            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                    สามารถเก็บได้ที่อุณหภูมิปกติ (4.1)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={8} md={8}>
              <Item>
                <Slider
                  aria-label="Add_width1"
                  aria-labelledby="Add_width1"
                  id="Add_width1"
                  name="Add_width1"
                  defaultValue={0}
                  onChange={val_w2}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-9}
                  max={9}
                />
              </Item>
            </Grid>

            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                    สถานที่และขนาดพื้นที่ที่ใช้ในการเก็บรักษา (4.3)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                    ระยะเวลาในการเก็บรักษา (4.2)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={8} md={8}>
              <Item>
                <Slider
                  aria-label="Add_width1"
                  aria-labelledby="Add_width1"
                  id="Add_width1"
                  name="Add_width1"
                  defaultValue={0}
                  onChange={val_w3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-9}
                  max={9}
                />
              </Item>
            </Grid>

            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                    สถานที่และขนาดพื้นที่ที่ใช้ในการเก็บรักษา (4.3)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                    มีนโยบายส่งเสริมจากรัฐบาล (5.1)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={8} md={8}>
              <Item>
                <Slider
                  aria-label="Add_width1"
                  aria-labelledby="Add_width1"
                  id="Add_width1"
                  name="Add_width1"
                  defaultValue={0}
                  onChange={val_w4}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-9}
                  max={9}
                />
              </Item>
            </Grid>

            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                    ผลกระทบจากการแปรรูปที่มีต่อสิ่งแวดล้อม (5.2)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                    มีนโยบายส่งเสริมจากรัฐบาล (5.1)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={8} md={8}>
              <Item>
                <Slider
                  aria-label="Add_width1"
                  aria-labelledby="Add_width1"
                  id="Add_width1"
                  name="Add_width1"
                  defaultValue={0}
                  onChange={val_w5}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-9}
                  max={9}
                />
              </Item>
            </Grid>
            <Grid item xs={2} md={2}>
              <Item>
                <h2 id="criteria2" name="criteria2">
                    การสร้างรายได้ให้กับชุมชน (5.3)
                </h2>
              </Item>
            </Grid>

            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                    ผลกระทบจากการแปรรูปที่มีต่อสิ่งแวดล้อม (5.2)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={8} md={8}>
              <Item>
                <Slider
                  aria-label="Add_width1"
                  aria-labelledby="Add_width1"
                  id="Add_width1"
                  name="Add_width1"
                  defaultValue={0}
                  onChange={val_w5}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-9}
                  max={9}
                />
              </Item>
            </Grid>
            <Grid item xs={2} md={2}>
              <Item>
                <h2 id="criteria2" name="criteria2">
                    การสร้างรายได้ให้กับชุมชน (5.3)
                </h2>
              </Item>
            </Grid>

            <Grid item xs={10} md={10}></Grid>
            <Grid item xs={2} md={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmit_2}
              >
                ตกลง
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Container>
          <Grid container spacing={4}></Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
