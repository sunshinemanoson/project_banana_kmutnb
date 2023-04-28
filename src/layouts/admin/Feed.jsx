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

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Feed() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
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
                      จำนวนการผลิต
                    </Typography>
                  </CardContent>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                  >
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
                      30
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
                      30
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
                      30
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
                      30
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
