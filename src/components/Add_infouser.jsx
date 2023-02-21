import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment, Paper } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


// const cards = [1];
// const cards2 = [1];
// const cards3 = [1];
// const cards4 = [1];

const theme = createTheme();
const options = ["นาย", "นาง", "นางสาว"];
const options2 = [
  "ระดับประถมศึกษา",
  "ระดับมัธยมต้น",
  "ระดับมัธยมปลาย หรือ ปวช.",
  "ระดับ ปวส.",
  "ระดับปริญญาตรี",
  "สูงกว่าปริญญาตรี",
];
const options3 = ["กล้วยฉาบ", "กล้วยอบเนย", "กล้วยเบรคแตก"];
const options4 = [
  "กล้วยตาก",
  "กล้วยกวน",
  "ทอฟฟี่กล้วย",
  "ข้าวเกรียบกล้วย",
  "นํ้ากล้วย",
  "เครื่องดื่มแอลกอฮอร์",
  "ผลิตภัณฑ์อื่น ๆ",
];
const options5 = ["ดีมาก", "ดี", "ปานกลาง", "ไม่ค่อยดี"];
const options6 = ["ส่งออก", "กำลังริเริ่ม", "ไม่ได้ส่งออก"];

// let BE = myFunction(BE);   // Function is called, return value will end up in x

// function myFunction(BE) {
// for (let i = 2400; i < 2600; i++) {
//         const BE = [i];
//         return
// }
//   // Function returns the product of a and b
// }
// let BE = [];

const optionsBE = ["2565"];

const axios = require("axios");

export default function Infouser() {
  //กรอกข้อมูลผู้ใช้
  // อันนี้ของเลือกคำนำหน้า
  const [value, setValue] = useState(options[0]);
  const [nameTile, setInputValuenameTile] = useState("");
  // อันนี้ของระดับการศึกษา
  const [value2, setValue2] = useState(options2[0]);
  const [inputValueEdu, setInputValueEdu] = useState("");
  // อันนี้ของชื่อ
  const [nValue, setNValue] = useState("");
  // อันนี้ของนามสกุล
  const [lValue, setLValue] = useState("");
  // อันนี้ของอายุ
  const [ageValue, setAGEValue] = useState("");
  //
  const [expperyers, setEXPvalue] = useState("");
  // ข้อมูลเกี่ยวกับสถานประกอบการ
  const [comName, setcomName] = useState("");
  const [comAddress, setcomAddress] = useState("");
  const [province, setprovince] = useState("");
  const [district, setdistrict] = useState("");
  const [amphur, setamphur] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [valueyersBegin, setValueyersBegin] = useState(optionsBE[0]);
  const [yersBegin, setyersBegin] = useState("");
  //ด้านวัตถุดิบ
  const [valueproraw, setValueproraw] = useState(options3[0]);
  const [proraw, setproraw] = useState("");
  const [valueproUnraw, setValueproUnraw] = useState(options4[0]);
  const [proUnraw, setproUnraw] = useState("");
  const [source, setsource] = useState("");
  const [valuequlity, setValuequlity] = useState(options5[0]);
  const [qulity, setqulity] = useState("");
  const [amount, setamount] = useState("");
  //กำลังการผลิต
  const [numWorkers, setnumWorkers] = useState("");
  const [proCapPerTime, setproCapPerTime] = useState("");
  const [laborWagePerD, setlaborWagePerD] = useState("");
  const [laborWagePerM, setlaborWagePerM] = useState("");
  const [tools, settools] = useState("");
  //ช่องทางการตลาด
  const [productChanal, setproductChanal] = useState("");
  const [valueproductExport, setValueproductExport] = useState(options6[0]);
  const [productExport, setproductExport] = useState("");
  const [valuemarketShare, setValuemarketShare] = useState(options5[0]);
  const [marketShare, setmarketShare] = useState("");
  const [bestSell, setbestSell] = useState("");
  const [cost, setCost] = useState("");
  const [proFit, setproFit] = useState("");

  //การเก็บรักษา
  const [stoRageR, setstoRageR] = useState("");
  const [stoRagePro, setstoRagePro] = useState("");
  const [storageArea, setstorageArea] = useState("");
  const [valuestorageQuality, setValuestorageQuality] = useState(options5[0]);
  const [storageQuality, setstorageQuality] = useState("");
  const [valuestorageTran, setValuestorageTran] = useState(options5[0]);
  const [storageTran, setstorageTran] = useState("");
  //

  const email = localStorage.getItem("email");
  // const info_user = [
  //   email,
  //   nameTile,
  //   nValue,
  //   lValue,
  //   ageValue,
  //   inputValueEdu,
  //   expperyers,
  // ];

  const handleSubmit_userinfo = () => {
    // console.log("handdlesummited");
    if (
      !value ||
      !nValue ||
      !inputValueEdu ||
      !lValue ||
      !ageValue ||
      !comName ||
      !comAddress ||
      !province ||
      !district ||
      !amphur ||
      !zipcode ||
      !yersBegin ||
      !proraw ||
      !proUnraw ||
      !source ||
      !qulity ||
      !amount ||
      !numWorkers ||
      !proCapPerTime ||
      !laborWagePerD ||
      !laborWagePerM ||
      !tools ||
      !productChanal ||
      !valueproductExport ||
      !productExport ||
      !valuemarketShare ||
      !marketShare ||
      !bestSell ||
      !cost ||
      !proFit ||
      !stoRageR ||
      !stoRagePro ||
      !storageArea ||
      !valuestorageQuality ||
      !storageQuality ||
      !valuestorageTran ||
      !storageTran
    ) {
      console.log(
        nameTile,
        nValue,
        lValue,
        ageValue,
        inputValueEdu,
        expperyers,
        comName,
        comAddress,
        province,
        amphur,
        zipcode,
        yersBegin,
        proraw,
        proUnraw,
        source,
        qulity,
        amount,
        numWorkers,
        proCapPerTime,
        laborWagePerD,
        laborWagePerM,
        tools,
        productChanal,
        valueproductExport,
        productExport,
        valuemarketShare,
        marketShare,
        bestSell,
        cost,
        proFit,
        stoRageR,
        stoRagePro,
        storageArea,
        valuestorageQuality,
        storageQuality,
        valuestorageTran,
        storageTran
      );
      alert("โปรดกรอกข่อมูลให้ครบถ้วน");
    } else if ((ageValue || expperyers) <= 0) {
      alert("ไม่สามารถกรอกข้อมูลเป็นเลขน้อยกว่า 0 ได้");
      // console.log(ageValue,expperyers);
    } else if (localStorage.length === 2) {
      console.log(
        nameTile,
        nValue,
        lValue,
        ageValue,
        inputValueEdu,
        expperyers,
        comName,
        comAddress,
        province,
        amphur,
        zipcode,
        yersBegin,
        proraw,
        proUnraw,
        source,
        qulity,
        amount,
        numWorkers,
        proCapPerTime,
        laborWagePerD,
        laborWagePerM,
        tools,
        productChanal,
        valueproductExport,
        productExport,
        valuemarketShare,
        marketShare,
        bestSell,
        cost,
        proFit,
        stoRageR,
        stoRagePro,
        storageArea,
        valuestorageQuality,
        storageQuality,
        valuestorageTran,
        storageTran
      );
      //   console.log(ageValue,expperyers < 0);
      let data_ar_info = [];
      //   for (let i = 0, len = info_user.length; i < len; i++) {
      const info_data = {
        email: email,
        nameTile: nameTile,
        nValue: nValue,
        lValue: lValue,
        ageValue: ageValue,
        inputValueEdu: inputValueEdu,
        expperyers: expperyers,
        comname: comName,
        comaddress: comAddress,
        province: province,
        district: district,
        amphur: amphur,
        zipcode: zipcode,
        yersbegin: yersBegin,
        proraw: proraw,
        proUnraw: proUnraw,
        source: source,
        qulity: qulity,
        amount: amount,
        numWorkers: numWorkers,
        proCapPerTime: proCapPerTime,
        laborWagePerD: laborWagePerD,
        laborWagePerM: laborWagePerM,
        tools: tools,
        productChanal: productChanal,
        valueproductExport: valueproductExport,
        productExport: productExport,
        valuemarketShare: valuemarketShare,
        marketShare: marketShare,
        bestSell: bestSell,
        cost: cost,
        proFit: proFit,
        stoRageR: stoRageR,
        stoRagePro: stoRagePro,
        storageArea: storageArea,
        valuestorageQuality: valuestorageQuality,
        storageQuality: storageQuality,
        valuestorageTran: valuestorageTran,
        storageTran: storageTran,
      };
      data_ar_info.push(info_data);
      // }
      // window.location = "/Add_wideth_Raw_2";
      // console.log(localStorage.getItem("token").length)
      axios
        .post("http://localhost:8888/add_userinfo", {
          data_ar_info,
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
            bgcolor: "background.paper",
            pt: 3,
            pb: 3,
          }}
        ></Box>
        <Container maxWidth="auto">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} pd={12}>
              <Accordion
              //   expanded={expanded === "panel1"}
              //   onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    กรอกข้อมูลผู้ใช้
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    ได้โปรดกรอกข้อมูลของท่าน
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid className="flex space-x-5 mt-4">
                    <Autocomplete
                      className="w-[28rem] md:w-full sm:w-full"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={nameTile}
                      onInputChange={(event, newInputValuenameTile) => {
                        setInputValuenameTile(newInputValuenameTile);
                      }}
                      id="controllable-states-demo"
                      options={options}
                      renderInput={(params) => (
                        <TextField {...params} label="คำนำหน้า" required />
                      )}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      onChange={(event) => setNValue(event.target.value)}
                      id="outlined1"
                      label="ชื่อ"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={nValue}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      onChange={(event) => setLValue(event.target.value)}
                      id="outlined2"
                      label="นามสกุล"
                      variant="outlined"
                      className="w-[28rem] md:w-full sm:w-full"
                      value={lValue}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      type="number"
                      min={0}
                      value={ageValue}
                      onChange={(event) => setAGEValue(event.target.value)}
                      id="age"
                      label="อายุ"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">/ ปี</InputAdornment>
                        ),
                        inputProps: { min: 1 },
                      }}
                      variant="outlined"
                      className="w-[28rem] md:w-full sm:w-full"
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <Autocomplete
                      className="w-[28rem] md:w-full sm:w-full"
                      value={value2}
                      onChange={(event, newValue) => {
                        setValue2(newValue);
                      }}
                      inputValue={inputValueEdu}
                      onInputChange={(event, newInputValueEdu) => {
                        setInputValueEdu(newInputValueEdu);
                      }}
                      id="controllable-states-demo2"
                      options={options2}
                      renderInput={(params) => (
                        <TextField {...params} label="ระดับการศึกษา" required />
                      )}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      type="number"
                      value={expperyers}
                      onChange={(event) => setEXPvalue(event.target.value)}
                      id="expperyers"
                      label="ประสบการณ์ในการแปรรูป"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">/ ปี</InputAdornment>
                        ),
                        inputProps: { min: 0 },
                      }}
                      variant="outlined"
                      className="w-[28rem] md:w-full sm:w-full"
                    />
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} md={12} pd={12}>
              <Accordion
              //   expanded={expanded === "panel1"}
              //   onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    ข้อมูลเกี่ยวกับสถานประกอบการ
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    ได้โปรดกรอกข้อมูลของท่าน
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      onChange={(event) => setcomName(event.target.value)}
                      id="comname"
                      label="ชื่อกิจการ"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={comName}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      onChange={(event) => setcomAddress(event.target.value)}
                      id="comaddress"
                      label="ที่อยู่ของสถานประกอบการ"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={comAddress}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      onChange={(event) => setprovince(event.target.value)}
                      id="comprovince"
                      label="จังหวัด"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={province}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      onChange={(event) => setdistrict(event.target.value)}
                      id="comdistrict"
                      label="ตำบล / แขวง"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={district}
                    />
                    <TextField
                      required
                      onChange={(event) => setamphur(event.target.value)}
                      id="comamphur"
                      label="อำเภอ / เขต"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={amphur}
                    />
                  </Grid>

                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      type="number"
                      onChange={(event) => setzipcode(event.target.value)}
                      id="comaddress"
                      label="รหัสไปรษณีย์"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={zipcode}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <Autocomplete
                      className="w-[28rem] md:w-full sm:w-full"
                      value={valueyersBegin}
                      onChange={(event, newValue) => {
                        setValueyersBegin(newValue);
                      }}
                      inputValue={yersBegin}
                      onInputChange={(event, newInputyersBegin) => {
                        setyersBegin(newInputyersBegin);
                      }}
                      id="controllable-states-demo2"
                      options={optionsBE}
                      renderInput={(params) => (
                        <TextField
                          type="number"
                          {...params}
                          label="ปี พ.ศ. ที่เริ่มการธุรกิจ"
                          required
                        />
                      )}
                    />
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} md={12} pd={12}>
              <Accordion
              //   expanded={expanded === "panel1"}
              //   onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    ผลิตภัณฑ์หลักที่เกี่ยวกับการแปรรูป
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    ได้โปรดกรอกข้อมูลของท่าน
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid className="flex space-x-5 mt-4">
                    <Autocomplete
                      className="w-[28rem] md:w-full sm:w-full"
                      value={valueproraw}
                      onChange={(event, newValue) => {
                        setValueproraw(newValue);
                      }}
                      inputValue={proraw}
                      onInputChange={(event, newInputsetproraw) => {
                        setproraw(newInputsetproraw);
                      }}
                      id="controllable-states-demo2"
                      options={options3}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="การแปรรูปกล้วยดิบ"
                          required
                        />
                      )}
                    />
                    <Autocomplete
                      className="w-[28rem] md:w-full sm:w-full"
                      value={valueproUnraw}
                      onChange={(event, newValue) => {
                        setValueproUnraw(newValue);
                      }}
                      inputValue={proUnraw}
                      onInputChange={(event, newInputsetproUnraw) => {
                        setproUnraw(newInputsetproUnraw);
                      }}
                      id="controllable-states-demo2"
                      options={options4}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="การแปรรูปกล้วยดิบ"
                          required
                        />
                      )}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <Typography
                      gutterBottom
                      variant="h8"
                      component="h2"
                      className="mt-4"
                    >
                      ด้านวัตถุดิบ
                    </Typography>
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      onChange={(event) => setsource(event.target.value)}
                      id="source"
                      label="กล้วยมาจากแหล่งใด"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={source}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <Autocomplete
                      className="w-[28rem] md:w-full sm:w-full"
                      value={valuequlity}
                      onChange={(event, newValuequlity) => {
                        setValuequlity(newValuequlity);
                      }}
                      inputValue={qulity}
                      onInputChange={(event, newInputsetqulity) => {
                        setqulity(newInputsetqulity);
                      }}
                      id="controllable-states-demo2"
                      options={options5}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="คุณภาพของกล้วย"
                          required
                        />
                      )}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      type="number"
                      onChange={(event) => setamount(event.target.value)}
                      id="amount"
                      label="ปริมาณของกล้วย"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={amount}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <Typography
                      gutterBottom
                      variant="h8"
                      component="h2"
                      className="mt-4"
                    >
                      กำลังการผลิต
                    </Typography>
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      type="number"
                      onChange={(event) => setnumWorkers(event.target.value)}
                      id="numWorkers"
                      label="จำนวนแรงงานในสถานประกอบการ จำนวนคน"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={numWorkers}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      type="number"
                      onChange={(event) => setproCapPerTime(event.target.value)}
                      id="proCapPerTime"
                      label="กำลังการผลิต / ครั้ง"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={proCapPerTime}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      type="number"
                      onChange={(event) => setlaborWagePerD(event.target.value)}
                      id="laborWagePerD"
                      label="ค่าจ้างแรงงาน / วัน"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={laborWagePerD}
                    />
                    <TextField
                      type="number"
                      onChange={(event) => setlaborWagePerM(event.target.value)}
                      id="laborWagePerM"
                      label="ค่าจ้างแรงงาน / เดือน"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={laborWagePerM}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      onChange={(event) => settools(event.target.value)}
                      id="tools"
                      label="เครื่องมือและอุปกรณ์หลักที่ใช้ในการแปรรูป"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={tools}
                    />
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} md={12} pd={12}>
              <Accordion
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    ช่องทางการตลาด
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    ได้โปรดกรอกข้อมูลของท่าน
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      type="number"
                      onChange={(event) => setproductChanal(event.target.value)}
                      id="productChanal"
                      label="ส่งขายช่องทางไหนบ้าง"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={productChanal}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <Autocomplete
                      className="w-[28rem] md:w-full sm:w-full"
                      value={valueproductExport}
                      onChange={(event, newValue) => {
                        setValueproductExport(newValue);
                      }}
                      inputValue={productExport}
                      onInputChange={(event, newInputExport) => {
                        setproductExport(newInputExport);
                      }}
                      id="controllable-states-demo"
                      options={options6}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="ส่งออกในประเทศและต่างประเทศไหม"
                        />
                      )}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <Autocomplete
                      className="w-[28rem] md:w-full sm:w-full"
                      value={valuemarketShare}
                      onChange={(event, newValue) => {
                        setValuemarketShare(newValue);
                      }}
                      inputValue={marketShare}
                      onInputChange={(event, newInputValue) => {
                        setmarketShare(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={options5}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="สัดส่วนทางการตลาด/ขายดีไหม"
                        />
                      )}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      required
                      onChange={(event) => setbestSell(event.target.value)}
                      id="bestSell"
                      label="สินค้าที่ขายดีที่สุดคือ"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={bestSell}
                    />

                    <TextField
                      required
                      type="number"
                      onChange={(event) => setCost(event.target.value)}
                      id="cost"
                      label="ต้นทุน"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={cost}
                    />
                    <TextField
                      required
                      type="number"
                      onChange={(event) => setproFit(event.target.value)}
                      id="proFit"
                      label="กำไรต่อหน่วย"
                      className="w-[28rem] md:w-full sm:w-full"
                      variant="outlined"
                      value={proFit}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <Typography gutterBottom variant="h8" component="h2">
                      การเก็บรักษา
                    </Typography>
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      id="stoRageR"
                      onChange={(event) => setstoRageR(event.target.value)}
                      label="การเก็บรักษาวัตถุดิบ"
                      variant="outlined"
                      className="w-[28rem] md:w-full sm:w-full"
                      value={stoRageR}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      id="stoRagePro"
                      onChange={(event) => setstoRagePro(event.target.value)}
                      label="การเก็บรักษาตัวผลิตภัณฑ์"
                      variant="outlined"
                      className="w-[28rem] md:w-full sm:w-full"
                      value={stoRagePro}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <TextField
                      id="storageArea"
                      onChange={(event) => setstorageArea(event.target.value)}
                      label="พื้นที่จัดเก็บ"
                      variant="outlined"
                      className="w-[28rem] md:w-full sm:w-full"
                      value={storageArea}
                    />
                  </Grid>
                  <Grid className="flex space-x-5 mt-4">
                    <Autocomplete
                      className="w-[28rem] md:w-full sm:w-full"
                      value={valuestorageQuality}
                      onChange={(event, newValue) => {
                        setValuestorageQuality(newValue);
                      }}
                      inputValue={storageQuality}
                      onInputChange={(event, newInputValue) => {
                        setstorageQuality(newInputValue);
                      }}
                      id="storageQuality"
                      options={options5}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="คุณภาพระหว่างการจัดเก็บ"
                        />
                      )}
                    />
                    <Autocomplete
                      className="w-[28rem] md:w-full sm:w-full"
                      value={valuestorageTran}
                      onChange={(event, newValue) => {
                        setValuestorageTran(newValue);
                      }}
                      inputValue={storageTran}
                      onInputChange={(event, newInputValue) => {
                        setstorageTran(newInputValue);
                      }}
                      id="storageTran"
                      options={options5}
                      renderInput={(params) => (
                        <TextField {...params} label="คุณภาพระหว่างการขนส่ง" />
                      )}
                    />
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            {/* {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                <Card
                  sx={{555555555
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    margin: 3,
                  }}
                >
                  <CardContent sx={{ flexGrow: 2 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      กรอกข้อมูลผู้ใช้
                    </Typography>
                    <Grid className="flex space-x-5 mt-4">
                      <Autocomplete
                        className="w-[28rem] md:w-full sm:w-full"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        inputValue={nameTile}
                        onInputChange={(event, newInputValuenameTile) => {
                          setInputValuenameTile(newInputValuenameTile);
                        }}
                        id="controllable-states-demo"
                        options={options}
                        renderInput={(params) => (
                          <TextField {...params} label="คำนำหน้า" required />
                        )}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        onChange={(event) => setNValue(event.target.value)}
                        id="outlined1"
                        label="ชื่อ"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={nValue}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        onChange={(event) => setLValue(event.target.value)}
                        id="outlined2"
                        label="นามสกุล"
                        variant="outlined"
                        className="w-[28rem] md:w-full sm:w-full"
                        value={lValue}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        type="number"
                        min={0}
                        value={ageValue}
                        onChange={(event) => setAGEValue(event.target.value)}
                        id="age"
                        label="อายุ"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">/ ปี</InputAdornment>
                          ),
                          inputProps: { min: 1 },
                        }}
                        variant="outlined"
                        className="w-[28rem] md:w-full sm:w-full"
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <Autocomplete
                        className="w-[28rem] md:w-full sm:w-full"
                        value={value2}
                        onChange={(event, newValue) => {
                          setValue2(newValue);
                        }}
                        inputValue={inputValueEdu}
                        onInputChange={(event, newInputValueEdu) => {
                          setInputValueEdu(newInputValueEdu);
                        }}
                        id="controllable-states-demo2"
                        options={options2}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="ระดับการศึกษา"
                            required
                          />
                        )}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        type="number"
                        value={expperyers}
                        onChange={(event) => setEXPvalue(event.target.value)}
                        id="expperyers"
                        label="ประสบการณ์ในการแปรรูป"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">/ ปี</InputAdornment>
                          ),
                          inputProps: { min: 0 },
                        }}
                        variant="outlined"
                        className="w-[28rem] md:w-full sm:w-full"
                      />
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            {cards2.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    margin: 3,
                  }}
                >
                  <CardContent sx={{ flexGrow: 2 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      ข้อมูลเกี่ยวกับสถานประกอบการ
                    </Typography>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        onChange={(event) => setcomName(event.target.value)}
                        id="comname"
                        label="ชื่อกิจการ"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={comName}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        onChange={(event) => setcomAddress(event.target.value)}
                        id="comaddress"
                        label="ที่อยู่ของสถานประกอบการ"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={comAddress}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        onChange={(event) => setprovince(event.target.value)}
                        id="comprovince"
                        label="จังหวัด"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={province}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        onChange={(event) => setdistrict(event.target.value)}
                        id="comdistrict"
                        label="ตำบล / แขวง"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={district}
                      />
                      <TextField
                        required
                        onChange={(event) => setamphur(event.target.value)}
                        id="comamphur"
                        label="อำเภอ / เขต"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={amphur}
                      />
                    </Grid>

                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        type="number"
                        onChange={(event) => setzipcode(event.target.value)}
                        id="comaddress"
                        label="รหัสไปรษณีย์"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={zipcode}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <Autocomplete
                        className="w-[28rem] md:w-full sm:w-full"
                        value={valueyersBegin}
                        onChange={(event, newValue) => {
                          setValueyersBegin(newValue);
                        }}
                        inputValue={yersBegin}
                        onInputChange={(event, newInputyersBegin) => {
                          setyersBegin(newInputyersBegin);
                        }}
                        id="controllable-states-demo2"
                        options={optionsBE}
                        renderInput={(params) => (
                          <TextField
                            type="number"
                            {...params}
                            label="ปี พ.ศ. ที่เริ่มการธุรกิจ"
                            required
                          />
                        )}
                      />
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            {cards3.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    margin: 3,
                  }}
                >
                  <CardContent sx={{ flexGrow: 2 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      ผลิตภัณฑ์หลักที่เกี่ยวกับการแปรรูปจากกล้วยน้ำว้า
                    </Typography>
                    <Grid className="flex space-x-5 mt-4">
                      <Autocomplete
                        className="w-[28rem] md:w-full sm:w-full"
                        value={valueproraw}
                        onChange={(event, newValue) => {
                          setValueproraw(newValue);
                        }}
                        inputValue={proraw}
                        onInputChange={(event, newInputsetproraw) => {
                          setproraw(newInputsetproraw);
                        }}
                        id="controllable-states-demo2"
                        options={options3}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="การแปรรูปกล้วยดิบ"
                            required
                          />
                        )}
                      />
                      <Autocomplete
                        className="w-[28rem] md:w-full sm:w-full"
                        value={valueproUnraw}
                        onChange={(event, newValue) => {
                          setValueproUnraw(newValue);
                        }}
                        inputValue={proUnraw}
                        onInputChange={(event, newInputsetproUnraw) => {
                          setproUnraw(newInputsetproUnraw);
                        }}
                        id="controllable-states-demo2"
                        options={options4}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="การแปรรูปกล้วยดิบ"
                            required
                          />
                        )}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className="mt-4"
                      >
                        ด้านวัตถุดิบ
                      </Typography>
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        onChange={(event) => setsource(event.target.value)}
                        id="source"
                        label="กล้วยมาจากแหล่งใด"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={source}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <Autocomplete
                        className="w-[28rem] md:w-full sm:w-full"
                        value={valuequlity}
                        onChange={(event, newValuequlity) => {
                          setValuequlity(newValuequlity);
                        }}
                        inputValue={qulity}
                        onInputChange={(event, newInputsetqulity) => {
                          setqulity(newInputsetqulity);
                        }}
                        id="controllable-states-demo2"
                        options={options5}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="คุณภาพของกล้วย"
                            required
                          />
                        )}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        type="number"
                        onChange={(event) => setamount(event.target.value)}
                        id="amount"
                        label="ปริมาณของกล้วย"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={amount}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className="mt-4"
                      >
                        กำลังการผลิต
                      </Typography>
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        type="number"
                        onChange={(event) => setnumWorkers(event.target.value)}
                        id="numWorkers"
                        label="จำนวนแรงงานในสถานประกอบการ จำนวนคน"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={numWorkers}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        type="number"
                        onChange={(event) =>
                          setproCapPerTime(event.target.value)
                        }
                        id="proCapPerTime"
                        label="กำลังการผลิต / ครั้ง"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={proCapPerTime}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        type="number"
                        onChange={(event) =>
                          setlaborWagePerD(event.target.value)
                        }
                        id="laborWagePerD"
                        label="ค่าจ้างแรงงาน / วัน"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={laborWagePerD}
                      />
                      <TextField
                        type="number"
                        onChange={(event) =>
                          setlaborWagePerM(event.target.value)
                        }
                        id="laborWagePerM"
                        label="ค่าจ้างแรงงาน / เดือน"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={laborWagePerM}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        onChange={(event) => settools(event.target.value)}
                        id="tools"
                        label="เครื่องมือและอุปกรณ์หลักที่ใช้ในการแปรรูป"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={tools}
                      />
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            {cards4.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6} pd={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    margin: 3,
                  }}
                >
                  <CardContent sx={{ flexGrow: 2 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      ช่องทางการตลาด
                    </Typography>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        type="number"
                        onChange={(event) =>
                          setproductChanal(event.target.value)
                        }
                        id="productChanal"
                        label="ส่งขายช่องทางไหนบ้าง"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={productChanal}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <Autocomplete
                        className="w-[28rem] md:w-full sm:w-full"
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
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="ส่งออกในประเทศและต่างประเทศไหม"
                          />
                        )}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <Autocomplete
                        className="w-[28rem] md:w-full sm:w-full"
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
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="สัดส่วนทางการตลาด/ขายดีไหม"
                          />
                        )}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        required
                        onChange={(event) =>
                          setbestSell(event.target.value)
                        }
                        id="bestSell"
                        label="สินค้าที่ขายดีที่สุดคือ"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={bestSell}
                      />
                      
                      <TextField
                        required
                        type="number"
                        onChange={(event) =>
                          setproCapPerTime(event.target.value)
                        }
                        id="proCapPerTime"
                        label="ต้นทุน"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={proCapPerTime}
                      />
                      <TextField
                        required
                        type="number"
                        onChange={(event) =>
                          setproCapPerTime(event.target.value)
                        }
                        id="proCapPerTime"
                        label="กำไรต่อหน่วย"
                        className="w-[28rem] md:w-full sm:w-full"
                        variant="outlined"
                        value={proCapPerTime}
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <Typography gutterBottom variant="h5" component="h2">
                        การเก็บรักษา
                      </Typography>
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        id="address5"
                        label="การเก็บรักษาวัตถุดิบ"
                        variant="outlined"
                        className="w-[28rem] md:w-full sm:w-full"
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        id="address6"
                        label="การเก็บรักษาตัวผลิตภัณฑ์"
                        variant="outlined"
                        className="w-[28rem] md:w-full sm:w-full"
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <TextField
                        id="address6"
                        label="พื้นที่จัดเก็บ"
                        variant="outlined"
                        className="w-[28rem] md:w-full sm:w-full"
                      />
                    </Grid>
                    <Grid className="flex space-x-5 mt-4">
                      <Autocomplete
                        className="w-[28rem] md:w-full sm:w-full"
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
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="คุณภาพระหว่างการจัดเก็บ"
                          />
                        )}
                      />
                      <Autocomplete
                        className="w-[28rem] md:w-full sm:w-full"
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
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="คุณภาพระหว่างการขนส่ง"
                          />
                        )}
                      />
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))} */}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="right" gutterBottom>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit_userinfo}
          >
            ตกลง
          </Button>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        ></Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
    //</div>
  );
}
