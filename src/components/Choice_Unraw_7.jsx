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
import Snackbar from "@mui/material/Snackbar";

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
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    handleSubmit_2();
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const buttons = (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick({
          vertical: "top",
          horizontal: "center",
        })}
      >
        ตกลง
      </Button>
    </React.Fragment>
  );

  const [testVal1, setTestVal1] = useState([]);
  const [testVal2, setTestVal2] = useState([]);
  const [testVal3, setTestVal3] = useState([]);
  const [testVal4, setTestVal4] = useState([]);
  const [testVal5, setTestVal5] = useState([]);
  const [testVal6, setTestVal6] = useState([]);
  const [testVal7, setTestVal7] = useState([]);
  const [testVal8, setTestVal8] = useState([]);
  const [testVal9, setTestVal9] = useState([]);
  const [testVal10, setTestVal10] = useState([]);

  var re = 1;

  let val_3_2 = Math.abs(testVal1);
  let val_3_3 = Math.abs(testVal2);
  let val_3_4 = Math.abs(testVal3);
  let val_3_5 = Math.abs(testVal4);
  let val_3_6 = Math.abs(testVal5);
  let val_3_7 = Math.abs(testVal6);
  let val_3_8 = Math.abs(testVal7);
  let val_3_9 = Math.abs(testVal8);
  let val_3_10 = Math.abs(testVal9);
  let val_3_11 = Math.abs(testVal10);

  if (testVal1 < 0) {
    let val_Po_3_2;
    val_3_2 = val_Po_3_2 = re / testVal1;
    Math.abs(val_3_2);
    var val_re3_2 = re / Math.abs(val_3_2);
    // console.log("val1", Math.abs(val_3_2));
    // console.log("re1", Math.abs(val_re3_2));
    // console.log(" 1cal sss");
  } else {
    console.log(" 1not cal");
  }
  if (testVal2 < 0) {
    let val_Po_3_3;
    val_3_3 = val_Po_3_3 = re / testVal2;
    Math.abs(val_3_3);
    var val_re3_3 = re / Math.abs(val_3_3);
    // console.log("val2", Math.abs(val_3_3));
    // console.log("re2", Math.abs(val_re3_3));
    // console.log(" 2cal sss");
  } else {
    console.log(" 2not cal");
  }
  if (testVal3 < 0) {
    let val_Po_3_4;
    val_3_4 = val_Po_3_4 = re / testVal3;
    Math.abs(val_3_4);
    var val_re3_4 = re / Math.abs(val_3_4);
    // console.log("val3", Math.abs(val_3_4));
    // console.log("re3", Math.abs(val_re3_4));
    // console.log(" 3cal sss");
  }
  else {
    console.log(" 3not cal");
  }
  if (testVal4 < 0) {
    let val_Po_3_5;
    val_3_5 = val_Po_3_5 = re / testVal4;
    Math.abs(val_3_5);
    var val_re3_5 = re / Math.abs(val_3_5);
    // console.log("val4", Math.abs(val_3_5));
    // console.log("re4", Math.abs(val_re3_5));
    // console.log(" 4cal sss");
  } else {
    console.log(" 4not cal");
  }
  if (testVal5 < 0) {
    let val_Po_3_6;
    val_3_6 = val_Po_3_6 = re / testVal5;
    Math.abs(val_3_6);
    var val_re3_6 = re / Math.abs(val_3_6);
    // console.log("val5", Math.abs(val_3_6));
    // console.log("re5", Math.abs(val_re3_6));
    // console.log(" 5cal sss");
  } else {
    console.log(" 5not cal");
  }
  if (testVal6 < 0) {
    let val_Po_3_7;
    val_3_7 = val_Po_3_7 = re / testVal6;
    Math.abs(val_3_7);
    var val_re3_7 = re / Math.abs(val_3_7);
    // console.log("val6", Math.abs(val_3_7));
    // console.log("re6", Math.abs(val_re3_7));
    // console.log(" 6cal sss");
  }
  else {
    console.log(" 6not cal");
  }
  if (testVal7 < 0) {
    let val_Po_3_8;
    val_3_8 = val_Po_3_8 = re / testVal7;
    Math.abs(val_3_8);
    var val_re3_8 = re / Math.abs(val_3_8);
    // console.log("val7", Math.abs(val_3_8));
    // console.log("re7", Math.abs(val_re3_8));
    // console.log(" 7cal sss");
  } else {
    console.log(" 7not cal");
  }
  if (testVal8 < 0) {
    let val_Po_3_9;
    val_3_9 = val_Po_3_9 = re / testVal8;
    Math.abs(val_3_9);
    var val_re3_9 = re / Math.abs(val_3_9);
    // console.log("val8", Math.abs(val_3_9));
    // console.log("re8", Math.abs(val_re3_9));
    // console.log(" 8cal sss");
  } else {
    console.log(" 8not cal");
  }
  if (testVal9 < 0) {
    let val_Po_3_10;
    val_3_10 = val_Po_3_10 = re / testVal9;
    Math.abs(val_3_10);
    var val_re3_10 = re / Math.abs(val_3_10);
    // console.log("val9", Math.abs(val_3_10));
    // console.log("re9", Math.abs(val_re3_10));
    // console.log(" 9cal sss");
  }
  if (testVal10 < 0) {
    let val_Po_3_11;
    val_3_11 = val_Po_3_11 = re / testVal10;
    Math.abs(val_3_11);
    var val_re3_11 = re / Math.abs(val_3_11);
    // console.log("val10", Math.abs(val_3_11));
    // console.log("re10", Math.abs(val_re3_11));
    // console.log(" 10cal sss");
  } else {
    console.log(" 10not cal");
  }
  var val_re3_2 = re / Math.abs(val_3_2);
  var val_re3_3 = re / Math.abs(val_3_3);
  var val_re3_4 = re / Math.abs(val_3_4);
  var val_re3_5 = re / Math.abs(val_3_5);
  var val_re3_6 = re / Math.abs(val_3_6);
  var val_re3_7 = re / Math.abs(val_3_7);
  var val_re3_8 = re / Math.abs(val_3_8);
  var val_re3_9 = re / Math.abs(val_3_9);
  var val_re3_10 = re / Math.abs(val_3_10);
  var val_re3_11 = re / Math.abs(val_3_11);

  const email = localStorage.getItem("email");
  const page = 11;
  const status = sessionStorage.getItem("status_weight");
  const add_type = status;
  const add_weight = [testVal1, testVal2, testVal3,testVal4, testVal5, testVal6,testVal7,testVal8, testVal9,testVal10];
  // const add_weight = [{"cartilir1":testVal },{"cartilir2":testVal2},{"cartilir3":testVal3},{"cartilir4":testVal4},{"cartilir5":testVal5}]
  const w_name = [ 
  "Unraw4_criteriaR1#R2",
  "Unraw4_criteriaR1#R3",
  "Unraw4_criteriaR1#R4",
  "Unraw4_criteriaR1#R5",
  "Unraw4_criteriaR1#R6",
  "Unraw4_criteriaR1#R7",
  "Unraw4_criteriaR2#R3",
  "Unraw4_criteriaR2#R4",
  "Unraw4_criteriaR2#R5",
  "Unraw4_criteriaR2#R6",
  ];

  const balck_page = () => {
    if (localStorage.length === 3) {
      window.history.back();
    } else {
      alert("หมดเวลา");
    }
  };

  // let resultEig = 0;
  const handleSubmit_2 = () => {
    if ((testVal1.length, testVal2.length, testVal3.length === 0)) {
      alert("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      console.log("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      console.log(testVal1, testVal2, testVal3);
    } else if ((testVal1, testVal2, testVal3 === 0)) {
      alert("ไม่สามารถค่าเป็น 0 ได้โปรดกรอกอีกครั้ง");
    } 
    else if (localStorage.length === 3) {
        sessionStorage.setItem("val_R1#R2",val_3_2);
        sessionStorage.setItem("re_R1#R2",val_re3_2);
        sessionStorage.setItem("val_R1#R3",val_3_3);
        sessionStorage.setItem("re_R1#R3",val_re3_3);
        sessionStorage.setItem("val_R1#R4",val_3_4);
        sessionStorage.setItem("re_R1#R4",val_re3_4);
        sessionStorage.setItem("val_R1#R5",val_3_5);
        sessionStorage.setItem("re_R1#R5",val_re3_5);
        sessionStorage.setItem("val_R1#R6",val_3_6);
        sessionStorage.setItem("re_R1#R6",val_re3_6);
        sessionStorage.setItem("val_R1#R7",val_3_7);
        sessionStorage.setItem("re_R1#R7",val_re3_7);
        sessionStorage.setItem("val_R2#R3",val_3_8);
        sessionStorage.setItem("re_R2#R3",val_re3_8);
        sessionStorage.setItem("val_R2#R4",val_3_9);
        sessionStorage.setItem("re_R2#R4",val_re3_9);
        sessionStorage.setItem("val_R2#R5",val_3_10);
        sessionStorage.setItem("re_R2#R5",val_re3_10);
        sessionStorage.setItem("val_R2#R6",val_3_11);
        sessionStorage.setItem("re_R2#R6",val_re3_11);

      // console.log((add_weight.testVal1 && add_weight.testVa2) , (add_weight.testVa3 && add_weight.testVa4)  === 0);
      console.log(testVal1 || testVal2 || testVal3 === 0);
    //   // console.log(add_weight.length)
      let data_ar = [];
      for (let i = 0, len = w_name.length; i < len; i++) {
        const w_data = {
          w_name: w_name[i],
          email: email,
          w_type: add_type,
          w_wight: add_weight[i],
          w_page: page,
        };
        data_ar.push(w_data);
       
      }
      window.location = "/Choice_UnRaw_8";
      console.log(localStorage.getItem("token").length)
      axios
        .post("http://localhost:8888/add_weight_choice", {
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
  const val_w6 = (e, num) => {
    setTestVal6(num);
    console.log(num);
  };

  const val_w7 = (e, num) => {
    setTestVal7(num);
    console.log(num);
  };

  const val_w8 = (e, num) => {
    setTestVal8(num);
    console.log(num);
  };
  const val_w9 = (e, num) => {
    setTestVal9(num);
    console.log(num);
  };
  const val_w10 = (e, num) => {
    setTestVal10(num);
    console.log(num);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          โปรดเลือกระดับความสําคัญจำนวนแรงงาน (2.1)  7/34
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ flexGrow: 1, m: 5 }}>
          <Grid
            container
            columns={{ xs: 4, md: 12 }}
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยตาก (R1)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={7} md={7}>
              <Item>
                <Slider
                  track={false}
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
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h2 id="criteria2" name="criteria2">
                กล้วยกวน (R2)
                </h2>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยตาก (R1)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={7} md={7}>
              <Item>
                <Slider
                  track={false}
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

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                ทอฟฟี่กล้วย (R3)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยตาก (R1)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={7} md={7}>
              <Item>
                <Slider
                  track={false}
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

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                ข้าวเกรียบกล้วย (R4)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยตาก (R1)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={7} md={7}>
              <Item>
                <Slider
                  track={false}
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

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                น้ำกล้วย (R5) 
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยตาก (R1)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={7} md={7}>
              <Item>
                <Slider
                  track={false}
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

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                เครื่องดื่มแอลกอฮอร์ (R6)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยตาก (R1)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={7} md={7}>
              <Item>
                <Slider
                  track={false}
                  aria-label="Add_width1"
                  aria-labelledby="Add_width1"
                  id="Add_width1"
                  name="Add_width1"
                  defaultValue={0}
                  onChange={val_w6}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-9}
                  max={9}
                />
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                เค้กกล้วย (R7)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยกวน (R2)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={7} md={7}>
              <Item>
                <Slider
                  track={false}
                  aria-label="Add_width1"
                  aria-labelledby="Add_width1"
                  id="Add_width1"
                  name="Add_width1"
                  defaultValue={0}
                  onChange={val_w7}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-9}
                  max={9}
                />
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                ทอฟฟี่กล้วย (R3)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยกวน (R2)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={7} md={7}>
              <Item>
                <Slider
                  track={false}
                  aria-label="Add_width1"
                  aria-labelledby="Add_width1"
                  id="Add_width1"
                  name="Add_width1"
                  defaultValue={0}
                  onChange={val_w8}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-9}
                  max={9}
                />
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                ข้าวเกรียบกล้วย (R4)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยกวน (R2)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={7} md={7}>
              <Item>
                <Slider
                  track={false}
                  aria-label="Add_width1"
                  aria-labelledby="Add_width1"
                  id="Add_width1"
                  name="Add_width1"
                  defaultValue={0}
                  onChange={val_w9}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-9}
                  max={9}
                />
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                น้ำกล้วย (R5)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยกวน (R2)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={7} md={7}>
              <Item>
                <Slider
                  track={false}
                  aria-label="Add_width1"
                  aria-labelledby="Add_width1"
                  id="Add_width1"
                  name="Add_width1"
                  defaultValue={0}
                  onChange={val_w10}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-9}
                  max={9}
                />
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                เครื่องดื่มแอลกอฮอร์ (R6)
                </h1>
              </Item>
            </Grid>

            <Grid container spacing={2} mt={4} justifyContent="flex-end">
              <Grid item xs={3} md={1}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={balck_page}
                >
                  กลับ
                </Button>
              </Grid>
              <Grid item xs={3} md={1}>
                <div>
                  {buttons}
                  <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message="ได้โปรดกรอกอีกครั้งให้ครบถ้วน"
                    key={vertical + horizontal}
                  />
                </div>
              </Grid>
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
