import React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Layout from "../layouts/Layout";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const cards = [1];
const cards2 = [1];

const theme = createTheme();

export default function Dashboard() {
	// useEffect(() => {
	// 	var token = localStorage.getItem('token')
	// 	fetch("http://localhost:8888/authen", {
	// 		method: "POST", // or 'PUT'
	// 		headers: {
	// 		  	'Content-Type': 'application/json',
	// 			'Authorization': 'Bearer '+token
	// 		},
	// 	  })
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 		  if(data.status === 'ok_200'){
	// 			// alert('auten Succeesed.')
	// 		  }else{
	// 			// alert('auten Failed.')
	// 			localStorage.removeItem('token')
	// 			window.location = '/login'
	// 		  }
	// 		  console.log("Success:", data);
	// 		})
	// 		.catch((error) => {
	// 		  console.error("Error:", error);
	// 		});
	// },[])
	


  return (
	<ThemeProvider theme={theme}>
    <Layout />
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            โปรดเลือกประเภทวัตถุดิบ
          </Typography>
        </Toolbar>
      </AppBar>
      <main> 
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 3,
            pb: 3,
          }}
        >
        </Box>
        <Container>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://img-ha.mthcdn.com/cJEeO89zSECfgHwPvmOVdYv0F0U=/health.mthai.com/app/uploads/2019/01/banana.jpg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      กล้วยดิบ
                    </Typography>
                    <Typography>
						กล้วยดิบ สามารถนำมาแปลรูปได้ 3 ทางเลือก ได้แก่ กล้วยฉาบ กล้วยอบเนย กล้วยเบรคแตก
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  variant="contained" color="success" size="large" href='Add_wideth_Raw'>เลือก</Button>
                  </CardActions>
                </Card>
				
              </Grid>
            ))}
			{cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://img.freepik.com/free-photo/top-view-tasty-breakfast-with-organic-fruits_23-2148531814.jpg?size=626&ext=jpg&ga=GA1.2.1275789563.1666711775&semt=sph"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      กล้วยวสุก
                    </Typography>
                    <Typography>
						กล้วยวสุก สามารถนำมาแปลรูปได้ 7 ทางเลือก ได้แก่ กล้วยตาก กล้วยกวน ทอฟฟี่กล้วย นํ้ากล้วย เครี่องดื่มแอลกอฮอร์ ผลิตภัณฑ์อื่นๆ
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  variant="contained" color="warning" size="large" href='Add_wideth_Unraw'>เลือก</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         
        </Typography>
    
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
  
}
