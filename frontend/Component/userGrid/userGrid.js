"use client";

import React from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import "./userGrid.css";

export default function UserGrid() {
  return (
    <Box display={"flex"} gap={1} sx={{ width: "auto" }}>
      <Avatar src="/images/ctuser.png" alt="profilepic" className="avatar" />
      <Box display={"flex"} flexDirection={"column"}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "'Sora', sans-serif",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            @anonymous123
          </Typography>
          <Button variant="outlined" className="follow-button">
            Follow
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: { xs: "4px", md: 2 } }}>
          <img src="/images/ctscore.png" alt="score" className="score" />

          <Typography
            sx={{
              color: "#08FF00",
              fontSize: { xs: "12px", md: "12px" },
              mt: { xs: "2px", md: 0 },
            }}
          >
            Hit rate 76%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
