"use client"
import React from "react";
import { Box, Typography, Button } from "@mui/material";

import "./banner.css";

export default function Banner() {
  return (
    <Box className="reason-box">
      <Box className="learn-box">
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "24px",
            color: "white",
          }}
        >
          Top 5 Reasons to use
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "24px",
            color: "#FFB34F",
          }}
        >
          CoinTicket
        </Typography>
        <Button
          variant="contained"
          sx={{ color: "black", backgroundColor: "white", mb: 2 }}
        >
          Read More
        </Button>
      </Box>
      <Box className="middle-img">
        <img src="/images/middle.png" alt="build" />
      </Box>
    </Box>
  );
}
