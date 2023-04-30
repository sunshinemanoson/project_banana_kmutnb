import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import axios from "axios";
import Swal from "sweetalert2";
import swal from "sweetalert";
import { Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import { Modal, Box } from "@mui/material";
import Add_Admin from "./Add_Admin";
import Edit_Admin from "./Edit_Admin";
import { useAppStore } from "../appStore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { redirect } from "react-router-dom";
import { Checkbox } from "@material-ui/core";

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

  useEffect(() => {
    axios
      .post("http://localhost:8888/getadmin")
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
          .delete(`http://localhost:8888/deleteadmin/${id}`)
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

  const showDialogBox = (title, message) => {
    // Use a library like SweetAlert to show the dialog box
    swal(title, message, "success");
  };
  const [selected, setSelected] = useState([]);

  const editAdmin = (id, fname, lname, email, password) => {
    const data = {
      id: id,
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    };
    setAdminFormId(data);
    handleEditAdminOpen();
    window.location.reload();
  };

  const handleAddAdminApi = (id) => {
    console.log(id);
    axios
      .post(`http://localhost:8888/addadmin/${id}`)
      .then((response) => {
        console.log(response);
        // Handle success response
        showDialogBox("Success", "Admin added successfully.", "success");
      })
      .catch((error) => {
        console.log(error);
        // Handle error response
        showDialogBox("Error", "Failed to add admin.", "error");
      });
  };

  const handleRemoveAdminApi = (id) => {
    console.log(id);
    axios
      .post(`http://localhost:8888/removeadmin/${id}`)
      .then((response) => {
        console.log(response);
        // Handle success response
        showDialogBox("Success", "Admin added successfully.", "success");
      })
      .catch((error) => {
        console.log(error);
        // Handle error response
        showDialogBox("Error", "Failed to add admin.", "error");
      });
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Add_Admin CloseEvent={editAdmin} fid={adminformid} />
          </Box>
        </Modal>
        <Modal
          open={editadminopen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Edit_Admin CloseEvent={handleEditAdminClose} />
          </Box>
        </Modal>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden", padding: "12px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "20px" }}
        >
          รายการข้อมูลผู้ใช้งานในระบบ
        </Typography>
        <Divider />
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
          <Button
            variant="contained"
            color="success"
            endIcon={<AddCircleIcon />}
            onClick={() => handleAddAdminApi(selected)}
          >
            Add Admin
          </Button>
          <Button
            variant="contained"
            color="warning"
            endIcon={<AddCircleIcon />}
            onClick={() => handleRemoveAdminApi(selected)}
          >
            Remove Admin
          </Button>
          {/* <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            onClick={handleOpen}
          >
            Add User
          </Button> */}
        </Stack>
        <Box height={10} />
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
                            .map((row) => row.user_id)
                        : [];
                      setSelected(newSelected);
                    }}
                  />
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  ชื่อ
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  นามสกุล
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  ตำเเหน่ง
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  อีเมล
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
                    key={row.user_id}
                    selected={selected.indexOf(row.user_id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selected.indexOf(row.user_id) !== -1}
                        onChange={(event) => {
                          const newSelected = [...selected];
                          if (event.target.checked) {
                            newSelected.push(row.user_id);
                          } else {
                            const index = newSelected.indexOf(row.user_id);
                            if (index !== -1) {
                              newSelected.splice(index, 1);
                            }
                          }
                          setSelected(newSelected);
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">{row.fname}</TableCell>
                    <TableCell align="left">{row.lname}</TableCell>
                    <TableCell align="left">{row.us}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell>
                      {" "}
                      <Stack spacing={2} direction="row">
                        <DeleteIcon
                          style={{
                            fontSize: "20px",
                            color: "darkred",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            if (row.user_id) {
                              console.log("Delete ID: ", row.user_id);
                              deleteApi(row.user_id);
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
