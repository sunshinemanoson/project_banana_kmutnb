import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { Box, Stack } from "@mui/material";

export default function Ad_layout() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
      </Stack>
      <main>
        <Outlet />
      </main>
    </Box>
  );
}
