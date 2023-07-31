import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import swal from "sweetalert";


export default function Add_Admin({ CloseEvent }) {
  const [fnameadmin, setFnameAdmin] = useState("");
  const [lnameadmin, setLnameAdmin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFnameadminChange = (event) => {
    setFnameAdmin(event.target.value);
  };
  const handleLnameadminChange = (event) => {
    setLnameAdmin(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const createAdmin = () => {
    // Call the API to create the admin
    const jsonData = {
      email,
      password,
      fname: fnameadmin,
      lname: lnameadmin,
    };
  
    if (!email || !password || !fnameadmin || !lnameadmin) {
      alert("โปรดกรอกให้ครบถ้วน");
    } else {
      localStorage.setItem("token", jsonData.token);
      axios
        .post("http://localhost:8888/getuser", {
          email,
        })
        .then((res) => {
          console.log(res.data);
          console.log("res:", res);
          console.log("email:", email);
          if (res.data.flag === false) {
            swal("สมัครสมาชิกไม่สำเร็จ!", "Email นี้มีอยู่ในระบบแล้ว กรุณาเปลี่ยน Email.", "error");
          } else {
            fetch("http://localhost:8888/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(jsonData),
            })
              .then((response) => response.json())
              .then((data) => {
                // Handle response data here if needed
              })
              .catch((error) => {
                console.error("Error:", error);
              });
  
            swal("สมัครสมาชิกสำเร็จ!", "สมัครสมาชิกสำเร็จขอบคุณที่บริการ.", "success");
            setTimeout(() => {
              sessionStorage.setItem("user_firstName", fnameadmin);
              sessionStorage.setItem("user_lastName", lnameadmin);
              window.location.reload();
            }, 2000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add
      </Typography>
      <IconButton style={{ position: "absolute", top: "0", right: "0" }} onClick={CloseEvent}>
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="firstName"
            id="firstName"
            label="ชื่อ"
            variant="outlined"
            size="small"
            onChange={handleFnameadminChange}
            value={fnameadmin}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="lastName"
            id="lastName"
            label="นามสกุล"
            variant="outlined"
            size="small"
            onChange={handleLnameadminChange}
            value={lnameadmin}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            id="email"
            label="อีเมล"
            variant="outlined"
            size="small"
            onChange={handleEmailChange}
            value={email}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            id="password"
            label="รหัสผ่าน"
            variant="outlined"
            size="small"
            onChange={handlePasswordChange}
            value={password}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createAdmin}>
              ตกลง
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
}
