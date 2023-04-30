import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Navbars from "../../components/admin/Navbars";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Accordion from "@mui/material/Accordion";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { waitFor } from "@testing-library/react";
import axios from "axios";
import { useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Feed() {
  useEffect(() => {
    axios
      .get("http://localhost:8888/getfeed_info")
      .then((res) => {
        let data_re = [];
        let { status, result } = res.data;
        result.forEach((element) => {
          data_re.push(element);
        });
        sessionStorage.setItem("count_user", data_re[0].total_user);
        sessionStorage.setItem("count_amount", data_re[0].total_amount);
        sessionStorage.setItem("count_labor", data_re[0].total_numWorkers);
        sessionStorage.setItem("count_company", data_re[0].total_company);

        sessionStorage.setItem("count_u1", data_re[0].count_u1);
        sessionStorage.setItem("count_u2", data_re[0].count_u2);
        sessionStorage.setItem("count_u3", data_re[0].count_u3);
        sessionStorage.setItem("count_u4", data_re[0].count_u4);
        sessionStorage.setItem("count_u5", data_re[0].count_u5);
        sessionStorage.setItem("count_u6", data_re[0].count_u6);
        sessionStorage.setItem("count_u7", data_re[0].count_u7);
        sessionStorage.setItem("count_u8", data_re[0].count_u8);
        sessionStorage.setItem("count_u9", data_re[0].count_u9);
        sessionStorage.setItem("count_u10", data_re[0].count_u10);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = {
    labels: [
      "กล้วยฉาบ",
      "กล้วยอบเนย",
      "กล้วยเบรคแตก",
      "กล้วยตาก",
      "กล้วยกวน",
      "ทอฟฟี่กล้วย",
      "ข้าวเกรียบกล้วย",
      "น้ำกล้วย",
      "เครื่องดื่มแอลกอฮอร์",
      "เค้กกล้วย",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          sessionStorage.getItem("count_u1"),
          sessionStorage.getItem("count_u2"),
          sessionStorage.getItem("count_u3"),
          sessionStorage.getItem("count_u4"),
          sessionStorage.getItem("count_u5"),
          sessionStorage.getItem("count_u6"),
          sessionStorage.getItem("count_u7"),
          sessionStorage.getItem("count_u8"),
          sessionStorage.getItem("count_u9"),
          sessionStorage.getItem("count_u10"),
        ],
        backgroundColor: [
          "rgb(155, 99, 1, 1)",
          "rgb(54, 162, 235)",
          "rgb(255, 05, 186)",
          "rgba(155, 26, 86, 1)",
          "rgba(50, 18, 259, 10)",
          "rgba(255, 206, 86, 1)",
          "rgba(25, 99, 132, 1)",
          "rgba(524, 162, 235, 1)",
          "rgba(155, 206, 86, 1)",
          "rgba(255, 99, 1, 1)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <Navbars />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} alignItems="center">
              <Stack spacing={4} direction="row">
                <Card sx={{ minWidth: 100 + "%", height: 500 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      จำนวนการผลลัพธ์ของกล้วย
                    </Typography>
                  </CardContent>
                  <Grid container direction="column" alignItems="center">
                    <Grid>
                      <Pie data={data} />
                    </Grid>
                  </Grid>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={4} direction="row">
                <Card sx={{ minWidth: 48 + "%", height: 230 }}>
                  <CardContent>
                    <AccountBoxIcon sx={{ fontSize: 50 }} />
                    <Typography gutterBottom variant="h6" component="div">
                      จำนวนสมาชิก
                    </Typography>
                    <Typography variant="h3" color="text.secondary">
                    {sessionStorage.getItem("count_user")} คน
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 48 + "%", height: 230 }}>
                  <CardContent>
                    <AddShoppingCartRoundedIcon sx={{ fontSize: 50 }} />
                    <Typography gutterBottom variant="h6" component="div">
                      ยอดขายทั้งหมด
                    </Typography>
                    <Typography variant="h3" color="text.secondary">
                    {sessionStorage.getItem("count_amount")} บาท
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
              <Stack spacing={4} mt={5} direction="row">
                <Card sx={{ minWidth: 48 + "%", height: 230 }}>
                  <CardContent>
                    <LocalShippingIcon sx={{ fontSize: 50 }} />
                    <Typography gutterBottom variant="h6" component="div">
                      กำลังการผลิต
                    </Typography>
                    <Typography variant="h3" color="text.secondary">
                    {sessionStorage.getItem("count_labor")} คน
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 48 + "%", height: 230 }}>
                  <CardContent>
                    <BusinessCenterIcon sx={{ fontSize: 50 }} />
                    <Typography gutterBottom variant="h6" component="div">
                      ธุรกิจในระบบ
                    </Typography>
                    <Typography variant="h3" color="text.secondary">
                    {sessionStorage.getItem("count_company")} บริษัท
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
