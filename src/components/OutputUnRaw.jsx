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
import axios from "axios";
import { Result } from "postcss";
import Button from "@mui/material/Button";

ChartJS.register(ArcElement, Tooltip, Legend);
const theme = createTheme();

const email = localStorage.getItem("email");
const status = sessionStorage.getItem("status_weight");

export default function Output() {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  //   if(status = 'Ai'){
  //     console.log("Ai");
  //   }
  // handleSubmit = ();
  function handleSubmit() {
    axios
      .post("http://localhost:8888/getEigenResultOutputUnraw", {
        email,
        status,
      })
      .then((res) => {
        let data_re = [];
        let { status, result } = res.data;
        result.forEach((element) => {
          data_re.push(element);
        });
        // console.log(data_re[0].Result1);
        sessionStorage.setItem("result1", data_re[0].Result1 * 100);
        sessionStorage.setItem("result2", data_re[0].Result2 * 100);
        sessionStorage.setItem("result3", data_re[0].Result3 * 100);
        sessionStorage.setItem("result4", data_re[0].Result4 * 100);
        sessionStorage.setItem("result5", data_re[0].Result5 * 100);
        sessionStorage.setItem("result6", data_re[0].Result6 * 100);
        sessionStorage.setItem("result7", data_re[0].Result7 * 100);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("handle !!!!");
  }
  function handleSubmit_AI() {
    axios
      .post("http://localhost:8888/getEigenResult_predict", {
        email,
        status,
      })
      .then((res) => {
        let data_re = [];
        let { status, result } = res.data;
        result.forEach((element) => {
          data_re.push(element);
        });
        let result_sum_1 = data_re[5].w_eigen * data_re[10].w_eigen;
        let result_sum_2 = data_re[5].w_eigen * data_re[11].w_eigen;
        let result_sum_3 = data_re[5].w_eigen * data_re[12].w_eigen;

        let result_sum_4 = data_re[6].w_eigen * data_re[13].w_eigen;
        let result_sum_5 = data_re[6].w_eigen * data_re[14].w_eigen;
        let result_sum_6 = data_re[6].w_eigen * data_re[15].w_eigen;
        let result_sum_7 = data_re[6].w_eigen * data_re[16].w_eigen;

        let result_sum_8 = data_re[7].w_eigen * data_re[19].w_eigen;
        let result_sum_9 = data_re[7].w_eigen * data_re[20].w_eigen;
        let result_sum_10 = data_re[7].w_eigen * data_re[21].w_eigen;
        let result_sum_11 = data_re[7].w_eigen * data_re[22].w_eigen;

        let result_sum_12 = data_re[8].w_eigen * data_re[25].w_eigen;
        let result_sum_13 = data_re[8].w_eigen * data_re[26].w_eigen;
        let result_sum_14 = data_re[8].w_eigen * data_re[27].w_eigen;

        let result_sum_15 = data_re[9].w_eigen * data_re[28].w_eigen;
        let result_sum_16 = data_re[9].w_eigen * data_re[29].w_eigen;
        let result_sum_17 = data_re[9].w_eigen * data_re[30].w_eigen;

        // console.log(data_re[9].w_eigen, data_re[22].w_eigen);
        // console.log("sum_col_1", result_sum_1);
        // console.log("sum_col_2", result_sum_2);
        // console.log("sum_col_3", result_sum_3);
        // console.log("sum_col_4", result_sum_4);
        // console.log("sum_col_5", result_sum_5);
        // console.log("sum_col_6", result_sum_6);
        // console.log("sum_col_7", result_sum_7);
        // console.log("sum_col_8", result_sum_8);
        // console.log("sum_col_9", result_sum_9);
        // console.log("sum_col_10", result_sum_10);
        // console.log("sum_col_11", result_sum_11);
        // console.log("sum_col_12 ", result_sum_12);
        // console.log("sum_col_13 ", result_sum_13);
        // console.log("sum_col_14 ", result_sum_14);
        // console.log("sum_col_15 ", result_sum_15);
        // console.log("sum_col_16 ", result_sum_16);
        // console.log("sum_col_17 ", result_sum_17);

        sessionStorage.setItem("result_Ai_1", result_sum_1);
        sessionStorage.setItem("result_Ai_2", result_sum_2);
        sessionStorage.setItem("result_Ai_3", result_sum_3);
        sessionStorage.setItem("result_Ai_4", result_sum_4);
        sessionStorage.setItem("result_Ai_5", result_sum_5);
        sessionStorage.setItem("result_Ai_6", result_sum_6);
        sessionStorage.setItem("result_Ai_7", result_sum_7);
        sessionStorage.setItem("result_Ai_8", result_sum_8);
        sessionStorage.setItem("result_Ai_9", result_sum_9);
        sessionStorage.setItem("result_Ai_10", result_sum_10);
        sessionStorage.setItem("result_Ai_11", result_sum_11);
        sessionStorage.setItem("result_Ai_12", result_sum_12);
        sessionStorage.setItem("result_Ai_13", result_sum_13);
        sessionStorage.setItem("result_Ai_14", result_sum_14);
        sessionStorage.setItem("result_Ai_15", result_sum_15);
        sessionStorage.setItem("result_Ai_16", result_sum_16);
        sessionStorage.setItem("result_Ai_17", result_sum_17);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("handle !!!!");
  }
  async function sendResultsToAPI() {
    let resultSums = [];
    for (let i = 1; i <= 17; i++) {
      let resultSum = sessionStorage.getItem(`result_Ai_${i}`);
      resultSums.push(resultSum);
    }

    let resultWeights = [];
    for (let i = 0; i < resultSums.length; i++) {
      let response = await axios.post("http://127.0.0.1:8000/predictUnraw", {
        weight: resultSums[i],
      });
      resultWeights.push(response.data.result);
    }

    for (let i = 0; i < resultWeights.length; i++) {
      sessionStorage.setItem(`result_weight_${i + 1}`, resultWeights[i]);
    }
  }
  let count_u1 = 0;
  let count_u2 = 0;
  let count_u3 = 0;
  let count_u4 = 0;
  let count_u5 = 0;
  let count_u6 = 0;
  let count_u7 = 0;

  async function countResults() {
    await sendResultsToAPI();

    for (let i = 0; i < 17; i++) {
      let result = sessionStorage.getItem(`result_weight_${i + 1}`);
      if (result === "U1") {
        count_u1++;
      } else if (result === "U2") {
        count_u2++;
      } else if (result === "U3") {
        count_u3++;
      } else if (result === "U4") {
        count_u4++;
      } else if (result === "U5") {
        count_u5++;
      } else if (result === "U6") {
        count_u6++;
      } else if (result === "U7") {
        count_u7++;
      }
    }

    let banana_id_Ai = 0;
    console.log(`U1 count: ${count_u1}`);
    console.log(`U2 count: ${count_u2}`);
    console.log(`U3 count: ${count_u3}`);
    console.log(`U4 count: ${count_u4}`);
    console.log(`U5 count: ${count_u5}`);
    console.log(`U6 count: ${count_u6}`);
    console.log(`U7 count: ${count_u7}`);

    if (
      count_u1 >= count_u2 &&
      count_u1 >= count_u3 &&
      count_u1 >= count_u4 &&
      count_u1 >= count_u5 &&
      count_u1 >= count_u6 &&
      count_u1 >= count_u7
    ) {
      banana_id = 1;
    } else if (
      count_u2 >= count_u1 &&
      count_u2 >= count_u3 &&
      count_u2 >= count_u4 &&
      count_u2 >= count_u5 &&
      count_u2 >= count_u6 &&
      count_u2 >= count_u7
    ) {
      banana_id = 2;
    } else if (
      count_u3 >= count_u1 &&
      count_u3 >= count_u2 &&
      count_u3 >= count_u4 &&
      count_u3 >= count_u5 &&
      count_u3 >= count_u6 &&
      count_u3 >= count_u7
    ) {
      banana_id = 3;
    } else if (
      count_u4 >= count_u1 &&
      count_u4 >= count_u2 &&
      count_u4 >= count_u3 &&
      count_u4 >= count_u5 &&
      count_u4 >= count_u6 &&
      count_u4 >= count_u7
    ) {
      banana_id = 4;
    } else if (
      count_u5 >= count_u1 &&
      count_u5 >= count_u2 &&
      count_u5 >= count_u3 &&
      count_u5 >= count_u4 &&
      count_u5 >= count_u6 &&
      count_u5 >= count_u7
    ) {
      banana_id = 5;
    } else if (
      count_u6 >= count_u1 &&
      count_u6 >= count_u2 &&
      count_u6 >= count_u3 &&
      count_u6 >= count_u4 &&
      count_u6 >= count_u5 &&
      count_u6 >= count_u7
    ) {
      banana_id = 6;
    } else {
      banana_id = 7;
    }

    let result_per1;
    let result_per2;
    let result_per3;
    let result_per4;
    let result_per5;
    let result_per6;
    let result_per7;

    if (count_u1 > 0) {
      result_per1 = (count_u1 / 17) * 100;
    } else {
      result_per1 = 0;
    }
    if (count_u2 > 0) {
      result_per2 = (count_u2 / 17) * 100;
    } else {
      result_per2 = 0;
    }
    if (count_u3 > 0) {
      result_per3 = (count_u3 / 17) * 100;
    } else {
      result_per3 = 0;
    }
    if (count_u4 > 0) {
      result_per4 = (count_u4 / 17) * 100;
    } else {
      result_per4 = 0;
    }
    if (count_u5 > 0) {
      result_per5 = (count_u5 / 17) * 100;
    } else {
      result_per5 = 0;
    }
    if (count_u6 > 0) {
      result_per6 = (count_u6 / 17) * 100;
    } else {
      result_per6 = 0;
    }
    if (count_u7 > 0) {
      result_per7 = (count_u7 / 17) * 100;
    } else {
      result_per7 = 0;
    }

    sessionStorage.setItem("result1", result_per1);
    sessionStorage.setItem("result2", result_per2);
    sessionStorage.setItem("result3", result_per3);
    sessionStorage.setItem("result4", result_per4);
    sessionStorage.setItem("result5", result_per5);
    sessionStorage.setItem("result6", result_per6);
    sessionStorage.setItem("result7", result_per7);
    // console.log(`banana_id_Ai :${banana_id_Ai}`);
  }
  if (status === "unrawAI") {
    console.log("Ai algor");
    sendResultsToAPI();
    handleSubmit_AI();
    countResults();
  } else if (status === "unraw") {
    console.log("AHP algor");
    handleSubmit();
  } else {
    alert("Fail Login agin!");
    window.location = "/login";
  }

  const Result1 = parseFloat(sessionStorage.getItem("result1"));
  const Result2 = parseFloat(sessionStorage.getItem("result2"));
  const Result3 = parseFloat(sessionStorage.getItem("result3"));
  const Result4 = parseFloat(sessionStorage.getItem("result4"));
  const Result5 = parseFloat(sessionStorage.getItem("result5"));
  const Result6 = parseFloat(sessionStorage.getItem("result6"));
  const Result7 = parseFloat(sessionStorage.getItem("result7"));

  let banana_id = 0;
  let Result1_cal = Result1;
  let Result2_cal = Result2;
  let Result3_cal = Result3;
  let Result4_cal = Result4;
  let Result5_cal = Result5;
  let Result6_cal = Result6;
  let Result7_cal = Result7;

  const maxResult = Math.max(
    Result1_cal,
    Result2_cal,
    Result3_cal,
    Result4_cal,
    Result5_cal,
    Result6_cal,
    Result7_cal
  );
  console.log(maxResult);

  if (
    Result1 >= Result2 &&
    Result1 >= Result3 &&
    Result1 >= Result4 &&
    Result1 >= Result5 &&
    Result1 >= Result6 &&
    Result1 >= Result7
  ) {
    banana_id = 1;
  } else if (
    Result2 >= Result1 &&
    Result2 >= Result3 &&
    Result2 >= Result4 &&
    Result2 >= Result5 &&
    Result2 >= Result6 &&
    Result2 >= Result7
  ) {
    banana_id = 2;
  } else if (
    Result3 >= Result1 &&
    Result3 >= Result2 &&
    Result3 >= Result4 &&
    Result3 >= Result5 &&
    Result3 >= Result6 &&
    Result3 >= Result7
  ) {
    banana_id = 3;
  } else if (
    Result4 >= Result1 &&
    Result4 >= Result2 &&
    Result4 >= Result3 &&
    Result4 >= Result5 &&
    Result4 >= Result6 &&
    Result4 >= Result7
  ) {
    banana_id = 4;
  } else if (
    Result5 >= Result1 &&
    Result5 >= Result2 &&
    Result5 >= Result3 &&
    Result5 >= Result4 &&
    Result5 >= Result6 &&
    Result5 >= Result7
  ) {
    banana_id = 5;
  } else if (
    Result6 >= Result1 &&
    Result6 >= Result2 &&
    Result6 >= Result3 &&
    Result6 >= Result4 &&
    Result6 >= Result5 &&
    Result6 >= Result7
  ) {
    banana_id = 6;
  } else {
    banana_id = 7;
  }

  console.log(banana_id);

  const banana = [
    "กล้วยตาก",
    "กล้วยกวน",
    "ทอฟฟี่กล้วย",
    "ข้าวเกรียบกล้วย",
    "น้ำกล้วย",
    "เครื่องดื่มแอลกอฮอร์",
    "เค้กกล้วย",
  ];
  const result_banana = banana[banana_id - 1]; // get the corresponding result

  axios
    .post("http://localhost:8888/updateResult_Banana_Unraw", {
      email: email, // add the email parameter
      result_banana: result_banana, // send the corresponding result
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  const data = {
    labels: [
      "กล้วยตาก",
      "กล้วยกวน",
      "ทอฟฟี่กล้วย",
      "ข้าวเกรียบกล้วย",
      "น้ำกล้วย",
      "เครื่องดื่มแอลกอฮอร์",
      "เค้กกล้วย",
    ], // ใส่ nameProduct
    datasets: [
      {
        label: "# of Votes",
        data: [
          Result1_cal,
          Result2_cal,
          Result3_cal,
          Result4_cal,
          Result5_cal,
          Result6_cal,
          Result7_cal,
        ], //ใส่ weight
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(25, 99, 132, 1)",
          "rgba(524, 162, 235, 1)",
          "rgba(155, 206, 86, 1)",
          "rgba(155, 26, 86, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(25, 99, 132, 1)",
          "rgba(524, 162, 235, 1)",
          "rgba(155, 206, 86, 1)",
          "rgba(155, 26, 86, 1)",
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
        <Grid container spacing={1} justifyContent="center"></Grid>
        <Container maxWidth="auto">
          <Grid container spacing={6} justifyContent="center">
            {banana_id === 1 && (
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
                    image="./images/unraw_banana_1.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      กล้วยตาก
                    </Typography>
                    <Typography>
                      จากการตอบแบบสอบถามผลิตภัณฑ์ชิ้นนี้มีความเป็นไปได้ที่จะนำไปผลิต
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
            {banana_id === 2 && (
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
                    image="./images/unraw_banana_2.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      กล้วยกวน
                    </Typography>
                    <Typography>
                      จากการตอบแบบสอบถามผลิตภัณฑ์ชิ้นนี้มีความเป็นไปได้ที่จะนำไปผลิต
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
            {banana_id === 3 && (
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
                    image="./images/unraw_banana_3.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      ทอฟฟี่กล้วย
                    </Typography>
                    <Typography>
                      จากการตอบแบบสอบถามผลิตภัณฑ์ชิ้นนี้มีความเป็นไปได้ที่จะนำไปผลิต
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
            {banana_id === 4 && (
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
                    image="./images/unraw_banana_4.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      ข้าวเกรียบกล้วย
                    </Typography>
                    <Typography>
                      จากการตอบแบบสอบถามผลิตภัณฑ์ชิ้นนี้มีความเป็นไปได้ที่จะนำไปผลิต
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
            {banana_id === 5 && (
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
                    image="./images/unraw_banana_5.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      น้ำกล้วย
                    </Typography>
                    <Typography>
                      จากการตอบแบบสอบถามผลิตภัณฑ์ชิ้นนี้มีความเป็นไปได้ที่จะนำไปผลิต
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
            {banana_id === 6 && (
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
                    image="./images/unraw_banana_6.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      เครื่องดื่มแอลกอฮอร์
                    </Typography>
                    <Typography>
                      จากการตอบแบบสอบถามผลิตภัณฑ์ชิ้นนี้มีความเป็นไปได้ที่จะนำไปผลิต
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
            {banana_id === 7 && (
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
                    image="./images/unraw_banana_7.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      เค้กกล้วย
                    </Typography>
                    <Typography>
                      จากการตอบแบบสอบถามผลิตภัณฑ์ชิ้นนี้มีความเป็นไปได้ที่จะนำไปผลิต
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}

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
