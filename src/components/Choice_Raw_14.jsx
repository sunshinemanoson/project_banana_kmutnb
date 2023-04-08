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

  let test = sessionStorage.getItem("main_critri_sum_Eig_1_4");

  var re = 1;
  var cri_sum = 1;
  var cri_num = 3;
  var cal_sum = 0;

  let val_3_2 = Math.abs(testVal1);
  let val_3_3 = Math.abs(testVal2);
  let val_3_4 = Math.abs(testVal3);

  if (testVal1 < 0) {
    let val_Po_3_2;
    val_3_2 = val_Po_3_2 = re / testVal1;
    Math.abs(val_3_2);
    var val_re3_2 = re / Math.abs(val_3_2);
    console.log("val1", Math.abs(val_3_2));
    console.log("re1", Math.abs(val_re3_2));
    console.log(" 1cal sss");
  } else {
    console.log(" 1not cal");
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
    console.log(" 2not cal");
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
    console.log(" 3not cal");
  }

  var re_sum1 = 0.0;
  var re_sum2 = 0.0;
  var re_sum3 = 0.0;

  parseFloat(re_sum1, re_sum2, re_sum3);

  var val_re3_2 = re / Math.abs(val_3_2);
  var val_re3_3 = re / Math.abs(val_3_3);
  var val_re3_4 = re / Math.abs(val_3_4);

  parseFloat(val_re3_2, val_re3_3, val_re3_4);

  let critri_sumcol1 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_re3_2)) +
    parseFloat(Math.abs(val_re3_3));

  let critri_sumcol2 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_3_2)) +
    parseFloat(Math.abs(val_re3_4));

  let critri_sumcol3 =
    parseFloat(Math.abs(cri_sum)) +
    parseFloat(Math.abs(val_3_3)) +
    parseFloat(Math.abs(val_3_4));

  console.log("critri_sumcol1 =", Math.abs(critri_sumcol1));
  console.log("critri_sumcol2 =", Math.abs(critri_sumcol2));
  console.log("critri_sumcol3 =", Math.abs(critri_sumcol3));

  // //divis row 1 cal To 5
  let critri_calrow_1_1 = Math.abs(parseFloat(cri_sum)) / critri_sumcol1;
  let critri_calrow_1_2 = Math.abs(parseFloat(val_3_2)) / critri_sumcol2;
  let critri_calrow_1_3 = Math.abs(parseFloat(val_3_3)) / critri_sumcol3;

  // console.log("critri_calrow_1_2 =", Math.abs(critri_calrow_1_2));
  // console.log("critri_calrow_1_3 =", Math.abs(critri_calrow_1_3));

  //Eigenvector row 1
  let critri_sum_Eig_1_5 =
    parseFloat(
      critri_calrow_1_1 + critri_calrow_1_2 + critri_calrow_1_3
    ).toFixed(3) / cri_num;

  console.log("Eig1 = ", critri_sum_Eig_1_5);

  // // divis row 2 cal To 5
  let critri_calrow_2_1 = Math.abs(parseFloat(val_re3_2)) / critri_sumcol1;
  let critri_calrow_2_2 = Math.abs(parseFloat(cri_sum)) / critri_sumcol2;
  let critri_calrow_2_3 = Math.abs(parseFloat(val_3_4)) / critri_sumcol3;

  //Eigenvector row 2
  let critri_sum_Eig_2_5 =
    parseFloat(
      critri_calrow_2_1 + critri_calrow_2_2 + critri_calrow_2_3
    ).toFixed(3) / cri_num;

  console.log("Eig2 = ", critri_sum_Eig_2_5);

  // // divis row 3 cal To 5
  let critri_calrow_3_1 = Math.abs(parseFloat(val_re3_3)) / critri_sumcol1;
  let critri_calrow_3_2 = Math.abs(parseFloat(val_re3_4)) / critri_sumcol2;
  let critri_calrow_3_3 = Math.abs(parseFloat(cri_sum)) / critri_sumcol3;

  // console.log("critri_calrow_1_1 =", Math.abs(critri_calrow_1_3));

  //Eigenvector row 3
  let critri_sum_Eig_3_5 =
    parseFloat(
      critri_calrow_3_1 + critri_calrow_3_2 + critri_calrow_3_3
    ).toFixed(3) / cri_num;

  console.log("Eig3 = ", critri_sum_Eig_3_5);
  //cal sum row1 main cirt
  let Calsum_col_1 = critri_calrow_1_1 + critri_calrow_2_1 + critri_calrow_3_1;
  console.log("Calsum_col_1 = ", Calsum_col_1.toFixed(4));
  // cal sum row2 main cirt
  let Calsum_col_2 = critri_calrow_1_2 + critri_calrow_2_2 + critri_calrow_3_2;
  console.log("Calsum_col_2 = ", Calsum_col_2.toFixed(4));
  //cal sum row3 main cirt
  let Calsum_col_3 = critri_calrow_1_3 + critri_calrow_2_3 + critri_calrow_3_3;
  console.log("Calsum_col_3 = ", Calsum_col_3.toFixed(4));
  // cal sum_all_sol main cirt
  let Eigsum_all = critri_sum_Eig_1_5 + critri_sum_Eig_2_5 + critri_sum_Eig_3_5;

  // console.log("Eigsum_all = ", Eigsum_all);

  //Consistency Vector row 1
  let Consis_vector_row1 =
    (critri_sum_Eig_1_5 * Math.abs(cri_sum) +
      critri_sum_Eig_2_5 * Math.abs(val_3_2) +
      critri_sum_Eig_3_5 * Math.abs(val_3_3)) /
    critri_sum_Eig_1_5;
  console.log("Consis_vector_row1 = ", Consis_vector_row1);

  //Consistency Vector row 2
  let Consis_vector_row2 =
    (critri_sum_Eig_1_5 * Math.abs(val_re3_2) +
      critri_sum_Eig_2_5 * Math.abs(cri_sum) +
      critri_sum_Eig_3_5 * Math.abs(val_3_4)) /
    critri_sum_Eig_2_5;
  console.log("Consis_vector_row2 = ", Consis_vector_row2);

  //Consistency Vector row 3
  let Consis_vector_row3 =
    (critri_sum_Eig_1_5 * Math.abs(val_re3_3) +
      critri_sum_Eig_2_5 * Math.abs(val_re3_4) +
      critri_sum_Eig_3_5 * Math.abs(cri_sum)) /
    critri_sum_Eig_3_5;
  console.log("Consis_vector_row3 = ", Consis_vector_row3);

  // average LamdaMax
  const Lamda_max = [
    Consis_vector_row1,
    Consis_vector_row2,
    Consis_vector_row3,
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
  const add_w_crigroup = 4;
  const page = 21;
  const add_w_eigen = [critri_sum_Eig_1_5,critri_sum_Eig_2_5,critri_sum_Eig_3_5];
  const add_weight = [testVal1, testVal2, testVal3];
  const add_subgroup = 14;
  const status = sessionStorage.getItem("status_weight");
  const add_result_group = [1,2,3];
  const add_type = status;
  // const add_weight = [{"cartilir1":testVal },{"cartilir2":testVal2},{"cartilir3":testVal3},{"cartilir4":testVal4},{"cartilir5":testVal5}]
  const w_name = [ 
  "raw14_criteriaU1#U2",
  "raw14_criteriaU1#U3",
  "raw14_criteriaU2#U3",];

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
        add_w_crigroup,
      });
      const result = res.data.result;
      const EigenVal1 = result[0].w_eigen;
      const EigenVal2 = result[3].w_eigen;
      const EigenVal3 = critri_sum_Eig_1_5;
      const EigenVal4 = critri_sum_Eig_2_5;
      const EigenVal5 = critri_sum_Eig_3_5;
  
      const Result1 = EigenVal1 * EigenVal2 * EigenVal3;
      const Result2 = EigenVal1 * EigenVal2 * EigenVal4;
      const Result3 = EigenVal1 * EigenVal2 * EigenVal5;
      // console.log("resdataCal", Result1.toFixed(3), Result2.toFixed(3), Result3.toFixed(3));
      return [Result1, Result2, Result3];
    } catch (err) {
      console.log(err);
    }
  };
 (async () => {
  const [Result1, Result2, Result3] = await handleSubmit();
  sessionStorage.setItem("result1", Result1);
  sessionStorage.setItem("result2", Result2);
  sessionStorage.setItem("result3", Result3);
})();

  const handleSubmit_2 = () => {
    const Result1 = parseFloat(sessionStorage.getItem("result1"));
    const Result2 = parseFloat(sessionStorage.getItem("result2"));
    const Result3 = parseFloat(sessionStorage.getItem("result3"));
    if (isNaN(Result1) || isNaN(Result2) || isNaN(Result3)) {
      alert("Invalid results");
      return;
    }
    const add_result = [Result1, Result2, Result3];
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
      // console.log(add_weight.length)
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
      window.location = "/Choice_Raw_15";
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

  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            โปรดเลือกระดับสถานที่และขนาดพื้นที่ในการเก็บรักษา (4.3) 14/17
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
                กล้วยฉาบ (U1)
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
                กล้วยอบเนย (U2)
                </h2>
              </Item>
            </Grid>
            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยฉาบ (U1)
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
                กล้วยเบรคแตก (U3)
                </h1>
              </Item>
            </Grid>

            <Grid item xs={2.5} md={2.5}>
              <Item>
                <h1 id="criteria1" name="criteria1">
                กล้วยอบเนย (U2)
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
                กล้วยเบรคแตก (U3)
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
