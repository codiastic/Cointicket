import React from "react";
import { Box, Typography } from "@mui/material";

export default function TicketContent() {
  const tradeType = "Bullish";
  return (
    <Box sx={{ mt: 2, width: "100%" }} color="white" padding={"1px"}>
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
            Profit Left:<span style={{ color: "white" }}>6%</span>{" "}
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

      <Box
        sx={{
          width: "400px",
          maxWidth: "100%",
          overflow: "hidden",
          display: "flex ",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Bitcoin's recent market trends suggest a promising upward trajectory.
          Analysts are optimistic about its potential niche is creased
          institutional interest.
        </Typography>
      </Box>
    </Box>
  );
}
