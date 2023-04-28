import { Box, Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import { useAppStore } from "../appStore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment, Paper } from "@mui/material";

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
const optionsBE = ["2565"];

export default function Edit({ CloseEvent }) {
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
  const setRows = useAppStore((state) => state.setRows);


  const createUser = () => {

    getUser();
    CloseEvent();
    Swal.fire("Submitted!", "Your file has been Submitted.", "success");
  };

  const getUser = async () => {
    // const data = await getDocs(empCollectionRef);
    // setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={CloseEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <Accordion>
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
        <Grid item xs={12}>
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
                    <TextField {...params} label="การแปรรูปกล้วยดิบ" required />
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
                    <TextField {...params} label="การแปรรูปกล้วยสุก" required />
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
                    <TextField {...params} label="คุณภาพของกล้วย" required />
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
        <Grid item xs={12}>
          <Accordion>
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
                    <TextField {...params} label="สัดส่วนทางการตลาด/ขายดีไหม" />
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
                    <TextField {...params} label="คุณภาพระหว่างการจัดเก็บ" />
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
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createUser}>
              ตกลง
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
}
