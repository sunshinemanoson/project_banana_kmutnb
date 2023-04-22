import { Box, Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import { useAppStore } from "../appStore";


export default function Add_Admin({ CloseEvent }) {
  const [nameadmin, setNameAdmin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setRows = useAppStore((state) => state.setRows);

  const handleNameadminChange = (event) => {
    setNameAdmin(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const createAdmin = () => {
    // if (
    //     !name ||
    //     !shop ||
    //     !position ||
    //     !sales ||
    //     !workage
    // ) {
    //     name,
    //     shop,
    //     position,
    //     sales,
    //     workage
    // }
    getAdmin();
    CloseEvent();
    Swal.fire("Submitted!", "Your file has been Submitted.", "success");
  };

  const getAdmin = async () => {
    // const data = await getDocs(empCollectionRef);
    // setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add
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
          <TextField
            id="outlined-basic"
            label="ชื่อ - นามสกุล"
            variant="outlined"
            size="small"
            onChange={handleNameadminChange}
            value={nameadmin}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
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
            id="outlined-basic"
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
