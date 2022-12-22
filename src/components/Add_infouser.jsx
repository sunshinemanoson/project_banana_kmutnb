import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { InputAdornment, Paper } from '@mui/material';
import { margin } from '@mui/system';

const cards = [1];
const cards2 = [1];
const cards3 = [1];
const cards4 = [1];

const theme = createTheme();
const options = [ 'นาย', 'นาง', 'นางสาว', 'ไม่ระบุ'];
const options2 = [ 'ระดับประถมศึกษา', 'ระดับมัธยมต้น', 'ระดับมัธยมปลาย หรือ ปวช.', 'ระดับ ปวส.', 'ระดับปริญญาตรี', 'สูงกว่าปริญญาตรี'];
const options3 = ['กล้วยฉาบ','กล้วยอบเนย','กล้วยเบรคแตก'];
const options4 = ['กล้วยตาก','กล้วยกวน','ทอฟฟี่กล้วย','ข้าวเกรียบกล้วย','นํ้ากล้วย','เครื่องดื่มแอลกอฮอร์','ผลิตภัณฑ์อื่น ๆ'];
const options5 = ['ดีมาก','ดี','ปานกลาง','ไม่ค่อยดี'];
const options6 = ['ส่งออก','กำลังริเริ่ม','ไม่ได้ส่งออก'];


export default function Infouser() {

    // อันนี้ของเลือกคำนำหน้า
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    // อันนี้ของระดับการศึกษา
    const [value2, setValue2] = React.useState(options2[0]);
    const [inputValue2, setInputValue2] = React.useState('');
    // อันนี้ของชื่อ
    const [nValue, setNValue] = React.useState('');
    // อันนี้ของนามสกุล
    const [lValue, setLValue] = React.useState('');
    // อันนี้ของอายุ
    const [ageValue, setAGEValue] = React.useState('');



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       return (
        //<div className=' bg-[#E1F17C] h-[100rem] w-full'>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        กรอกข้อมูลผู้ใช้
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 3,
                        pb: 3,
                    }}
                >
                </Box>
                <Container maxWidth="auto">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin: 3 }}>
                                    <CardContent sx={{ flexGrow: 2 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            กรอกข้อมูลผู้ใช้
                                        </Typography>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <Autocomplete
                                                className='w-[28rem] md:w-full sm:w-full'
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                                inputValue={inputValue}
                                                onInputChange={(event, newInputValue) => {
                                                    setInputValue(newInputValue);
                                                }}
                                                id="controllable-states-demo"
                                                options={options}

                                                renderInput={(params) => <TextField {...params} label="คำนำหน้า" />}
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                onChange={(event) => setNValue(event.target.value)}
                                                id="outlined1"
                                                label="ชื่อ"
                                                className='w-[28rem] md:w-full sm:w-full'
                                                variant="outlined"
                                                value={nValue}
                                            />

                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                onChange={(event) => setLValue(event.target.value)}
                                                id="outlined2"
                                                label="นามสกุล"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                                value={lValue}
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                value={ageValue}
                                                onChange={(event) => setAGEValue(event.target.value)}
                                                id="age"
                                                label="อายุ"
                                                InputProps={{
                                                    endAdornment: <InputAdornment position='end'>/ ปี</InputAdornment>,
                                                }}
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <Autocomplete
                                                className='w-[28rem] md:w-full sm:w-full'
                                                value={value2}
                                                onChange={(event, newValue) => {
                                                    setValue2(newValue);
                                                }}
                                                inputValue={inputValue2}
                                                onInputChange={(event, newInputValue2) => {
                                                    setInputValue2(newInputValue2);
                                                }}
                                                id="controllable-states-demo2"
                                                options={options2}

                                                renderInput={(params) => <TextField {...params} label="ระดับการศึกษา" />}
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="ex"
                                                label="ประสบการณ์ในการแปรรูป"
                                                InputProps={{
                                                    endAdornment: <InputAdornment position='end'>/ ปี</InputAdornment>,
                                                }}
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                        {cards2.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin: 3 }}>
                                    <CardContent sx={{ flexGrow: 2 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            ข้อมูลเกี่ยวกับสถานประกอบการ
                                        </Typography>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="busname"
                                                label="ชื่อกิจการ"
                                                className='w-[28rem] md:w-full sm:w-full'
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address"
                                                label="ที่อยู่ของสถานประกอบการ"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address2"
                                                label="ตำบล / แขวง"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                            <TextField
                                                id="address3"
                                                label="อำเภอ / เขต"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address4"
                                                label="จังหวัด"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address5"
                                                label="รหัสไปรษณีย์"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address6"
                                                label="ปี พ.ศ.ที่เริ่มการธุรกิจ"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                        {cards3.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin: 3 }}>
                                    <CardContent sx={{ flexGrow: 2 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            ผลิตภัณฑ์หลักที่เกี่ยวกับการแปรรูปจากกล้วยน้ำว้า
                                        </Typography>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <Autocomplete
                                                className='w-[28rem] md:w-full sm:w-full'
                                                // value={value}
                                                // onChange={(event, newValue) => {
                                                //     setValue(newValue);
                                                // }}
                                                // inputValue={inputValue}
                                                // onInputChange={(event, newInputValue) => {
                                                //     setInputValue(newInputValue);
                                                // }}
                                                id="controllable-states-demo"
                                                options={options3}

                                                renderInput={(params) => <TextField {...params} label="การแปรรูปกล้วยดิบ" />}
                                            />
                                            <Autocomplete
                                                className='w-[28rem] md:w-full sm:w-full'
                                                // value={value}
                                                // onChange={(event, newValue) => {
                                                //     setValue(newValue);
                                                // }}
                                                // inputValue={inputValue}
                                                // onInputChange={(event, newInputValue) => {
                                                //     setInputValue(newInputValue);
                                                // }}
                                                id="controllable-states-demo"
                                                options={options4}

                                                renderInput={(params) => <TextField {...params} label="การแปรรูปกล้วยสุก" />}
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <Typography gutterBottom variant="h5" component="h2" className='mt-4'>
                                                ด้านวัตถุดิบ
                                            </Typography>
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address2"
                                                label="กล้วยมาจากแหล่งใด"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <Autocomplete
                                                className='w-[28rem] md:w-full sm:w-full'
                                                // value={value}
                                                // onChange={(event, newValue) => {
                                                //     setValue(newValue);
                                                // }}
                                                // inputValue={inputValue}
                                                // onInputChange={(event, newInputValue) => {
                                                //     setInputValue(newInputValue);
                                                // }}
                                                id="controllable-states-demo"
                                                options={options5}

                                                renderInput={(params) => <TextField {...params} label="คุณภาพของกล้วย" />}
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address2"
                                                label="ปริมาณของกล้วย"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <Typography gutterBottom variant="h5" component="h2" className='mt-4'>
                                                กำลังการผลิต
                                            </Typography>
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address2"
                                                label="กำลังการผลิต / ครั้ง"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address2"
                                                label="จำนวนแรงงานในสถานประกอบการ"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address2"
                                                label="ค่าจ้างแรงงาน"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                                InputProps={{
                                                    endAdornment: <InputAdornment position='end'>/ ต่อวัน</InputAdornment>,
                                                }}
                                            />
                                            <TextField
                                                id="address2"
                                                label="ค่าจ้างแรงงาน"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                                InputProps={{
                                                    endAdornment: <InputAdornment position='end'>/ เดือน</InputAdornment>,
                                                }}
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address2"
                                                label="เครื่องมือและอุปกรณ์หลักที่ใช้ในการแปรรูป"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                        {cards4.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin: 3 }}>
                                    <CardContent sx={{ flexGrow: 2 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            ช่องทางการตลาด
                                        </Typography>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="busname"
                                                label="ส่งขายช่องทางไหนบ้าง"
                                                className='w-[28rem] md:w-full sm:w-full'
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <Autocomplete
                                                className='w-[28rem] md:w-full sm:w-full'
                                                // value={value}
                                                // onChange={(event, newValue) => {
                                                //     setValue(newValue);
                                                // }}
                                                // inputValue={inputValue}
                                                // onInputChange={(event, newInputValue) => {
                                                //     setInputValue(newInputValue);
                                                // }}
                                                id="controllable-states-demo"
                                                options={options6}

                                                renderInput={(params) => <TextField {...params} label="ส่งออกในประเทศและต่างประเทศไหม" />}
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <Autocomplete
                                                className='w-[28rem] md:w-full sm:w-full'
                                                // value={value}
                                                // onChange={(event, newValue) => {
                                                //     setValue(newValue);
                                                // }}
                                                // inputValue={inputValue}
                                                // onInputChange={(event, newInputValue) => {
                                                //     setInputValue(newInputValue);
                                                // }}
                                                id="controllable-states-demo"
                                                options={options5}

                                                renderInput={(params) => <TextField {...params} label="สัดส่วนทางการตลาด/ขายดีไหม" />}
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address2"
                                                label="สินค้าที่ขายดีที่สุดคือ"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                            <TextField
                                                id="address3"
                                                label="กำไรต่อหน่วย"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                            <TextField
                                                id="address3"
                                                label="ต้นทุน"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                การเก็บรักษา
                                            </Typography>
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address5"
                                                label="การเก็บรักษาวัตถุดิบ"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address6"
                                                label="การเก็บรักษาตัวผลิตภัณฑ์"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <TextField
                                                id="address6"
                                                label="พื้นที่จัดเก็บ"
                                                variant="outlined"
                                                className='w-[28rem] md:w-full sm:w-full'
                                            />
                                        </Grid>
                                        <Grid className='flex space-x-5 mt-4'>
                                            <Autocomplete
                                                className='w-[28rem] md:w-full sm:w-full'
                                                // value={value}
                                                // onChange={(event, newValue) => {
                                                //     setValue(newValue);
                                                // }}
                                                // inputValue={inputValue}
                                                // onInputChange={(event, newInputValue) => {
                                                //     setInputValue(newInputValue);
                                                // }}
                                                id="controllable-states-demo"
                                                options={options5}

                                                renderInput={(params) => <TextField {...params} label="คุณภาพระหว่างการจัดเก็บ" />}
                                            />
                                            <Autocomplete
                                                className='w-[28rem] md:w-full sm:w-full'
                                                // value={value}
                                                // onChange={(event, newValue) => {
                                                //     setValue(newValue);
                                                // }}
                                                // inputValue={inputValue}
                                                // onInputChange={(event, newInputValue) => {
                                                //     setInputValue(newInputValue);
                                                // }}
                                                id="controllable-states-demo"
                                                options={options5}

                                                renderInput={(params) => <TextField {...params} label="คุณภาพระหว่างการขนส่ง" />}
                                            />
                                        </Grid>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <div className='flex space-x-5 mt-10'>
                        <Button variant="contained">Submit</Button>
                    </div>
                </Container>
            </main>

           
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
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
        </ThemeProvider >
        //</div>
    );
}
