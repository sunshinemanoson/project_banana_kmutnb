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

  const [testVal6, setTestVal1] = useState([]);
  const [testVal7, setTestVal2] = useState([]);
  const [testVal8, setTestVal3] = useState([]);
  const [testVal9, setTestVal4] = useState([]);
  const [testVal10, setTestVal5] = useState([]);

  var re = 1;
  var cri_sum = 1;
  var cri_num = 5;
  var cal_sum = 0;

  let val_1_2 = sessionStorage.getItem("valcriterial_colum1#2");
  let val_1_3 = sessionStorage.getItem("valcriterial_colum1#3");
  let val_1_4 = sessionStorage.getItem("valcriterial_colum1#4");
  let val_1_5 = sessionStorage.getItem("valcriterial_colum1#5");
  let val_2_3 = sessionStorage.getItem("valcriterial_colum2#3");

  let val_re1_2 = parseFloat(sessionStorage.getItem("recriterial_colum1#2"));
  let val_re1_3 = parseFloat(sessionStorage.getItem("recriterial_colum1#3"));
  let val_re1_4 = parseFloat(sessionStorage.getItem("recriterial_colum1#4"));
  let val_re1_5 = parseFloat(sessionStorage.getItem("recriterial_colum1#5"));
  let val_re2_3 = parseFloat(sessionStorage.getItem("recriterial_colum2#3"));

  let val_2_4 = Math.abs(testVal6);
  let val_2_5 = Math.abs(testVal7);
  let val_3_4 = Math.abs(testVal8);
  let val_3_5 = Math.abs(testVal9);
  let val_4_5 = Math.abs(testVal10);

  if (testVal6 < 0) {
    let val_Po_2_4;
    val_2_4 = val_Po_2_4 = re / testVal6;
    Math.abs(val_2_4);
    var val_re2_4 = re / Math.abs(val_2_4);
    console.log(" 1cal sss");
    console.log("val1", Math.abs(val_2_4));
    console.log("re1", Math.abs(val_re2_4));
  } else {
    console.log(" 1not cal");
  }
  if (testVal7 < 0) {
    let val_Po_2_5;
    val_2_5 = val_Po_2_5 = re / testVal7;
    Math.abs(val_2_5);
    var val_re2_5 = re / Math.abs(val_2_5);
    console.log("val2", Math.abs(val_2_5));
    console.log("re2", Math.abs(val_re2_5));
    console.log(" 2cal sss");
  } else {
    console.log(" 2not cal");
  }
  if (testVal8 < 0) {
    let val_Po_3_4;
    val_3_4 = val_Po_3_4 = re / testVal8;
    Math.abs(val_3_4);
    var val_re3_4 = re / Math.abs(val_3_4);
    console.log("val3", Math.abs(val_3_4));
    console.log("re3", Math.abs(val_re3_4));
    console.log(" 3cal sss");
  } else {
    console.log(" 3not cal");
  }
  if (testVal9 < 0) {
    let val_Po_3_5;
    val_3_5 = val_Po_3_5 = re / testVal9;
    Math.abs(val_3_5);
    var val_re3_5 = re / Math.abs(val_3_5);
    console.log("val4", Math.abs(val_3_5));
    console.log("re4", Math.abs(val_re3_5));
    console.log(" 4cal sss");
  } else {
    console.log(" 4not cal");
  }
  if (testVal10 < 0) {
    let val_Po_4_5;
    val_4_5 = val_Po_4_5 = re / testVal10;
    Math.abs(val_4_5);
    var val_re4_5 = re / Math.abs(val_4_5);
    console.log("val5", Math.abs(val_4_5));
    console.log("re5", Math.abs(val_re4_5));
    console.log(" 5cal sss");
  } else {
    console.log(" 5not cal");
  }

  var re_sum1 = 0.0;
  var re_sum2 = 0.0;
  var re_sum3 = 0.0;
  var re_sum4 = 0.0;
  var re_sum5 = 0.0;
  parseFloat(re_sum1, re_sum2, re_sum3, re_sum4, re_sum5);

  var val_re2_4 = re / Math.abs(val_2_4);
  var val_re2_5 = re / Math.abs(val_2_5);
  var val_re3_4 = re / Math.abs(val_3_4);
  var val_re3_5 = re / Math.abs(val_3_5);
  var val_re4_5 = re / Math.abs(val_4_5);
  parseFloat(val_2_4, val_2_5, val_3_4, val_3_5, val_4_5);
  parseFloat(val_re2_4, val_re2_5, val_re3_4, val_re3_5, val_re4_5);

  // console.log("val+", Math.abs(val_1_2));
  // console.log("re+",Math.abs(val_re1_2));

  let critri_sumcol1 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_re1_2)) +
    parseFloat(Math.abs(val_re1_3) )+
    parseFloat(Math.abs(val_re1_4)) +
    parseFloat(Math.abs(val_re1_5));
  let critri_sumcol2 =
    parseFloat(Math.abs(cri_sum))+
    parseFloat(Math.abs(val_1_2)) +
    parseFloat(Math.abs(val_re2_3))+
    parseFloat(Math.abs(val_re2_4)) +
    parseFloat(Math.abs(val_re2_5));
  let critri_sumcol3 =
    parseFloat(Math.abs(cri_sum) )+
    parseFloat(Math.abs(val_1_3)) +
    parseFloat(Math.abs(val_2_3)) +
    parseFloat(Math.abs(val_re3_4)) +
    parseFloat(Math.abs(val_re3_5));
  let critri_sumcol4 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_1_4)) +
    parseFloat(Math.abs(val_2_4)) +
    parseFloat(Math.abs(val_3_4))+
    parseFloat(Math.abs(val_re4_5));
  let critri_sumcol5 =
    parseFloat(Math.abs(cri_sum) )+
    parseFloat(Math.abs(val_1_5)) +
    parseFloat(Math.abs(val_2_5) )+
    parseFloat(Math.abs(val_3_5) )+
    parseFloat(Math.abs(val_4_5));

  //divis row 1 cal To 5
  let critri_calrow_1_1 = parseFloat( Math.abs(cri_sum)) / critri_sumcol1;
  let critri_calrow_1_2 = parseFloat( Math.abs(val_1_2))/ critri_sumcol2;
  let critri_calrow_1_3 = parseFloat( Math.abs(val_1_3)) / critri_sumcol3;
  let critri_calrow_1_4 = parseFloat(Math.abs(val_1_4)) / critri_sumcol4;
  let critri_calrow_1_5 = parseFloat( Math.abs(val_1_5)) / critri_sumcol5;
  console.log("critri_calrow_1_1 = ", critri_sumcol1);
  console.log("critri_calrow_1_1 = ", critri_sumcol2);


  //Eigenvector row 1
  let critri_sum_Eig_1_5 =
    parseFloat(
      critri_calrow_1_1 +
        critri_calrow_1_2 +
        critri_calrow_1_3 +
        critri_calrow_1_4 +
        critri_calrow_1_5
    ).toFixed(3) / cri_num;

  console.log("Eig1 = ", critri_sum_Eig_1_5);

  // divis row 2 cal To 5
  let critri_calrow_2_1 = parseFloat( Math.abs(val_re1_2))/ critri_sumcol1;
  let critri_calrow_2_2 = parseFloat( Math.abs(cri_sum)) / critri_sumcol2;
  let critri_calrow_2_3 = parseFloat( Math.abs(val_2_3)) / critri_sumcol3;
  let critri_calrow_2_4 = parseFloat( Math.abs(val_2_4)) / critri_sumcol4;
  let critri_calrow_2_5 = parseFloat( Math.abs(val_2_5)) / critri_sumcol5;

  //Eigenvector row 2
  let critri_sum_Eig_2_5 =
    parseFloat(
      critri_calrow_2_1 +
        critri_calrow_2_2 +
        critri_calrow_2_3 +
        critri_calrow_2_4 +
        critri_calrow_2_5
    ).toFixed(3) / cri_num;

  console.log("Eig2 = ", critri_sum_Eig_2_5);

  // divis row 3 cal To 5
  let critri_calrow_3_1 = parseFloat( Math.abs(val_re1_3)) / critri_sumcol1;
  let critri_calrow_3_2 = parseFloat( Math.abs(val_re2_3)) / critri_sumcol2;
  let critri_calrow_3_3 = parseFloat( Math.abs(cri_sum)) / critri_sumcol3;
  let critri_calrow_3_4 = parseFloat( Math.abs(val_3_4)) / critri_sumcol4;
  let critri_calrow_3_5 = parseFloat( Math.abs(val_3_5)) / critri_sumcol5;

  //Eigenvector row 3
  let critri_sum_Eig_3_5 =
    parseFloat(
      critri_calrow_3_1 +
        critri_calrow_3_2 +
        critri_calrow_3_3 +
        critri_calrow_3_4 +
        critri_calrow_3_5
    ).toFixed(3) / cri_num;

  console.log("Eig3 = ", critri_sum_Eig_3_5);

  // divis row 4 cal To 5
  let critri_calrow_4_1 = parseFloat( Math.abs(val_re1_4) )/ critri_sumcol1;
  let critri_calrow_4_2 = parseFloat( Math.abs(val_re2_4)) / critri_sumcol2;
  let critri_calrow_4_3 = parseFloat( Math.abs(val_re3_4)) / critri_sumcol3;
  let critri_calrow_4_4 = parseFloat( Math.abs(cri_sum) )/ critri_sumcol4;
  let critri_calrow_4_5 = parseFloat( Math.abs(val_4_5)) / critri_sumcol5;

  //Eigenvector row 3
  let critri_sum_Eig_4_5 =
    parseFloat(
      critri_calrow_4_1 +
        critri_calrow_4_2 +
        critri_calrow_4_3 +
        critri_calrow_4_4 +
        critri_calrow_4_5
    ).toFixed(3) / cri_num;

  console.log("Eig4 = ", critri_sum_Eig_4_5);

  // divis row 4 cal To 5
  let critri_calrow_5_1 = parseFloat( Math.abs(val_re1_5)) / critri_sumcol1;
  let critri_calrow_5_2 = parseFloat( Math.abs(val_re2_5)) / critri_sumcol2;
  let critri_calrow_5_3 = parseFloat( Math.abs(val_re3_5) )/ critri_sumcol3;
  let critri_calrow_5_4 = parseFloat( Math.abs(val_4_5)) / critri_sumcol4;
  let critri_calrow_5_5 = parseFloat( Math.abs(cri_sum) )/ critri_sumcol5;

  //Eigenvector row 3
  let critri_sum_Eig_5_5 =
    parseFloat(
      critri_calrow_5_1 +
        critri_calrow_5_2 +
        critri_calrow_5_3 +
        critri_calrow_5_4 +
        critri_calrow_5_5
    ).toFixed(3) / cri_num;

  console.log("Eig5 = ", critri_sum_Eig_5_5);

  //cal sum row1 main cirt
  let Calsum_col_1 =
    critri_calrow_1_1 +
    critri_calrow_2_1 +
    critri_calrow_3_1 +
    critri_calrow_4_1 +
    critri_calrow_5_1;
  // console.log("Calsum_col_1 = ", Calsum_col_1.toFixed(4));
  // cal sum row2 main cirt
  let Calsum_col_2 =
    critri_calrow_1_2 +
    critri_calrow_2_2 +
    critri_calrow_3_2 +
    critri_calrow_4_2 +
    critri_calrow_5_2;
  // console.log("Calsum_col_2 = ", Calsum_col_2.toFixed(4));
  //cal sum row3 main cirt
  let Calsum_col_3 =
    critri_calrow_1_3 +
    critri_calrow_2_3 +
    critri_calrow_3_3 +
    critri_calrow_4_3 +
    critri_calrow_5_3;
  // console.log("Calsum_col_3 = ", Calsum_col_3.toFixed(4));
  //cal sum row4 main cirt
  let Calsum_col_4 =
    critri_calrow_1_4 +
    critri_calrow_2_4 +
    critri_calrow_3_4 +
    critri_calrow_4_4 +
    critri_calrow_4_4;
  // console.log("Calsum_col_4 = ", Calsum_col_4.toFixed(4));
  //cal sum row5 main cirt
  let Calsum_col_5 =
    critri_calrow_1_5 +
    critri_calrow_2_5 +
    critri_calrow_3_5 +
    critri_calrow_4_5 +
    critri_calrow_5_5;
  // console.log("Calsum_col_5 = ", Calsum_col_5.toFixed(4));

  // cal sum_all_sol main cirt
  let Eigsum_all =
    critri_sum_Eig_1_5 +
    critri_sum_Eig_2_5 +
    critri_sum_Eig_3_5 +
    critri_sum_Eig_4_5 +
    critri_sum_Eig_5_5;

  console.log("Eigsum_all = ", Eigsum_all);

  //Consistency Vector row 1
  let Consis_vector_row1 =
    (critri_sum_Eig_1_5 * cri_sum +
      critri_sum_Eig_2_5 * val_1_2 +
      critri_sum_Eig_3_5 * val_1_3 +
      critri_sum_Eig_4_5 * val_1_4 +
      critri_sum_Eig_5_5 * val_1_5) /
    critri_sum_Eig_1_5;
  console.log("Consis_vector_row1 = ", Consis_vector_row1);
  //Consistency Vector row 2
  let Consis_vector_row2 =
    (critri_sum_Eig_1_5 * val_re1_2 +
      critri_sum_Eig_2_5 * cri_sum +
      critri_sum_Eig_3_5 * val_2_3 +
      critri_sum_Eig_4_5 * val_2_4 +
      critri_sum_Eig_5_5 * val_2_5) /
    critri_sum_Eig_2_5;
  console.log("Consis_vector_row2 = ", Consis_vector_row2);

  //Consistency Vector row 3
  let Consis_vector_row3 =
    (critri_sum_Eig_1_5 * val_re1_3 +
      critri_sum_Eig_2_5 * val_re2_3 +
      critri_sum_Eig_3_5 * cri_sum +
      critri_sum_Eig_4_5 * val_3_4 +
      critri_sum_Eig_5_5 * val_3_5) /
    critri_sum_Eig_3_5;
  console.log("Consis_vector_row3 = ", Consis_vector_row3);

  //Consistency Vector row 4
  let Consis_vector_row4 =
    (critri_sum_Eig_1_5 * val_re1_4 +
      critri_sum_Eig_2_5 * val_re2_4 +
      critri_sum_Eig_3_5 * val_re3_4 +
      critri_sum_Eig_4_5 * cri_sum +
      critri_sum_Eig_5_5 * val_re4_5) /
    critri_sum_Eig_4_5;
  console.log("Consis_vector_row4 = ", Consis_vector_row4);

  //Consistency Vector row 5
  let Consis_vector_row5 =
    (critri_sum_Eig_1_5 * val_re1_5 +
      critri_sum_Eig_2_5 * val_re2_5 +
      critri_sum_Eig_3_5 * val_re3_5 +
      critri_sum_Eig_4_5 * val_re4_5 +
      critri_sum_Eig_5_5 * cri_sum) /
    critri_sum_Eig_5_5;
  console.log("Consis_vector_row5 = ", Consis_vector_row5);
  // average LamdaMax
  const Lamda_max = [
    Consis_vector_row1,
    Consis_vector_row2,
    Consis_vector_row3,
    Consis_vector_row4,
    Consis_vector_row5,
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
  const add_w_crigroup = [1,2,3,4,5];
  const page = 2;
  const add_w_eigen = [critri_sum_Eig_1_5,critri_sum_Eig_2_5,critri_sum_Eig_3_5,critri_sum_Eig_4_5,critri_sum_Eig_5_5];
  const add_subgroup = 0.1;
  const status = sessionStorage.getItem("status_weight");
  const add_result = 0.00000000000001;
  const add_result_group = 0.1;
  const add_type = status;
  const add_weight = [testVal6, testVal7, testVal8, testVal9, testVal10];
  // const add_weight = [{"cartilir1":testVal },{"cartilir2":testVal2},{"cartilir3":testVal3},{"cartilir4":testVal4},{"cartilir5":testVal5}]
  const w_name = [
    "main_criteria2#4",
    "main_criteria2#5",
    "main_criteria3#4",
    "main_criteria3#5",
    "main_criteria4#5",
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
      (testVal6.length === 0,
      testVal7.length === 0,
      testVal8.length === 0,
      testVal9.length === 0,
      testVal10.length === 0)
    ) {
      // alert("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      console.log("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      // console.log(testVal1, testVal2, testVal3, testVal4, testVal5);
    } else if ((testVal6, testVal7, testVal8, testVal9, testVal10 === 0)) {
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
          w_crigroup: add_w_crigroup[i],
          w_subgroup: add_subgroup,
          w_type: add_type,
          w_eigen: add_w_eigen[i],
          w_wight: add_weight[i],
          w_result: add_result,
          w_result_group: add_result_group,
          w_page: page,
        };
        data_ar.push(w_data);
      }
      window.location = "/Add_wideth_Raw_3";
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
            โปรดเลือกระดับความสำคัญเทียบกันระหว่างสองปัจจัย 2/2
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
                  การเก็บรักษา (4)
                </h2>
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
                  สิ่งแวดล้อมและสังคม (5)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  ผลกำไรและช่องทางการตลาด (3)
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
                  ผลกำไรและช่องทางการตลาด (3)
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
                  การเก็บรักษา (4)
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
                  สิ่งแวดล้อมและสังคม (5)
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
