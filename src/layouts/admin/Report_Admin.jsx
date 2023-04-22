import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Navbars from "../../components/admin/Navbars";
import { Box } from "@mui/material";
import Mylist_Admin from "./report_admin/Mylist_Admin";


export default function Feed() {
  return (
    <>
    <Navbars />
    <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
          <Mylist_Admin />
        </Box>
      </Box>
    </>
  );
}
