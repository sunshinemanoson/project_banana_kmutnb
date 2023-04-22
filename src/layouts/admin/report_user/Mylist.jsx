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
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";
import { Box, Button, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";



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
  const [rows, setRows] = useState([]);
  const [formid, setFormid] = useState("");
  // const [open, setOpen] 
  // const handleopen = () => setOpen(true);
  // const empCollectionRef = collection(db, "######");

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // const getUsers = async () => {
  //   const data = await getDocs(empCollectionRef);
  //   setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        // deleteApi(id);
      }
    });
  };

  // const deleteApi = async (id) => {
  //   const userDoc = doc(db, "#####", id);
  //   await deleteDoc(userDoc);
  //   Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //   getUsers();
  // };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      // getUsers();
    }
  };

  const editData = () => {
    const data = {

    }
    setFormid(data);
    // handleEditOpen();
  };

  return (
    <>
      {/* {rows.length > 0 && ( */}
      <Paper sx={{ width: "100%", overflow: "hidden", padding: "12px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "20px" }}
        >
          รายการข้อมูลสมาชิก
        </Typography>
        <Divider />
        <Box height={10} />
        <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Autocomplete
            disablePortal1
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
        </Stack>
        <Box height={10} />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  ชื่อ - นามสกุล
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  ชื่อร้าน
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  ตำแหน่ง
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  ช่องทางการขาย
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
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell key={row.id} align="left">
                        {row}
                      </TableCell>
                      <TableCell key={row.id} align="left">
                        {row}
                      </TableCell>
                      <TableCell key={row.id} align="left">
                        {row}
                      </TableCell>
                      <TableCell key={row.id} align="left">
                        {row}
                      </TableCell>
                      <TableCell key={row.id} align="left">
                        {row}
                      </TableCell>
                      <TableCell align="left">
                        <Stack spacing={2} direction="row">
                          <EditIcon
                            style={{
                              fontSize: "20px",
                              color: "blue",
                              cursor: "pointer",
                            }}
                            className="cursor-pointer"
                            // onClick={() => {}}
                          />
                          <DeleteIcon
                            style={{
                              fontSize: "20px",
                              color: "darkred",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              deleteUser(row.id);
                            }}
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* )} */}
    </>
  );
}
