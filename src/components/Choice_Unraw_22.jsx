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
  const val_2_2 = sessionStorage.getItem("val_R1#R2");
  const val_re2_2 = sessionStorage.getItem("re_R1#R2");
  const val_2_3 = sessionStorage.getItem("val_R1#R3");
  const val_re2_3 = sessionStorage.getItem("re_R1#R3");
  const val_2_4 = sessionStorage.getItem("val_R1#R4");
  const val_re2_4 = sessionStorage.getItem("re_R1#R4");
  const val_2_5 = sessionStorage.getItem("val_R1#R5");
  const val_re2_5 = sessionStorage.getItem("re_R1#R5");
  const val_2_6 = sessionStorage.getItem("val_R1#R6");
  const val_re2_6 = sessionStorage.getItem("re_R1#R6");
  const val_2_7 = sessionStorage.getItem("val_R1#R7");
  const val_re2_7 = sessionStorage.getItem("re_R1#R7");
  const val_2_8 = sessionStorage.getItem("val_R2#R3");
  const val_re2_8 = sessionStorage.getItem("re_R2#R3");
  const val_2_9 = sessionStorage.getItem("val_R2#R4");
  const val_re2_9 = sessionStorage.getItem("re_R2#R4");
  const val_2_10 = sessionStorage.getItem("val_R2#R5");
  const val_re2_10 = sessionStorage.getItem("re_R2#R5");
  const val_2_11 = sessionStorage.getItem("val_R2#R6");
  const val_re2_11 = sessionStorage.getItem("re_R2#R6");

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
  const [testVal11, setTestVal11] = useState([]);

  let test = sessionStorage.getItem("main_critri_sum_Eig_1_4");

  var re = 1;
  var cri_sum = 1;
  var cri_num = 7;
  var cal_sum = 0;

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
  let val_3_12 = Math.abs(testVal11);

  if (testVal1 < 0) {
    let val_Po_3_2;
    val_3_2 = val_Po_3_2 = re / testVal1;
    Math.abs(val_3_2);
    var val_re3_2 = re / Math.abs(val_3_2);
    console.log("val1", Math.abs(val_3_2));
    console.log("re1", Math.abs(val_re3_2));
    console.log(" 1cal sss");
  } else {
    // console.log(" 1not cal");
  }
  if (testVal2 < 0) {
    let val_Po_3_3;
    val_3_3 = val_Po_3_3 = re / testVal2;
    Math.abs(val_3_3);
    var val_re3_3 = re / Math.abs(val_3_3);
    console.log("val2", Math.abs(val_3_3));
    console.log("re2", Math.abs(val_re3_3));
    console.log(" 2cal sss");
  } else {
    // console.log(" 2not cal");
  }
  if (testVal3 < 0) {
    let val_Po_3_4;
    val_3_4 = val_Po_3_4 = re / testVal3;
    Math.abs(val_3_4);
    var val_re3_4 = re / Math.abs(val_3_4);
    console.log("val3", Math.abs(val_3_4));
    console.log("re3", Math.abs(val_re3_4));
    console.log(" 3cal sss");
  } else {
    // console.log(" 3not cal");
  }
  if (testVal4 < 0) {
    let val_Po_3_5;
    val_3_5 = val_Po_3_5 = re / testVal4;
    Math.abs(val_3_5);
    var val_re3_5 = re / Math.abs(val_3_5);
    console.log("val4", Math.abs(val_3_5));
    console.log("re4", Math.abs(val_re3_5));
    console.log(" 4cal sss");
  } else {
    // console.log(" 4not cal");
  }
  if (testVal5 < 0) {
    let val_Po_3_6;
    val_3_6 = val_Po_3_6 = re / testVal5;
    Math.abs(val_3_6);
    var val_re3_6 = re / Math.abs(val_3_6);
    console.log("val5", Math.abs(val_3_6));
    console.log("re5", Math.abs(val_re3_6));
    console.log(" 5cal sss");
  } else {
    // console.log(" 5not cal");
  }
  if (testVal6 < 0) {
    let val_Po_3_7;
    val_3_7 = val_Po_3_7 = re / testVal6;
    Math.abs(val_3_7);
    var val_re3_7 = re / Math.abs(val_3_7);
    console.log("val6", Math.abs(val_3_7));
    console.log("re6", Math.abs(val_re3_7));
    console.log(" 6cal sss");
  } else {
    // console.log(" 6not cal");
  }
  if (testVal7 < 0) {
    let val_Po_3_8;
    val_3_8 = val_Po_3_8 = re / testVal7;
    Math.abs(val_3_8);
    var val_re3_8 = re / Math.abs(val_3_8);
    console.log("val7", Math.abs(val_3_8));
    console.log("re7", Math.abs(val_re3_8));
    console.log(" 7cal sss");
  } else {
    // console.log(" 7not cal");
  }
  if (testVal8 < 0) {
    let val_Po_3_9;
    val_3_9 = val_Po_3_9 = re / testVal8;
    Math.abs(val_3_9);
    var val_re3_9 = re / Math.abs(val_3_9);
    console.log("val8", Math.abs(val_3_9));
    console.log("re8", Math.abs(val_re3_9));
    console.log(" 8cal sss");
  } else {
    // console.log(" 8not cal");
  }
  if (testVal9 < 0) {
    let val_Po_3_10;
    val_3_10 = val_Po_3_10 = re / testVal9;
    Math.abs(val_3_10);
    var val_re3_10 = re / Math.abs(val_3_10);
    console.log("val9", Math.abs(val_3_10));
    console.log("re9", Math.abs(val_re3_10));
    console.log(" 9cal sss");
  }
  if (testVal10 < 0) {
    let val_Po_3_11;
    val_3_11 = val_Po_3_11 = re / testVal10;
    Math.abs(val_3_11);
    var val_re3_11 = re / Math.abs(val_3_11);
    console.log("val10", Math.abs(val_3_11));
    console.log("re10", Math.abs(val_re3_11));
    console.log(" 10cal sss");
  } else {
    // console.log(" 10not cal");
  }
  if (testVal11 < 0) {
    let val_Po_3_12;
    val_3_12 = val_Po_3_12 = re / testVal11;
    Math.abs(val_3_12);
    var val_re3_12 = re / Math.abs(val_3_12);
    console.log("val10", Math.abs(val_3_12));
    console.log("re10", Math.abs(val_re3_12));
    console.log(" 10cal sss");
  } else {
    // console.log(" 10not cal");
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
  var val_re3_12 = re / Math.abs(val_3_12);

  let critri_sumcol1 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_re2_2)) +
    parseFloat(Math.abs(val_re2_3)) +
    parseFloat(Math.abs(val_re2_4)) +
    parseFloat(Math.abs(val_re2_5)) +
    parseFloat(Math.abs(val_re2_6)) +
    parseFloat(Math.abs(val_re2_7));
  let critri_sumcol2 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_2_2)) +
    parseFloat(Math.abs(val_re2_8)) +
    parseFloat(Math.abs(val_re2_9)) +
    parseFloat(Math.abs(val_re2_10)) +
    parseFloat(Math.abs(val_re2_11)) +
    parseFloat(Math.abs(val_re3_2));

  //
  let critri_sumcol3 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_2_3)) +
    parseFloat(Math.abs(val_2_8)) +
    parseFloat(Math.abs(val_re3_3)) +
    parseFloat(Math.abs(val_re3_4)) +
    parseFloat(Math.abs(val_re3_5)) +
    parseFloat(Math.abs(val_re3_6));

  // console.log("test",val_re3_3);
  let critri_sumcol4 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_2_4)) +
    parseFloat(Math.abs(val_2_9)) +
    parseFloat(Math.abs(val_3_3)) +
    parseFloat(Math.abs(val_re3_7)) +
    parseFloat(Math.abs(val_re3_8)) +
    parseFloat(Math.abs(val_re3_9));

  let critri_sumcol5 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_2_5)) +
    parseFloat(Math.abs(val_2_10)) +
    parseFloat(Math.abs(val_3_4)) +
    parseFloat(Math.abs(val_3_7)) +
    parseFloat(Math.abs(val_re3_10)) +
    parseFloat(Math.abs(val_re3_11));

  let critri_sumcol6 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_2_6)) +
    parseFloat(Math.abs(val_2_11)) +
    parseFloat(Math.abs(val_3_5)) +
    parseFloat(Math.abs(val_3_8)) +
    parseFloat(Math.abs(val_3_10)) +
    parseFloat(Math.abs(val_re3_12));

  let critri_sumcol7 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_2_7)) +
    parseFloat(Math.abs(val_3_2)) +
    parseFloat(Math.abs(val_3_6)) +
    parseFloat(Math.abs(val_3_9)) +
    parseFloat(Math.abs(val_3_11)) +
    parseFloat(Math.abs(val_3_12));

  // console.log("1",Math.abs(cri_sum))   ;
  //   console.log("2",Math.abs(val_2_2))   ;
  //   console.log("3",Math.abs(val_re2_8)) ;
  //   console.log("4",Math.abs(val_re2_9)) ;
  //   console.log("5",Math.abs(val_re2_10));
  //   console.log("6",Math.abs(val_re2_11));
  //   console.log("7",Math.abs(val_re3_2));

  console.log("critri_sumcol1 =", Math.abs(critri_sumcol1));
  console.log("critri_sumcol2 =", Math.abs(critri_sumcol2));
  console.log("critri_sumcol3 =", Math.abs(critri_sumcol3));
  console.log("critri_sumcol4 =", Math.abs(critri_sumcol4));
  console.log("critri_sumcol5 =", Math.abs(critri_sumcol5));
  console.log("critri_sumcol6 =", Math.abs(critri_sumcol6));
  console.log("critri_sumcol7 =", Math.abs(critri_sumcol7));

  //   // //divis row 1 cal To 5
  let critri_calrow_1_1 = Math.abs(parseFloat(cri_sum)) / critri_sumcol1;
  let critri_calrow_1_2 = Math.abs(parseFloat(val_2_2)) / critri_sumcol2;
  let critri_calrow_1_3 = Math.abs(parseFloat(val_2_3)) / critri_sumcol3;
  let critri_calrow_1_4 = Math.abs(parseFloat(val_2_4)) / critri_sumcol4;
  let critri_calrow_1_5 = Math.abs(parseFloat(val_2_5)) / critri_sumcol5;
  let critri_calrow_1_6 = Math.abs(parseFloat(val_2_6)) / critri_sumcol6;
  let critri_calrow_1_7 = Math.abs(parseFloat(val_2_7)) / critri_sumcol7;

  //   // console.log("critri_calrow_1_2 =", Math.abs(critri_calrow_1_2));
  //   // console.log("critri_calrow_1_3 =", Math.abs(critri_calrow_1_3));

  //   //Eigenvector row 1
  let critri_sum_Eig_1_5 =
    parseFloat(
      critri_calrow_1_1 +
        critri_calrow_1_2 +
        critri_calrow_1_3 +
        critri_calrow_1_4 +
        critri_calrow_1_5 +
        critri_calrow_1_6 +
        critri_calrow_1_7
    ).toFixed(3) / cri_num;

  console.log("Eig1 = ", critri_sum_Eig_1_5.toFixed(3));
  //   console.log("Eig1.2 = ", critri_calrow_1_2.toFixed(3));
  //   console.log("Eig1.3 = ", critri_calrow_1_3.toFixed(3));
  //   console.log("Eig1.4 = ", critri_calrow_1_4.toFixed(3));
  //   console.log("Eig1.5 = ", critri_calrow_1_5.toFixed(3));
  //   console.log("Eig1.6 = ", critri_calrow_1_6.toFixed(3));
  //   console.log("Eig1.7 = ", critri_calrow_1_7.toFixed(3));

  //   // // divis row 2 cal To 5
  let critri_calrow_2_1 = Math.abs(parseFloat(val_re2_2)) / critri_sumcol1;
  let critri_calrow_2_2 = Math.abs(parseFloat(cri_sum)) / critri_sumcol2;
  let critri_calrow_2_3 = Math.abs(parseFloat(val_2_8)) / critri_sumcol3;
  let critri_calrow_2_4 = Math.abs(parseFloat(val_2_9)) / critri_sumcol4;
  let critri_calrow_2_5 = Math.abs(parseFloat(val_2_10)) / critri_sumcol5;
  let critri_calrow_2_6 = Math.abs(parseFloat(val_2_11)) / critri_sumcol6;
  let critri_calrow_2_7 = Math.abs(parseFloat(val_3_2)) / critri_sumcol7;

  //   //Eigenvector row 2
  let critri_sum_Eig_2_5 =
    parseFloat(
      critri_calrow_2_1 +
        critri_calrow_2_2 +
        critri_calrow_2_3 +
        critri_calrow_2_4 +
        critri_calrow_2_5 +
        critri_calrow_2_6 +
        critri_calrow_2_7
    ).toFixed(3) / cri_num;

  console.log("Eig2 = ", critri_sum_Eig_2_5.toFixed(3));

  //   // // divis row 3 cal To 5
  let critri_calrow_3_1 = Math.abs(parseFloat(val_re2_3)) / critri_sumcol1;
  let critri_calrow_3_2 = Math.abs(parseFloat(val_re2_8)) / critri_sumcol2;
  let critri_calrow_3_3 = Math.abs(parseFloat(cri_sum)) / critri_sumcol3;
  let critri_calrow_3_4 = Math.abs(parseFloat(val_3_3)) / critri_sumcol4;
  let critri_calrow_3_5 = Math.abs(parseFloat(val_3_4)) / critri_sumcol5;
  let critri_calrow_3_6 = Math.abs(parseFloat(val_3_5)) / critri_sumcol6;
  let critri_calrow_3_7 = Math.abs(parseFloat(val_3_6)) / critri_sumcol7;

  //   // console.log("critri_calrow_1_1 =", Math.abs(critri_calrow_1_3));

  //   //Eigenvector row 3
  let critri_sum_Eig_3_5 =
    parseFloat(
      critri_calrow_3_1 +
        critri_calrow_3_2 +
        critri_calrow_3_3 +
        critri_calrow_3_4 +
        critri_calrow_3_5 +
        critri_calrow_3_6 +
        critri_calrow_3_7
    ).toFixed(3) / cri_num;

  console.log("Eig3 = ", critri_sum_Eig_3_5.toFixed(3));

  let critri_calrow_4_1 = Math.abs(parseFloat(val_re2_4)) / critri_sumcol1;
  let critri_calrow_4_2 = Math.abs(parseFloat(val_re2_9)) / critri_sumcol2;
  let critri_calrow_4_3 = Math.abs(parseFloat(val_re3_3)) / critri_sumcol3;
  let critri_calrow_4_4 = Math.abs(parseFloat(cri_sum)) / critri_sumcol4;
  let critri_calrow_4_5 = Math.abs(parseFloat(val_3_7)) / critri_sumcol5;
  let critri_calrow_4_6 = Math.abs(parseFloat(val_3_8)) / critri_sumcol6;
  let critri_calrow_4_7 = Math.abs(parseFloat(val_3_9)) / critri_sumcol7;

  //   // console.log("critri_calrow_1_1 =", Math.abs(critri_calrow_1_3));

  //   //Eigenvector row 3
  let critri_sum_Eig_4_5 =
    parseFloat(
      critri_calrow_4_1 +
        critri_calrow_4_2 +
        critri_calrow_4_3 +
        critri_calrow_4_4 +
        critri_calrow_4_5 +
        critri_calrow_4_6 +
        critri_calrow_4_7
    ).toFixed(3) / cri_num;

  console.log("Eig4 = ", critri_sum_Eig_4_5.toFixed(3));

  let critri_calrow_5_1 = Math.abs(parseFloat(val_re2_5)) / critri_sumcol1;
  let critri_calrow_5_2 = Math.abs(parseFloat(val_re2_10)) / critri_sumcol2;
  let critri_calrow_5_3 = Math.abs(parseFloat(val_re3_4)) / critri_sumcol3;
  let critri_calrow_5_4 = Math.abs(parseFloat(val_re3_7)) / critri_sumcol4;
  let critri_calrow_5_5 = Math.abs(parseFloat(cri_sum)) / critri_sumcol5;
  let critri_calrow_5_6 = Math.abs(parseFloat(val_3_10)) / critri_sumcol6;
  let critri_calrow_5_7 = Math.abs(parseFloat(val_3_11)) / critri_sumcol7;

  //   // console.log("critri_calrow_1_1 =", Math.abs(critri_calrow_1_3));

  //   //Eigenvector row 3
  let critri_sum_Eig_5_5 =
    parseFloat(
      critri_calrow_5_1 +
        critri_calrow_5_2 +
        critri_calrow_5_3 +
        critri_calrow_5_4 +
        critri_calrow_5_5 +
        critri_calrow_5_6 +
        critri_calrow_5_7
    ).toFixed(3) / cri_num;

  console.log("Eig5 = ", critri_sum_Eig_5_5.toFixed(3));

  let critri_calrow_6_1 = Math.abs(parseFloat(val_re2_6)) / critri_sumcol1;
  let critri_calrow_6_2 = Math.abs(parseFloat(val_re2_11)) / critri_sumcol2;
  let critri_calrow_6_3 = Math.abs(parseFloat(val_re3_5)) / critri_sumcol3;
  let critri_calrow_6_4 = Math.abs(parseFloat(val_re3_8)) / critri_sumcol4;
  let critri_calrow_6_5 = Math.abs(parseFloat(val_re3_10)) / critri_sumcol5;
  let critri_calrow_6_6 = Math.abs(parseFloat(cri_sum)) / critri_sumcol6;
  let critri_calrow_6_7 = Math.abs(parseFloat(val_3_12)) / critri_sumcol7;

  //   // console.log("critri_calrow_1_1 =", Math.abs(critri_calrow_1_3));

  //   //Eigenvector row 3
  let critri_sum_Eig_6_5 =
    parseFloat(
      critri_calrow_6_1 +
        critri_calrow_6_2 +
        critri_calrow_6_3 +
        critri_calrow_6_4 +
        critri_calrow_6_5 +
        critri_calrow_6_6 +
        critri_calrow_6_7
    ).toFixed(3) / cri_num;

  console.log("Eig6 = ", critri_sum_Eig_6_5.toFixed(3));

  let critri_calrow_7_1 = Math.abs(parseFloat(val_re2_7)) / critri_sumcol1;
  let critri_calrow_7_2 = Math.abs(parseFloat(val_re3_2)) / critri_sumcol2;
  let critri_calrow_7_3 = Math.abs(parseFloat(val_re3_6)) / critri_sumcol3;
  let critri_calrow_7_4 = Math.abs(parseFloat(val_re3_9)) / critri_sumcol4;
  let critri_calrow_7_5 = Math.abs(parseFloat(val_re3_11)) / critri_sumcol5;
  let critri_calrow_7_6 = Math.abs(parseFloat(val_re3_12)) / critri_sumcol6;
  let critri_calrow_7_7 = Math.abs(parseFloat(cri_sum)) / critri_sumcol7;

  //   // console.log("critri_calrow_1_1 =", Math.abs(critri_calrow_1_3));

  //   //Eigenvector row 3
  let critri_sum_Eig_7_5 =
    parseFloat(
      critri_calrow_7_1 +
        critri_calrow_7_2 +
        critri_calrow_7_3 +
        critri_calrow_7_4 +
        critri_calrow_7_5 +
        critri_calrow_7_6 +
        critri_calrow_7_7
    ).toFixed(3) / cri_num;

  console.log("Eig7 = ", critri_sum_Eig_7_5.toFixed(3));

  //cal sum row1 main cirt
  let Calsum_col_1 =
    critri_calrow_1_1 +
    critri_calrow_2_1 +
    critri_calrow_3_1 +
    critri_calrow_4_1 +
    critri_calrow_5_1 +
    critri_calrow_6_1 +
    critri_calrow_7_1;
  //   console.log("Calsum_col_1 = ", Calsum_col_1.toFixed(4));
  // cal sum row2 main cirt
  let Calsum_col_2 =
    critri_calrow_1_2 +
    critri_calrow_2_2 +
    critri_calrow_3_2 +
    critri_calrow_4_2 +
    critri_calrow_5_2 +
    critri_calrow_6_2 +
    critri_calrow_7_2;
  //   console.log("Calsum_col_2 = ", Calsum_col_2.toFixed(4));
  //cal sum row3 main cirt
  let Calsum_col_3 =
    critri_calrow_1_3 +
    critri_calrow_2_3 +
    critri_calrow_3_3 +
    critri_calrow_4_3 +
    critri_calrow_5_3 +
    critri_calrow_6_3 +
    critri_calrow_7_3;
  //   console.log("Calsum_col_3 = ", Calsum_col_3.toFixed(4));
  //cal sum row4 main cirt
  let Calsum_col_4 =
    critri_calrow_1_4 +
    critri_calrow_2_4 +
    critri_calrow_3_4 +
    critri_calrow_4_4 +
    critri_calrow_5_4 +
    critri_calrow_6_4 +
    critri_calrow_7_4;
  //   console.log("Calsum_col_4 = ", Calsum_col_4.toFixed(4));
  // cal sum row5 main cirt
  let Calsum_col_5 =
    critri_calrow_1_5 +
    critri_calrow_2_5 +
    critri_calrow_3_5 +
    critri_calrow_4_5 +
    critri_calrow_5_5 +
    critri_calrow_6_5 +
    critri_calrow_7_5;
  //   console.log("Calsum_col_5 = ", Calsum_col_5.toFixed(4));
  //cal sum row6 main cirt
  let Calsum_col_6 =
    critri_calrow_1_6 +
    critri_calrow_2_6 +
    critri_calrow_3_6 +
    critri_calrow_4_6 +
    critri_calrow_5_6 +
    critri_calrow_6_6 +
    critri_calrow_7_6;
  //   console.log("Calsum_col_6 = ", Calsum_col_6.toFixed(4));
  //cal sum row7 main cirt
  let Calsum_col_7 =
    critri_calrow_1_7 +
    critri_calrow_2_7 +
    critri_calrow_3_7 +
    critri_calrow_4_7 +
    critri_calrow_5_7 +
    critri_calrow_6_7 +
    critri_calrow_7_7;
  //   console.log("Calsum_col_7 = ", Calsum_col_7.toFixed(4));
  // cal sum_all_sol main cirt
  let Eigsum_all =
    critri_sum_Eig_1_5 +
    critri_sum_Eig_2_5 +
    critri_sum_Eig_3_5 +
    critri_sum_Eig_4_5 +
    critri_sum_Eig_5_5 +
    critri_sum_Eig_6_5 +
    critri_sum_Eig_7_5;
  //   console.log("Eigsum_all = ", Eigsum_all.toFixed(0));
  //   // console.log("Eigsum_all = ", Eigsum_all);

  //Consistency Vector row 1
  let Consis_vector_row1 =
    (critri_sum_Eig_1_5 * Math.abs(parseFloat(cri_sum)) +
      critri_sum_Eig_2_5 * Math.abs(parseFloat(val_2_2)) +
      critri_sum_Eig_3_5 * Math.abs(parseFloat(val_2_3)) +
      critri_sum_Eig_4_5 * Math.abs(parseFloat(val_2_4)) +
      critri_sum_Eig_5_5 * Math.abs(parseFloat(val_2_5)) +
      critri_sum_Eig_6_5 * Math.abs(parseFloat(val_2_6)) +
      critri_sum_Eig_7_5 * Math.abs(parseFloat(val_2_7))) /
    critri_sum_Eig_1_5;
  //   console.log("Consis_vector_row1 = ", Consis_vector_row1.toFixed());

  //Consistency Vector row 2
  let Consis_vector_row2 =
    (critri_sum_Eig_1_5 * Math.abs(parseFloat(val_re2_2)) +
      critri_sum_Eig_2_5 * Math.abs(parseFloat(cri_sum)) +
      critri_sum_Eig_3_5 * Math.abs(parseFloat(val_2_8)) +
      critri_sum_Eig_4_5 * Math.abs(parseFloat(val_2_9)) +
      critri_sum_Eig_5_5 * Math.abs(parseFloat(val_2_10)) +
      critri_sum_Eig_6_5 * Math.abs(parseFloat(val_2_11)) +
      critri_sum_Eig_7_5 * Math.abs(parseFloat(val_3_2))) /
    critri_sum_Eig_2_5;
  //   console.log("Consis_vector_row2 = ", Consis_vector_row2.toFixed());

  let Consis_vector_row3 =
    (critri_sum_Eig_1_5 * Math.abs(parseFloat(val_re2_3)) +
      critri_sum_Eig_2_5 * Math.abs(parseFloat(val_re2_8)) +
      critri_sum_Eig_3_5 * Math.abs(parseFloat(cri_sum)) +
      critri_sum_Eig_4_5 * Math.abs(parseFloat(val_3_3)) +
      critri_sum_Eig_5_5 * Math.abs(parseFloat(val_3_4)) +
      critri_sum_Eig_6_5 * Math.abs(parseFloat(val_3_5)) +
      critri_sum_Eig_7_5 * Math.abs(parseFloat(val_3_6))) /
    critri_sum_Eig_3_5;
  //   console.log("Consis_vector_row3 = ", Consis_vector_row3.toFixed());

  let Consis_vector_row4 =
    (critri_sum_Eig_1_5 * Math.abs(parseFloat(val_re2_4)) +
      critri_sum_Eig_2_5 * Math.abs(parseFloat(val_re2_9)) +
      critri_sum_Eig_3_5 * Math.abs(parseFloat(val_re3_3)) +
      critri_sum_Eig_4_5 * Math.abs(parseFloat(cri_sum)) +
      critri_sum_Eig_5_5 * Math.abs(parseFloat(val_3_7)) +
      critri_sum_Eig_6_5 * Math.abs(parseFloat(val_3_8)) +
      critri_sum_Eig_7_5 * Math.abs(parseFloat(val_3_9))) /
    critri_sum_Eig_4_5;
  //   console.log("Consis_vector_row4 = ", Consis_vector_row4.toFixed());

  let Consis_vector_row5 =
    (critri_sum_Eig_1_5 * Math.abs(parseFloat(val_re2_5)) +
      critri_sum_Eig_2_5 * Math.abs(parseFloat(val_re2_10)) +
      critri_sum_Eig_3_5 * Math.abs(parseFloat(val_re3_4)) +
      critri_sum_Eig_4_5 * Math.abs(parseFloat(val_re3_7)) +
      critri_sum_Eig_5_5 * Math.abs(parseFloat(cri_sum)) +
      critri_sum_Eig_6_5 * Math.abs(parseFloat(val_3_10)) +
      critri_sum_Eig_7_5 * Math.abs(parseFloat(val_3_11))) /
    critri_sum_Eig_5_5;
  //   console.log("Consis_vector_row5 = ", Consis_vector_row5.toFixed());

  let Consis_vector_row6 =
    (critri_sum_Eig_1_5 * Math.abs(parseFloat(val_re2_6)) +
      critri_sum_Eig_2_5 * Math.abs(parseFloat(val_re2_11)) +
      critri_sum_Eig_3_5 * Math.abs(parseFloat(val_re3_5)) +
      critri_sum_Eig_4_5 * Math.abs(parseFloat(val_re3_8)) +
      critri_sum_Eig_5_5 * Math.abs(parseFloat(val_re3_10)) +
      critri_sum_Eig_6_5 * Math.abs(parseFloat(cri_sum)) +
      critri_sum_Eig_7_5 * Math.abs(parseFloat(val_3_12))) /
    critri_sum_Eig_6_5;
  //   console.log("Consis_vector_row6 = ", Consis_vector_row6.toFixed());

  let Consis_vector_row7 =
    (critri_sum_Eig_1_5 * Math.abs(parseFloat(val_re2_7)) +
      critri_sum_Eig_2_5 * Math.abs(parseFloat(val_re3_2)) +
      critri_sum_Eig_3_5 * Math.abs(parseFloat(val_re3_6)) +
      critri_sum_Eig_4_5 * Math.abs(parseFloat(val_re3_9)) +
      critri_sum_Eig_5_5 * Math.abs(parseFloat(val_re3_11)) +
      critri_sum_Eig_6_5 * Math.abs(parseFloat(val_re3_12)) +
      critri_sum_Eig_7_5 * Math.abs(parseFloat(cri_sum))) /
    critri_sum_Eig_7_5;
  //   console.log("Consis_vector_row7 = ", Consis_vector_row7.toFixed());

  //   // average LamdaMax
  const Lamda_max = [
    Consis_vector_row1,
    Consis_vector_row2,
    Consis_vector_row3,
    Consis_vector_row4,
    Consis_vector_row5,
    Consis_vector_row6,
    Consis_vector_row7,
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
  const page = 18;
  const add_w_eigen = [
    critri_sum_Eig_1_5,
    critri_sum_Eig_2_5,
    critri_sum_Eig_3_5,
    critri_sum_Eig_4_5,
    critri_sum_Eig_5_5,
    critri_sum_Eig_6_5,
    critri_sum_Eig_7_5,
    0.0000000000001,
    0.0000000000001,
    0.0000000000001,
    0.0000000000001,
  ];
  const add_subgroup = 11;
  const status = sessionStorage.getItem("status_weight");
  const add_result_group = [1, 2, 3, 4, 5, 6, 7, 0.1, 0.1, 0.1, 0.1];
  const add_type = status;
  const add_weight = [
    testVal1,
    testVal2,
    testVal3,
    testVal4,
    testVal5,
    testVal6,
    testVal7,
    testVal8,
    testVal9,
    testVal10,
    testVal11,
  ];
  // const add_weight = [{"cartilir1":testVal },{"cartilir2":testVal2},{"cartilir3":testVal3},{"cartilir4":testVal4},{"cartilir5":testVal5}]
  const w_name = [
    "Unraw11_criteriaR2#R7",
    "Unraw11_criteriaR3#R4",
    "Unraw11_criteriaR3#R5",
    "Unraw11_criteriaR3#R6",
    "Unraw11_criteriaR3#R7",
    "Unraw11_criteriaR4#R5",
    "Unraw11_criteriaR4#R6",
    "Unraw11_criteriaR4#R7",
    "Unraw11_criteriaR5#R6",
    "Unraw11_criteriaR5#R7",
    "Unraw11_criteriaR6#R7",
  ];
  const balck_page = () => {
    if (localStorage.length === 2) {
      window.history.back();
    } else {
      alert("หมดเวลา");
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8888/getEigenResult", {
        email,
        status,
        add_w_crigroup,
      });
      const result = res.data.result;
      const EigenVal1 = result[0].w_eigen;
      const EigenVal2 = result[2].w_eigen;
      const EigenVal3 = critri_sum_Eig_1_5;
      const EigenVal4 = critri_sum_Eig_2_5;
      const EigenVal5 = critri_sum_Eig_3_5;
      const EigenVal6 = critri_sum_Eig_4_5;
      const EigenVal7 = critri_sum_Eig_5_5;
      const EigenVal8 = critri_sum_Eig_6_5;
      const EigenVal9 = critri_sum_Eig_7_5;

      const Result1 = EigenVal1 * EigenVal2 * EigenVal3;
      const Result2 = EigenVal1 * EigenVal2 * EigenVal4;
      const Result3 = EigenVal1 * EigenVal2 * EigenVal5;
      const Result4 = EigenVal1 * EigenVal2 * EigenVal6;
      const Result5 = EigenVal1 * EigenVal2 * EigenVal7;
      const Result6 = EigenVal1 * EigenVal2 * EigenVal8;
      const Result7 = EigenVal1 * EigenVal2 * EigenVal9;

      console.log(
        "resdataCal",
        Result1.toFixed(3),
        Result2.toFixed(3),
        Result3.toFixed(3),
        Result4.toFixed(3),
        Result5.toFixed(3),
        Result6.toFixed(3),
        Result7.toFixed(3)
      );
      return [Result1, Result2, Result3, Result4, Result5, Result6, Result7];
    } catch (err) {
      console.log(err);
    }
  };
  (async () => {
    const [Result1, Result2, Result3, Result4, Result5, Result6, Result7] =
      await handleSubmit();
    sessionStorage.setItem("result1", Result1);
    sessionStorage.setItem("result2", Result2);
    sessionStorage.setItem("result3", Result3);
    sessionStorage.setItem("result4", Result4);
    sessionStorage.setItem("result5", Result5);
    sessionStorage.setItem("result6", Result6);
    sessionStorage.setItem("result7", Result7);
  })();

  // let resultEig = 0;
  const handleSubmit_2 = () => {
    const Result1 = parseFloat(sessionStorage.getItem("result1"));
    const Result2 = parseFloat(sessionStorage.getItem("result2"));
    const Result3 = parseFloat(sessionStorage.getItem("result3"));
    const Result4 = parseFloat(sessionStorage.getItem("result4"));
    const Result5 = parseFloat(sessionStorage.getItem("result5"));
    const Result6 = parseFloat(sessionStorage.getItem("result6"));
    const Result7 = parseFloat(sessionStorage.getItem("result7"));
    if (
      isNaN(Result1) ||
      isNaN(Result2) ||
      isNaN(Result3) ||
      isNaN(Result4) ||
      isNaN(Result5) ||
      isNaN(Result6) ||
      isNaN(Result7)
    ) {
      alert("Invalid results");
      return;
    }
    const add_result = [
      Result1,
      Result2,
      Result3,
      Result4,
      Result5,
      Result6,
      Result7,
      0.0000000000001,
      0.0000000000001,
      0.0000000000001,
      0.0000000000001,
    ];

    if ((testVal1.length, testVal2.length, testVal3.length === 0)) {
      alert("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      console.log("ได้โปรดกรอกอีกครั้งให้ครบถ้วน");
      console.log(testVal1, testVal2, testVal3);
    } else if ((testVal1, testVal2, testVal3 === 0)) {
      alert("ไม่สามารถค่าเป็น 0 ได้โปรดกรอกอีกครั้ง");
    } else if (CR_Val >= 0.1) {
      console.log("Rejected Values");
      alert("ค่าไม่ถูกต้องตามหลัก ได้โปรดกรอกอีกครั้ง");
    } else if (localStorage.length === 2) {
      // console.log((add_weight.testVal1 && add_weight.testVa2) , (add_weight.testVa3 && add_weight.testVa4)  === 0);
      console.log(testVal1 || testVal2 || testVal3 === 0);
      //   // console.log(add_weight.length)
      let data_ar = [];
      for (let i = 0, len = w_name.length; i < len; i++) {
        const w_data = {
          w_name: w_name[i],
          email: email,
          w_crigroup: add_w_crigroup,
          w_subgroup: add_subgroup,
          w_type: add_type,
          w_eigen: add_w_eigen[i],
          w_wight: add_weight[i],
          w_result: add_result[i],
          w_result_group: add_result_group[i],
          w_page: page,
        };
        data_ar.push(w_data);
      }
      window.location = "/Choice_UnRaw_23";
      console.log(localStorage.getItem("token").length);
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
  const val_w11 = (e, num) => {
    setTestVal11(num);
    console.log(num);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            โปรดเลือกระดับความสําคัญแนวโน้มการส่งออก (3.4) 22/34
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
                  เค้กกล้วย (R7)
                </h2>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  ทอฟฟี่กล้วย (R3)
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
                  ข้าวเกรียบกล้วย (R4)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  ทอฟฟี่กล้วย (R3)
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
                  น้ำกล้วย (R5)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  ทอฟฟี่กล้วย (R3)
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
                  เครื่องดื่มแอลกอฮอร์ (R6)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  ทอฟฟี่กล้วย (R3)
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
                  เค้กกล้วย (R7)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  ข้าวเกรียบกล้วย (R4)
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
                  น้ำกล้วย (R5)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  ข้าวเกรียบกล้วย (R4)
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
                  เครื่องดื่มแอลกอฮอร์ (R6)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  ข้าวเกรียบกล้วย (R4)
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
                  เค้กกล้วย (R7)
                </h1>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  น้ำกล้วย (R5)
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
                  เครื่องดื่มแอลกอฮอร์ (R6)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  น้ำกล้วย (R5)
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
                  เค้กกล้วย (R7)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                  เครื่องดื่มแอลกอฮอร์ (R6)
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
                  onChange={val_w11}
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
