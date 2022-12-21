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
  const [testVal, setTestVal] = useState();

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
  //     .then((data) => {
  //       if (data.status === "ok_200") {
  //         localStorage.setItem("token", data.token);
  //         window.location = "/dashboard";
  //         alert(data.msg);
  //       } else {
  //         alert(data.msg);
  //       }
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  const handleSubmit_2 = () => {
    axios
      .post("http://localhost:8888/add_weight", {
        w_name: 'criteria1',
        w_wight: testVal,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("handle !!!!");
  };

  const test = (e, num) => {
    // let val = e.target.value;
    // console.log(val);
    console.log(num);
    setTestVal(num);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            โปรดเลือกระดับความสำค๊ญเปรียบเทียบระหว่างสองอย่างของกล้วยดิบ
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ flexGrow: 1, m: 6 }}>
          <Grid container spacing={6.5}>
            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  วัตถุดิบหลัก (1)
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
                  onChange={test}
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
                  ความพร้อมในการผลิต (2)
                </h2>
              </Item>
            </Grid>

            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  วัตถุดิบหลัก (1)
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
                  onChange={test}
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
                  ผลกำไรและช่องทางการตลาด (3)
                </h2>
              </Item>
            </Grid>

            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  วัตถุดิบหลัก (1)
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
                  onChange={test}
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
                  การเก็บรักษา (4)
                </h2>
              </Item>
            </Grid>

            <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  วัตถุดิบหลัก (1)
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
                  onChange={test}
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
                  สิ่งแวดล้อมและสังคม (5)
                </h2>
              </Item>
            </Grid>


            {/* <Grid item xs={2} md={2}>
              <Item>
                <h1 id="criteria1" name="criteria1" B>
                  ความสำคัณ1
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
                  onChange={test2}
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
                  ความสำคัณ3
                </h2>
              </Item>
            </Grid> */}

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
