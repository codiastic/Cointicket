import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import "./advanceTicketContent.css";
export default function AdvanceTicketContent() {
  const tradeType = "Bullish";
  return (
    <>
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
          {/* middle line   */}
          <Box className="grid-container">
            <div className="grid-line"></div>
            <div className="grid-box">
              Profit Left:<span style={{ color: "white" }}>10%</span>{" "}
            </div>
            <div className="grid-line"></div>
          </Box>
          {/* profit section */}
          <Box display={"flex"} justifyContent={"space-between"} mt={1}>
            <div style={{ display: "flex" }}>
              {" "}
              <Typography>Profit Target 1</Typography>
              <Image
                src="/images/target.svg"
                alt="target"
                width={24}
                height={24}
              />
            </div>
            <div style={{ display: "flex" }}>
              <Typography>Profit Target 2 </Typography>
              <Image
                src="/images/target.svg"
                alt="target"
                width={24}
                height={24}
              />
            </div>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography color="#B8B8B8">$ 92,000</Typography>
            <Typography color="#B8B8B8">$ 100,000</Typography>
          </Box>
          {/* type-time */}
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
          <Box className="grid-container">
            <div className="grid-line"></div>
            <div className="grid-box">
              <Image
                src="/images/stop_icon.svg"
                alt="stop"
                width={16}
                height={16}
              />
              Stop Loss:<span style={{ color: "white" }}>$70,000</span>{" "}
            </div>
            <div className="grid-line"></div>

            {/* caption */}
          </Box>
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
              Bitcoin's recent market trends suggest a promising upward
              trajectory. Analysts are optimistic about its potential niche is
              creased institutional interest.
            </Typography>
          </Box>
        </div>
      </Box>
    </>
  );
}
