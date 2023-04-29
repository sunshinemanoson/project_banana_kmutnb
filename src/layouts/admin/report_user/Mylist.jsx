import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import axios from "axios";
import Swal from "sweetalert2";
import swal from 'sweetalert';
import { Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import { Modal, Box } from "@mui/material";
import Edit from "./Edit";
import { useAppStore } from "../appStore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import EditIcon from "@mui/icons-material/Edit";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Mylist() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [editadminopen, setEditAdminOpen] = useState(false);
  const [adminformid, setAdminFormId] = useState("");
  const handleOpen = () => setOpen(true);
  const setRows = useAppStore((state) => state.setRows);
  const rows = useAppStore((state) => state.rows);
  const [selected, setSelected] = useState([]);

  
  useEffect(() => {
    axios
      .post("http://localhost:8888/getuser_info")
      .then((response) => {
        console.log(response.data.result);
        setRows(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      // getUsers();
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAddAdmin = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditAdminOpen = (id) => {
    setAdminFormId(id);
    setEditAdminOpen(true);
  };

  const handleEditAdminClose = () => {
    setAdminFormId(null);
    setEditAdminOpen(false);
  };

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((s) => s !== id));
    }
  };
  // const handleAddAdminApi = () => {
  //   axios
  //     .post("http://localhost:8888/addadmin", { ids: selected })
  //     .then((response) => {
  //       console.log(response);
  //       // Handle success response
  //       showDialogBox("Success", "Admins added successfully.");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // Handle error response
  //       showDialogBox("Error", "Failed to add admins.");
  //     });
  // };
  
  const showDialogBox = (title, message) => {
    // Use a library like SweetAlert to show the dialog box
    swal(title, message, "success");
  };
  

  const deleteApi = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      showCloseButton: false, // prevent closing on cross icon
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8888/deleteaduser/${id}`)
          .then((response) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const updatedRows = rows.filter((row) => row.id !== id);
            setRows(updatedRows);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your file is safe :)", "error");
      }
    });
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden", padding: "12px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "20px" }}
        >
          รายการข้อมูลสมาชิก
        </Typography>
        <Box height={10} />
        <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={rows}
            sx={{ width: 300 }}
            onChange={(e, v) => filterData(v)}
            getOptionLabel={(rows) => rows.name || ""}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Search" />
            )}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          {/* <Button
            variant="contained"
            color="success"
            endIcon={<AddCircleIcon />}
            onClick={handleAddAdminApi}
          >
            Add Admin
          </Button> */}
        </Stack>
        <Box height={10} />
        <Divider />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ minWidth: "50px" }}>
                  <Checkbox
                    checked={selected.length === rowsPerPage}
                    onChange={(event) => {
                      const newSelected = event.target.checked
                        ? rows
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => row.info_id)
                        : [];
                      setSelected(newSelected);
                    }}
                  />
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  ชื่อ - นามสกุล
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  ชื่อร้าน
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  ช่องทางการขาย
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  ผลลัพธ์ของผลิตภัณฑ์จากกล้วยดิบ
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  ผลลัพธ์ของผลิตภัณฑ์จากกล้วยสุก
                </TableCell>
                <TableCell align="left" style={{ minWidth: "50px" }}>
                  อายุงาน (ปี)
                </TableCell>
                <TableCell align="left" style={{ minWidth: "50px" }}>
                  <SettingsIcon />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.info_id}
                    selected={selected.indexOf(row.info_id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selected.indexOf(row.info_id) !== -1}
                        onChange={(event) => {
                          const newSelected = [...selected];
                          if (event.target.checked) {
                            newSelected.push(row.info_id);
                          } else {
                            const index = newSelected.indexOf(row.info_id);
                            if (index !== -1) {
                              newSelected.splice(index, 1);
                            }
                          }
                          setSelected(newSelected);
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">{row.full_name}</TableCell>
                    <TableCell align="left">{row.info_comname}</TableCell>
                    <TableCell align="left">{row.info_source}</TableCell>
                    <TableCell align="left">{row.info_proraw}</TableCell>
                    <TableCell align="left">{row.info_proUnraw}</TableCell>
                    <TableCell align="left">{row.info_amount}</TableCell>
                    <TableCell>
                      <Stack spacing={2} direction="row">
                        <EditIcon
                          style={{
                            fontSize: "20px",
                            color: "blue",
                            cursor: "pointer",
                          }}
                          className="cursor-pointer"
                          onClick={() => {}}
                        />
                        <DeleteIcon
                          style={{
                            fontSize: "20px",
                            color: "darkred",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            if (row.info_id) {
                              console.log("Delete ID: ", row.info_id);
                              deleteApi(row.info_id);
                            } else {
                              console.log("no id");
                            }
                          }}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
