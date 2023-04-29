import React, { useState } from "react";
import Layout from "../layouts/Layout";
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
import CircularProgress from "@mui/material/CircularProgress";
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

  var re = 1;

  let eigenx = 0.00;
  parseFloat(eigenx);
    let val_1_2 = Math.abs(testVal1);
    let val_1_3 = Math.abs(testVal2);
    let val_1_4 = Math.abs(testVal3);
    let val_1_5 = Math.abs(testVal4);
    let val_2_3 = Math.abs(testVal5);

   

  if (testVal1 < 0) {
    let val_Po_1_2;
    val_1_2 = val_Po_1_2 = re / testVal1;
    Math.abs(val_1_2);
    var val_re1 = re /  Math.abs(val_1_2) ;
    console.log(" 1cal sss");
    console.log("val1", Math.abs(val_1_2));
    console.log("re1",Math.abs(val_re1));
  } else {
    console.log(" 1not cal");
  }
  if(testVal2 < 0){
    let val_Po_1_3;
    val_1_3 = val_Po_1_3 = re / testVal2;
    Math.abs(val_1_3);
    var val_re2 = re /  Math.abs(val_1_3) ;
    console.log("val2", Math.abs(val_1_3));
    console.log("re2",Math.abs(val_re2));
    console.log(" 2cal sss");
  }else {
    console.log(" 2not cal");
  }
  if(testVal3 < 0){
    let val_Po_1_4;
    val_1_4 = val_Po_1_4 = re / testVal3;
    Math.abs(val_1_4);
    var val_re4 = re /  Math.abs(val_1_4) ;
    console.log("val3", Math.abs(val_1_4));
    console.log("re3",Math.abs(val_re3));
    console.log(" 3cal sss");
  }else {
    console.log(" 3not cal");
  }
  if(testVal4 < 0){
    let val_Po_1_5val_1_5;
    val_1_5 = val_Po_1_5val_1_5 = re / testVal4;
    Math.abs(val_1_5);
    var val_re1 = re /  Math.abs(val_1_5) ;
    console.log("val4", Math.abs(val_1_5));
    console.log("re4",Math.abs(val_re4));
    console.log(" 4cal sss");
  }else {
    console.log(" 4not cal");
  }if(testVal5 < 0){
    let val_Po_2_3;
    val_2_3 = val_Po_2_3 = re / testVal5;
    Math.abs(val_2_3);
    var val_re5 = re /  Math.abs(val_2_3) ;
    console.log("val5", Math.abs(val_2_3));
    console.log("re5",Math.abs(val_re5));
    console.log(" 5cal sss");
  }else {
    console.log(" 5not cal");
  }

    var re_sum1= 0.0;
    var re_sum2= 0.0;
    var re_sum3= 0.0;
    var re_sum4= 0.0;
    var re_sum5= 0.0;
    parseFloat(re_sum1,re_sum2,re_sum3,re_sum4,re_sum5);

    // console.log(re_sum1);
    var val_re1 = re /  Math.abs(val_1_2) ;
    var val_re2 = re /  Math.abs(val_1_3) ;
    var val_re3 = re /  Math.abs(val_1_4) ;
    var val_re4 = re /  Math.abs(val_1_5) ;
    var val_re5 = re /  Math.abs(val_2_3) ;
    parseFloat(val_re1,val_re2,val_re3,val_re4,val_re5);
    // Math.abs(val_re1,val_re2,val_re3,val_re4,val_re5);

    console.log("val1 +", Math.abs(val_1_2));
    console.log("re1 +",Math.abs(val_re1));

    sessionStorage.setItem("valcriterial_colum1#2", Math.abs(val_1_2));
    sessionStorage.setItem("valcriterial_colum1#3", Math.abs(val_1_3));
    sessionStorage.setItem("valcriterial_colum1#4", Math.abs(val_1_4));
    sessionStorage.setItem("valcriterial_colum1#5", Math.abs(val_1_5));
    sessionStorage.setItem("valcriterial_colum2#3", Math.abs(val_2_3));

    sessionStorage.setItem("recriterial_colum1#2", Math.abs(val_re1));
    sessionStorage.setItem("recriterial_colum1#3", Math.abs(val_re2));
    sessionStorage.setItem("recriterial_colum1#4", Math.abs(val_re3));
    sessionStorage.setItem("recriterial_colum1#5", Math.abs(val_re4));
    sessionStorage.setItem("recriterial_colum2#3", Math.abs(val_re5));

    sessionStorage.setItem("w_colum1#2",testVal1);
    sessionStorage.setItem("w_colum1#3",testVal2);
    sessionStorage.setItem("w_colum1#4",testVal3);
    sessionStorage.setItem("w_colum1#5",testVal4);
    sessionStorage.setItem("w_colum2#3",testVal5);

  let critri_sum_Eig_1_5 = 0.000000000000001;
  let critri_sum_Eig_2_5 = 0.000000000000001;
  let critri_sum_Eig_3_5 = 0.000000000000001;
  let critri_sum_Eig_4_5 = 0.000000000000001;
  let critri_sum_Eig_5_5 = 0.000000000000001;
  parseFloat(critri_sum_Eig_1_5,critri_sum_Eig_2_5,critri_sum_Eig_3_5,critri_sum_Eig_4_5,critri_sum_Eig_5_5);

  // console.log(critri_sum_Eig_1_5);
 
  const email = localStorage.getItem("email");
  const page = 1;
  const status = sessionStorage.getItem("status_weight");
  const add_type = status;
  const add_weight = [testVal1, testVal2, testVal3, testVal4, testVal5];
  // const add_weight = [{"cartilir1":testVal },{"cartilir2":testVal2},{"cartilir3":testVal3},{"cartilir4":testVal4},{"cartilir5":testVal5}]
  const w_name = [
    "main_criteria1#2",
    "main_criteria1#3",
    "main_criteria1#4",
    "main_criteria1#5",
    "main_criteria2#3",
  ];
  
  const balck_page = () => {
    if (localStorage.length === 3) {
      window.history.back();
    } else {
      alert("หมดเวลา");
    }
  };
  const handleSubmit_2 = () => {
    // cal_func();
    
    // console.log(val_re1, val_re2, val_re3, val_re4, val_re5);
    if (
      (testVal1.length === 0,
      testVal2.length === 0,
      testVal3.length === 0,
      testVal4.length === 0,
      testVal5.length === 0)
    ) {
      // alert("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      console.log("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      // console.log(testVal1, testVal2, testVal3, testVal4, testVal5);
    } else if ((testVal1, testVal2, testVal3, testVal4, testVal5 === 0)) {
      alert("ไม่สามารถค่าเป็น 0 ได้โปรดกรอกอีกครั้ง");
    } else if (localStorage.length === 3) {
      // cal_re();
      // console.log((add_weight.testVal1 && add_weight.testVa2) , (add_weight.testVa3 && add_weight.testVa4)  === 0);
      // console.log(
      //   testVal1 || testVal2 || testVal3 || testVal4 || testVal5 === 0
      // );
      // console.log(add_weight.length)
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
      window.location = "/Add_wideth_Raw_2";
      // console.log(localStorage.getItem("token").length)
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
      // console.log(localStorage.length);
      window.location = "/login";
    }
  };

  const val_w1 = (e, num) => {
    setTestVal1(num);
    console.log(num);
  };

  // const cal_re = (testVal1) => {
  //   let
  //   1/testVal1 === re
  //   setRe_Val1(num);
  //   console.log(num);
  // };

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
          <Typography variant="body" color="inherit" noWrap>
            โปรดเลือกระดับความสำคัญเทียบกันระหว่างสองปัจจัย 1/2
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
                  วัตถุดิบหลัก (1)
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
                  ความพร้อมในการผลิต (2)
                </h2>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  วัตถุดิบหลัก (1)
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
                  ผลกำไรและช่องทางการตลาด (3)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  วัตถุดิบหลัก (1)
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
                  การเก็บรักษา (4)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  วัตถุดิบหลัก (1)
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
                  สิ่งแวดล้อมและสังคม (5)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  ความพร้อมในการผลิต (2)
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
                <h2 id="criteria2" name="criteria2">
                  ผลกำไรและช่องทางการตลาด (3)
                </h2>
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
                  {buttons }                  
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
