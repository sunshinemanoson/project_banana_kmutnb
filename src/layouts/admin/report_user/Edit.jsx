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
import axios from "axios";



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

export default function Edit({CloseEvent}) {

  const [editopen, setEditOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const [userInfo, setUserInfo] = useState({});
  
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
  const email = localStorage.getItem("email");
  
  const handleSubmit_userinfo = () => {
    // console.log("handdlesummited");
    if ((ageValue || expperyers) <= 0) {
      alert("ไม่สามารถกรอกข้อมูลเป็นเลขน้อยกว่า 0 ได้");
      // console.log(ageValue,expperyers);
    } else if (localStorage.length === 3) {
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
        storageTran,
        email
      );
      //   console.log(ageValue,expperyers < 0);
      let data_ar_info = [];
      //   for (let i = 0, len = info_user.length; i < len; i++) {
      const info_data = {
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
        email:email
      };
      data_ar_info.push(info_data);
      // }
      // window.location = "/Add_wideth_Raw_2";
      // console.log(localStorage.getItem("token").length)
      axios
        .post("http://localhost:8888/update_userinfo", {
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

  const createUser = () => {

    getUser();
    CloseEvent();
    Swal.fire("Submitted!", "Your file has been Submitted.", "success");
  };

  const getUser = async () => {
    // const data = await getDocs(empCollectionRef);
    // setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  
  useEffect(() => {
    const id = sessionStorage.getItem("user_id");
    axios
      .post(`http://localhost:8888/getuser_info_edit/${id}`)
      .then((res) => {
        let data_re = [];
        let { status, result } = res.data;
        result.forEach((element) => {
          data_re.push(element);
          console.log(data_re);
          sessionStorage.setItem("name_title", data_re[0].info_nametitle);
          sessionStorage.setItem("info_fname", data_re[0].info_fname);
          sessionStorage.setItem("info_lname", data_re[0].info_lname);
          sessionStorage.setItem("info_age", data_re[0].info_age);
          sessionStorage.setItem("info_edu", data_re[0].info_edu);
          sessionStorage.setItem("info_expyers", data_re[0].info_expyers);
          sessionStorage.setItem("info_comname", data_re[0].info_comname);
          sessionStorage.setItem("info_comaddress", data_re[0].info_comaddress);
          sessionStorage.setItem("info_province", data_re[0].info_province);
          sessionStorage.setItem("info_district", data_re[0].info_district);
          sessionStorage.setItem("info_amphur", data_re[0].info_amphur);
          sessionStorage.setItem("info_zipcode", data_re[0].info_zipcode);
          sessionStorage.setItem("info_yersbegin", data_re[0].info_yersbegin);
          sessionStorage.setItem("info_proraw", data_re[0].info_proraw);
          sessionStorage.setItem("info_proUnraw", data_re[0].info_proUnraw);
          sessionStorage.setItem("info_source", data_re[0].info_source);
          sessionStorage.setItem("info_qulity", data_re[0].info_qulity);
          sessionStorage.setItem("info_amount", data_re[0].info_amount);
          sessionStorage.setItem("info_numWorkers", data_re[0].info_numWorkers);
          sessionStorage.setItem("info_proCapPerTime", data_re[0].info_proCapPerTime);
          sessionStorage.setItem("info_laborWagePerD", data_re[0].info_laborWagePerD);
          sessionStorage.setItem("info_laborWagePerM", data_re[0].info_laborWagePerM);
          sessionStorage.setItem("info_productChanal", data_re[0].info_productChanal);
          sessionStorage.setItem("info_productExport", data_re[0].info_productExport);
          sessionStorage.setItem("info_marketShare", data_re[0].info_marketShare);
          sessionStorage.setItem("info_bestSell", data_re[0].info_bestSell);
          sessionStorage.setItem("info_cost", data_re[0].info_cost);
          sessionStorage.setItem("info_proFit", data_re[0].info_proFit);
          sessionStorage.setItem("info_stoRagePro", data_re[0].info_stoRagePro);
          sessionStorage.setItem("info_stoRageR", data_re[0].info_stoRageR);
          sessionStorage.setItem("info_storageArea", data_re[0].info_storageArea);
          sessionStorage.setItem("info_storageQuality", data_re[0].info_storageQuality);
          sessionStorage.setItem("info_storageTran", data_re[0].info_storageTran);
          sessionStorage.setItem("info_tools", data_re[0].tools);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

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
        {/* <CloseIcon /> */}
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
                    <TextField {...params} label={`${sessionStorage.getItem("info_title")}`}  />
                  )}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  
                  onChange={(event) => setNValue(event.target.value)}
                  id="outlined1"
                  label={`${sessionStorage.getItem("info_fname")}`}
                  className="w-[28rem] md:w-full sm:w-full"
                  variant="outlined"
                  value={nValue}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  
                  onChange={(event) => setLValue(event.target.value)}
                  id="outlined2"
                  label={`${sessionStorage.getItem("info_lname")}`}
                  variant="outlined"
                  className="w-[28rem] md:w-full sm:w-full"
                  value={lValue}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  
                  type="number"
                  min={0}
                  value={ageValue}
                  onChange={(event) => setAGEValue(event.target.value)}
                  id="age"
                  label={`${sessionStorage.getItem("info_age")}`}
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
                    <TextField {...params} label={`${sessionStorage.getItem("info_edu")}`}  />
                  )}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  
                  type="number"
                  value={expperyers}
                  onChange={(event) => setEXPvalue(event.target.value)}
                  id="expperyers"
                  label={`${sessionStorage.getItem("info_expyers")}`}
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
                  
                  onChange={(event) => setcomName(event.target.value)}
                  id="comname"
                  label={`${sessionStorage.getItem("info_comname")}`}
                  className="w-[28rem] md:w-full sm:w-full"
                  variant="outlined"
                  value={comName}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  
                  onChange={(event) => setcomAddress(event.target.value)}
                  id="comaddress"
                  label={`${sessionStorage.getItem("info_comaddress")}`}
                  className="w-[28rem] md:w-full sm:w-full"
                  variant="outlined"
                  value={comAddress}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  
                  onChange={(event) => setprovince(event.target.value)}
                  id="comprovince"
                  label={`${sessionStorage.getItem("info_province")}`}
                  className="w-[28rem] md:w-full sm:w-full"
                  variant="outlined"
                  value={province}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  
                  onChange={(event) => setdistrict(event.target.value)}
                  id="comdistrict"
                  label={`${sessionStorage.getItem("info_district")}`}
                  className="w-[28rem] md:w-full sm:w-full"
                  variant="outlined"
                  value={district}
                />
                <TextField
                  
                  onChange={(event) => setamphur(event.target.value)}
                  id="comamphur"
                  label={`${sessionStorage.getItem("info_amphur")}`}
                  className="w-[28rem] md:w-full sm:w-full"
                  variant="outlined"
                  value={amphur}
                />
              </Grid>

              <Grid className="flex space-x-5 mt-4">
                <TextField
                  
                  type="number"
                  onChange={(event) => setzipcode(event.target.value)}
                  id="comaddress"
                  label={`${sessionStorage.getItem("info_zipcode")}`}
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
                      label={`${sessionStorage.getItem("info_yersbegin")}`}
                      
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
                    <TextField {...params} label={`${sessionStorage.getItem("info_proraw")}`}  />
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
                    <TextField {...params} label={`${sessionStorage.getItem("info_proUnraw")}`}  />
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
                  
                  onChange={(event) => setsource(event.target.value)}
                  id="source"
                  label={`${sessionStorage.getItem("info_source")}`}
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
                    <TextField {...params} label={`${sessionStorage.getItem("info_qulity")}`}  />
                  )}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  
                  type="number"
                  onChange={(event) => setamount(event.target.value)}
                  id="amount"
                  label={`${sessionStorage.getItem("info_amount")}`}
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
                  
                  type="number"
                  onChange={(event) => setnumWorkers(event.target.value)}
                  id="numWorkers"
                  label={`${sessionStorage.getItem("info_numWorkers")}`}
                  className="w-[28rem] md:w-full sm:w-full"
                  variant="outlined"
                  value={numWorkers}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  
                  type="number"
                  onChange={(event) => setproCapPerTime(event.target.value)}
                  id="proCapPerTime"
                  label={`${sessionStorage.getItem("info_proCapPerTime")}`}
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
                  label={`${sessionStorage.getItem("info_laborWagePerD")}`}
                  className="w-[28rem] md:w-full sm:w-full"
                  variant="outlined"
                  value={laborWagePerD}
                />
                <TextField
                  type="number"
                  onChange={(event) => setlaborWagePerM(event.target.value)}
                  id="laborWagePerM"
                  label={`${sessionStorage.getItem("info_laborWagePerM")}`}
                  className="w-[28rem] md:w-full sm:w-full"
                  variant="outlined"
                  value={laborWagePerM}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  onChange={(event) => settools(event.target.value)}
                  id="tools"
                  label={`${sessionStorage.getItem("info_tool")}`}
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
                  
                
                  type="number"
                  onChange={(event) => setproductChanal(event.target.value)}
                  id="productChanal"
                  label={`${sessionStorage.getItem("info_productChanal")}`}
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
                      label={`${sessionStorage.getItem("info_productExport")}`}
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
                    <TextField {...params} label={`${sessionStorage.getItem("info_marketShare")}`} />
                  )}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  
                  onChange={(event) => setbestSell(event.target.value)}
                  id="bestSell"
                  label={`${sessionStorage.getItem("info_bestSell")}`}
                  className="w-[28rem] md:w-full sm:w-full"
                  variant="outlined"
                  value={bestSell}
                />

                <TextField
                  
                  type="number"
                  onChange={(event) => setCost(event.target.value)}
                  id="cost"
                  label={`${sessionStorage.getItem("info_cost")}`}
                  className="w-[28rem] md:w-full sm:w-full"
                  variant="outlined"
                  value={cost}
                />
                <TextField
                  
                  type="number"
                  onChange={(event) => setproFit(event.target.value)}
                  id="proFit"
                  label={`${sessionStorage.getItem("info_proFit")}`}
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
                  label={`${sessionStorage.getItem("info_stoRagePro")}`}
                  variant="outlined"
                  className="w-[28rem] md:w-full sm:w-full"
                  value={stoRageR}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  id="stoRagePro"
                  onChange={(event) => setstoRagePro(event.target.value)}
                  label={`${sessionStorage.getItem("info_stoRageR")}`}
                  variant="outlined"
                  className="w-[28rem] md:w-full sm:w-full"
                  value={stoRagePro}
                />
              </Grid>
              <Grid className="flex space-x-5 mt-4">
                <TextField
                  id="storageArea"
                  onChange={(event) => setstorageArea(event.target.value)}
                  label={`${sessionStorage.getItem("info_storageArea")}`}
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
                    <TextField {...params} label={`${sessionStorage.getItem("info_storageQuality")}`} />
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
                    <TextField {...params} label={`${sessionStorage.getItem("info_storageTran")}`} />
                  )}
                />
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={handleSubmit_userinfo}>
              ตกลง
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
}