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

  var re = 1;
  var cri_sum = 1;
  var cri_num = 4;
  var cal_sum = 0;


  let val_4_2 = Math.abs(testVal1);
  let val_4_3 = Math.abs(testVal2);
  let val_4_4 = Math.abs(testVal3);
  let val_4_5 = Math.abs(testVal4);
  let val_4_6 = Math.abs(testVal5);
  let val_4_7 = Math.abs(testVal6);


  if (testVal1 < 0) {
    let val_Po_4_1;
    val_4_2 = val_Po_4_1 = re / testVal1;
    Math.abs(val_4_2);
    var val_re4_2 = re / Math.abs(val_4_2);
    console.log(" 1cal sss");
    console.log("val1", Math.abs(val_4_2));
    console.log("re1", Math.abs(val_re4_2));
  } else {
    console.log(" 1not cal");
  }
  if (testVal2 < 0) {
    let val_Po_4_2;
    val_4_3 = val_Po_4_2 = re / testVal2;
    Math.abs(val_4_3);
    var val_re4_3 = re / Math.abs(val_4_3);
    console.log("val2", Math.abs(val_4_3));
    console.log("re2", Math.abs(val_re4_3));
    console.log(" 2cal sss");
  } else {
    console.log(" 2not cal");
  }
  if (testVal3 < 0) {
    let val_Po_4_3;
    val_4_4 = val_Po_4_3 = re / testVal3;
    Math.abs(val_4_4);
    var val_re4_4 = re / Math.abs(val_4_4);
    console.log("val3", Math.abs(val_4_4));
    console.log("re3", Math.abs(val_re4_4));
    console.log(" 3cal sss");
  } else {
    console.log(" 3not cal");
  }
  if (testVal4 < 0) {
    let val_Po_4_4;
    val_4_5 = val_Po_4_4 = re / testVal4;
    Math.abs(val_4_5);
    var val_re4_5 = re / Math.abs(val_4_5);
    console.log("val4", Math.abs(val_4_5));
    console.log("re4", Math.abs(val_re4_5));
    console.log(" 4cal sss");
  } else {
    console.log(" 4not cal");
  }
  if (testVal5 < 0) {
    let val_Po_4_5;
    val_4_6 = val_Po_4_5 = re / testVal5;
    Math.abs(val_4_6);
    var val_re4_6 = re / Math.abs(val_4_6);
    console.log("val4", Math.abs(val_4_6));
    console.log("re4", Math.abs(val_re4_6));
    console.log(" 4cal sss");
  } else {
    console.log(" 4not cal");
  }
  if (testVal6 < 0) {
    let val_Po_4_6;
    val_4_7 = val_Po_4_6 = re / testVal6;
    Math.abs(val_4_7);
    var val_re4_7 = re / Math.abs(val_4_7);
    console.log("val4", Math.abs(val_4_7));
    console.log("re4", Math.abs(val_re4_7));
    console.log(" 4cal sss");
  } else {
    console.log(" 4not cal");
  }
 

  var re_sum1 = 0.0;
  var re_sum2 = 0.0;
  var re_sum3 = 0.0;
  var re_sum4 = 0.0;
  var re_sum5 = 0.0;
  var re_sum6 = 0.0;
  parseFloat(re_sum1, re_sum2, re_sum3, re_sum4, re_sum5, re_sum6);

  var val_re4_2 = re / Math.abs(val_4_2);
  var val_re4_3 = re / Math.abs(val_4_3);
  var val_re4_4 = re / Math.abs(val_4_4);
  var val_re4_5 = re / Math.abs(val_4_5);
  var val_re4_6 = re / Math.abs(val_4_6);
  var val_re4_7 = re / Math.abs(val_4_7);

  parseFloat(val_4_2, val_4_3, val_4_4, val_4_5, val_4_6, val_4_7);
  parseFloat(val_re4_2, val_re4_3, val_re4_4, val_re4_5, val_re4_6, val_re4_7);

  // console.log("val+", Math.abs(val_4_2));
  // console.log("re+",Math.abs(val_re4_2));
  Math.abs(val_4_2, val_4_3, val_4_4, val_4_5, val_4_6, val_4_7);
  let critri_sumcol1 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_re4_2)) +
    parseFloat(Math.abs(val_re4_3)) +
    parseFloat(Math.abs(val_re4_4));
  let critri_sumcol2 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_4_2)) +
    parseFloat(Math.abs(val_re4_5)) +
    parseFloat(Math.abs(val_re4_6));
  // console.log("result reallllllllllllllll" ,  parseFloat(cri_sum),parseFloat(val_4_4),parseFloat(val_4_6), parseFloat(val_4_7), parseFloat(val_4_6),parseFloat( Math.abs(val_4_7)) )
  let critri_sumcol3 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_4_3)) +
    parseFloat(Math.abs(val_4_5)) +
    parseFloat(Math.abs(val_re4_7));
  let critri_sumcol4 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_4_4)) +
    parseFloat(Math.abs(val_4_6)) +
    parseFloat(Math.abs(val_4_7));

  // console.log("critri_sumcol1 = ", parseFloat(critri_sumcol2));
  // console.log("critri_sumssssss = ", Math.abs(critri_sumcol2));
  console.log("critri_sumcol1 = ", Math.abs(critri_sumcol1));
  console.log("critri_sumcol2 = ", Math.abs(critri_sumcol2));
  console.log("critri_sumcol3 = ", Math.abs(critri_sumcol3));
  console.log("critri_sumcol4 = ", Math.abs(critri_sumcol4));
  // console.log("critri_sumcol all = ", Math.ceil(val_4_7));
  // console.log("critri_sumcol2 = ", val_re4_5);
  // console.log("critri_sumcol2 = ", val_re4_6);

  // divis row 1 cal To 5
  let critri_calrow_1_1 = Math.abs(parseFloat(cri_sum)) / critri_sumcol1;
  let critri_calrow_1_2 = Math.abs(parseFloat(val_4_2)) / critri_sumcol2;
  let critri_calrow_1_3 = Math.abs(parseFloat(val_4_3)) / critri_sumcol3;
  let critri_calrow_1_4 = Math.abs(parseFloat(val_4_4)) / critri_sumcol4;

  //Eigenvector row 1
  let critri_sum_Eig_1_5 =
    parseFloat(
      critri_calrow_1_1 +
        critri_calrow_1_2 +
        critri_calrow_1_3 +
        critri_calrow_1_4
    ).toFixed(3) / cri_num;

  console.log("Eig1 = ", critri_sum_Eig_1_5);

  // divis row 2 cal To 5
  let critri_calrow_2_1 = Math.abs(parseFloat(val_re4_2)) / critri_sumcol1;
  let critri_calrow_2_2 = Math.abs(parseFloat(cri_sum)) / critri_sumcol2;
  let critri_calrow_2_3 = Math.abs(parseFloat(val_4_5)) / critri_sumcol3;
  let critri_calrow_2_4 = Math.abs(parseFloat(val_4_6)) / critri_sumcol4;

  //Eigenvector row 2
  let critri_sum_Eig_2_5 =
    parseFloat(
      critri_calrow_2_1 +
        critri_calrow_2_2 +
        critri_calrow_2_3 +
        critri_calrow_2_4
    ).toFixed(3) / cri_num;

  console.log("Eig2 = ", critri_sum_Eig_2_5);

  // divis row 3 cal To 5
  let critri_calrow_3_1 = Math.abs(parseFloat(val_re4_3)) / critri_sumcol1;
  let critri_calrow_3_2 = Math.abs(parseFloat(val_re4_5)) / critri_sumcol2;
  let critri_calrow_3_3 = Math.abs(parseFloat(cri_sum)) / critri_sumcol3;
  let critri_calrow_3_4 = Math.abs(parseFloat(val_4_7)) / critri_sumcol4;

  //Eigenvector row 3
  let critri_sum_Eig_3_5 =
    parseFloat(
      critri_calrow_3_1 +
        critri_calrow_3_2 +
        critri_calrow_3_3 +
        critri_calrow_3_4
    ).toFixed(3) / cri_num;

  console.log("Eig3 = ", critri_sum_Eig_3_5);

  // divis row 4 cal To 5
  let critri_calrow_4_1 = parseFloat(Math.abs(val_re4_4)) / critri_sumcol1;
  let critri_calrow_4_2 = parseFloat(Math.abs(val_re4_6)) / critri_sumcol2;
  let critri_calrow_4_3 = parseFloat(Math.abs(val_re4_7)) / critri_sumcol3;
  let critri_calrow_4_4 = parseFloat(Math.abs(cri_sum)) / critri_sumcol4;

  //Eigenvector row 3
  let critri_sum_Eig_4_5 =
    parseFloat(
      critri_calrow_4_1 +
        critri_calrow_4_2 +
        critri_calrow_4_3 +
        critri_calrow_4_4
    ).toFixed(3) / cri_num;

  console.log("Eig4 = ", critri_sum_Eig_4_5);

  // //cal sum row1 main cirt
  let Calsum_col_1 =
    critri_calrow_1_1 +
    critri_calrow_2_1 +
    critri_calrow_3_1 +
    critri_calrow_4_1;
  console.log("Calsum_col_1 = ", Calsum_col_1.toFixed(4));
  // cal sum row2 main cirt
  let Calsum_col_2 =
    critri_calrow_1_2 +
    critri_calrow_2_2 +
    critri_calrow_3_2 +
    critri_calrow_4_2;
  console.log("Calsum_col_2 = ", Calsum_col_2.toFixed(4));
  //cal sum row3 main cirt
  let Calsum_col_3 =
    critri_calrow_1_3 +
    critri_calrow_2_3 +
    critri_calrow_3_3 +
    critri_calrow_4_3 ;
  console.log("Calsum_col_3 = ", Calsum_col_3.toFixed(4));
  //cal sum row4 main cirt
  let Calsum_col_4 =
    critri_calrow_1_4 +
    critri_calrow_2_4 +
    critri_calrow_3_4 +
    critri_calrow_4_4 ;
  console.log("Calsum_col_4 = ", Calsum_col_4.toFixed(4));
  //cal sum row5 main cirt

  // console.log("Calsum_col_5 = ", Calsum_col_5.toFixed(4));

  // cal sum_all_sol main cirt
  let Eigsum_all =
    critri_sum_Eig_1_5 +
    critri_sum_Eig_2_5 +
    critri_sum_Eig_3_5 +
    critri_sum_Eig_4_5 ;


  console.log("Eigsum_all = ", (Eigsum_all).toFixed(3));

  //Consistency Vector row 1
  let Consis_vector_row1 =
    (critri_sum_Eig_1_5 * Math.abs(cri_sum) +
      critri_sum_Eig_2_5 * Math.abs(val_4_2) +
      critri_sum_Eig_3_5 * Math.abs(val_4_3) +
      critri_sum_Eig_4_5 * Math.abs( val_4_4)) /
    critri_sum_Eig_1_5;
  console.log("Consis_vector_row1 = ", Consis_vector_row1);
  //Consistency Vector row 2
  let Consis_vector_row2 =
    (critri_sum_Eig_1_5 * Math.abs(val_re4_2) +
      critri_sum_Eig_2_5 * Math.abs(cri_sum )+
      critri_sum_Eig_3_5 * Math.abs(val_4_5) +
      critri_sum_Eig_4_5 * Math.abs(val_4_6)) /
    critri_sum_Eig_2_5;
  console.log("Consis_vector_row2 = ", Consis_vector_row2);

  //Consistency Vector row 3
  let Consis_vector_row3 =
    (critri_sum_Eig_1_5 * Math.abs(val_re4_3) +
      critri_sum_Eig_2_5 * Math.abs(val_re4_5) +
      critri_sum_Eig_3_5 * Math.abs(cri_sum) +
      critri_sum_Eig_4_5 * Math.abs(val_4_7)) /
    critri_sum_Eig_3_5;
  console.log("Consis_vector_row3 = ", Consis_vector_row3);

  //Consistency Vector row 4
  let Consis_vector_row4 =
    (critri_sum_Eig_1_5 * Math.abs(val_re4_4) +
      critri_sum_Eig_2_5 * Math.abs(val_re4_6) +
      critri_sum_Eig_3_5 * Math.abs(val_re4_7) +
      critri_sum_Eig_4_5 * Math.abs(cri_sum)) /
    critri_sum_Eig_4_5;
  console.log("Consis_vector_row4 = ", Consis_vector_row4);


  // average LamdaMax
  const Lamda_max = [
    Consis_vector_row1,
    Consis_vector_row2,
    Consis_vector_row3,
    Consis_vector_row4,
  ];

  function getAvg(Lamda_max) {
    const total = Lamda_max.reduce((acc, c) => acc + c, 0);
    return total / Lamda_max.length;
  }

  const RI_vals = [
    0, 0, 0.6, 0.9, 1.1, 1.2, 1.3, 1.4, 1.5, 1.5, 15, 1.5, 1.6, 1.6, 1.6,
  ];

  const averageLamdaMax = getAvg(Lamda_max);
  console.log("averageLamdaMax =", averageLamdaMax);

  // C.I cal
  let CI_Val = (averageLamdaMax - cri_num) / (cri_num - 1);
  console.log("CI_val =", CI_Val);
  // C.R cal
  let RI_set_val = RI_vals.at(cri_num - 1);
  let CR_Val = CI_Val / RI_set_val;
  console.log("CR_val =", CR_Val);


  const email = localStorage.getItem("email");
  const add_w_crigroup = 3;
  const page = 5;
  const add_w_eigen = [critri_sum_Eig_1_5,critri_sum_Eig_2_5,critri_sum_Eig_3_5,critri_sum_Eig_4_5,0.0000000000001,0.0000000000001];
  const add_subgroup = [11,12,13,14,15,16];
  const status = sessionStorage.getItem("status_weight");
  const add_result = 0.00000000000001;
  const add_result_group = 0.1;
  const add_type = status;
  const add_weight = [testVal1, testVal2, testVal3, testVal4 , testVal5 , testVal6];
  // const add_weight = [{"cartilir1":testVal },{"cartilir2":testVal2},{"cartilir3":testVal3},{"cartilir4":testVal4},{"cartilir5":testVal5}]
  const w_name = [
    "sub3_criteria3.1#3.2",
    "sub3_criteria3.1#3.3",
    "sub3_criteria3.1#3.4",
    "sub3_criteria3.2#3.3",
    "sub3_criteria3.2#3.4",
    "sub3_criteria3.3#3.4",
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
      testVal4.length === 0)
    ) {
      // alert("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      console.log("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      // console.log(testVal1, testVal2, testVal3, testVal4, testVal5);
    } else if ((testVal1, testVal2, testVal3, testVal4  === 0)) {
      alert("ไม่สามารถค่าเป็น 0 ได้โปรดกรอกอีกครั้ง");
    }else if (CR_Val >= 0.1){
      console.log("Rejected Values");
      alert("ค่าไม่ถูกต้องตามหลัก ได้โปรดกรอกอีกครั้ง");
    
    }else if (localStorage.length === 3) {
      let data_ar = [];
      for (let i = 0, len = w_name.length; i < len; i++) {
        const w_data = {
          w_name: w_name[i],
          email: email,
          w_crigroup: add_w_crigroup,
          w_subgroup: add_subgroup[i],
          w_type: add_type,
          w_eigen: add_w_eigen[i],
          w_wight: add_weight[i],
          w_result: add_result,
          w_result_group: add_result_group,
          w_page: page,
        };
        data_ar.push(w_data);
      }
      window.location = "/Add_wideth_Raw_6";
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
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          โปรดเลือกระดับความสำคัญเทียบปัจจัยรอง ผลกำไรและช่องทางการตลาดของกล้วย 5/7
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
                กำไรต่อหน่วยของกล้วย
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
                  valueLabelDisplay="on"
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
                ต้นทุนของกล้วย
                </h2>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กำไรต่อหน่วยของกล้วย
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
                  valueLabelDisplay="on"
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
                  ความต้องการของตลาดของกล้วย
                </h2>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  กำไรต่อหน่วยของกล้วย
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
                  valueLabelDisplay="on"
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
                แนวโน้มการส่งออกของกล้วย
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                ต้นทุนของกล้วย
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
                  valueLabelDisplay="on"
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
                ความต้องการของตลาดของกล้วย
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                ต้นทุนของกล้วย
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
                  valueLabelDisplay="on"
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
                แนวโน้มการส่งออกของกล้วย
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                ความต้องการของตลาดของกล้วย
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
                  valueLabelDisplay="on"
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
                แนวโน้มการส่งออกของกล้วย
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
