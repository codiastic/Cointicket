import React from "react";
import { Box, Typography } from "@mui/material";

export default function TicketContent() {
  const tradeType = "Bullish";
  return (
    <Box sx={{ mt: 2, width: "auto" }} color="white" padding={2}>
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
      <Box mt={3}>
        <Typography sx={{ fontFamily: "Poppins, 'sans-serif" }}>
          Caption...................................................{" "}
        </Typography>
      </Box>
    </Box>
  );
}
