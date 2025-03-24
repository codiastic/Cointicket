"use client"
import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import "../../app/home.css";
import UserGrid from "../userGrid/userGrid";

export default function FollowTop() {
  return (
    <>
      <Box className="follow-home" sx={{ justifyContent: "center" }}>
        <Typography className="follow-head">Follow Top Traders</Typography>
        <Box className="follow-content">
          <UserGrid />
          <UserGrid />
          <UserGrid />
          <UserGrid />
        </Box>
      </Box>
    </>
  );
}
