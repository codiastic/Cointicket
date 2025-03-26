"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

export default function BasicTicketContent() {
  const tradeType = "Bullish";
  return (
    <Box className="main-content-box">
      <div>
        {" "}
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Ticket Price</Typography>
          <Typography>
            {tradeType === "Bullish" ? "Upside" : "Downside"}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography color="#B8B8B8">83,868.12</Typography>
          <Typography color="#09FF00">15%</Typography>
        </Box>
        {/* middle line */}
        <Box className="grid-container">
          <div className="grid-line"></div>
          <div className="grid-box">
            <p>Profit Left:</p>
            <p style={{ color: "white" }}>6%</p>{" "}
          </div>
          <div className="grid-line"></div>
        </Box>
        {/* time-type */}
        <Box display={"flex"} justifyContent={"space-between"} mt={2}>
          <Typography>Time Frame</Typography>
          <Typography>Trade Type</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography color="#B8B8B8">3 Weeks</Typography>
          <Typography color={tradeType === "Bullish" ? "#08FF00" : "#FF0004"}>
            {" "}
            {tradeType === "Bullish" ? "Bullish" : "Bearish"}
          </Typography>
        </Box>
      </div>

      <Typography
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontSize: { xs: "14px", md: "16px" },
          mt: 4,
          width: { lg: "450px", md: "550px" },
          maxWidth: "100%",
        }}
      >
        Bitcoin's recent market trends suggest a promising upward trajectory.
        Analysts are optimistic about its potential niche is creased
        institutional interest.
      </Typography>
    </Box>
  );
}
