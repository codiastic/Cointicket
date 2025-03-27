"use client";
import React, { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";

import "./gridLineContent.css";
export default function AdvanceTicketContent() {
  const tradeType = "Bullish";
  const [expanded, setExpanded] = useState(false);
  const text =
    "Bitcoin's recent market trends suggest a promising upward trajectory. Analysts are optimistic about its potential niche is creased institutional interest. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dolore illo molestias odit sapiente aliquam dolorum perspiciatis quisquam voluptate, maxime ullam sit animi accusantium et ex porro maiores corrupti ducimus?.";

  return (
    <>
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
          </Box>
          {/* caption */}
          <Box
            sx={{
              width: "460px",
              maxWidth: "100%",
              mt: 4,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "1.6",
                display: "-webkit-box",
                WebkitLineClamp: expanded ? "unset" : 3, // Show 3 lines initially
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {expanded ? text : text.slice(0, 120)}{" "}
              {/* Trim text when collapsed */}
              {!expanded && text.length > 120 && (
                <Box
                  component="span"
                  sx={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    paddingLeft: "5px",
                  }}
                  onClick={() => setExpanded(true)}
                >
                  ...
                </Box>
              )}
            </Typography>

            {/* Show "Show Less" when expanded */}
            {expanded && (
              <Typography
                component="span"
                sx={{
                  cursor: "pointer",
                  fontFamily: "Poppins,'sans-serif'",
                  fontSize: "12px",
                  color: "#7A7A7A",
                  display: "block",
                  mt: 1,
                }}
                onClick={() => setExpanded(false)}
              >
                Show Less
              </Typography>
            )}
          </Box>
        </div>
      </Box>
    </>
  );
}
