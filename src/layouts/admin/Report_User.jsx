import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Navbars from "../../components/admin/Navbars";
import { Box } from "@mui/material";
import Mylist from "./report_user/Mylist";

export default function Feed() {
  return (
    <>
    <Navbars />
    <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
          <Mylist />
        </Box>
      </Box>
    </>
  );
}