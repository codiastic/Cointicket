"use client";

import { Box, Typography, IconButton } from "@mui/material";
import React from "react";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";

import "./basicTicket.css";
// import "../../app/home.css";
import UserGrid from "../../userGrid/userGrid";
import CoinIndicator from "../coinIndicator/coinIndicator";
import TicketInteraction from "../ticketInteraction/ticketInteraction";
import BasicTicketContent from "../ticketContents/basicTicketContent";

const BasicTicket = () => {
  return (
    <>
      <div className="ticket-container">
        {/* header */}
        <Box className="ticket">
          <UserGrid />
          <div style={{ display: "flex", gap: { md: 0, xs: 8 } }}>
            <IconButton sx={{ padding: { xs: 0, md: "8px" } }}>
              <BookmarkAddOutlinedIcon
                sx={{
                  color: "white",
                  fontSize: { xs: "16px", md: "24px" },
                  marginLeft: 1,
                }}
              />
            </IconButton>
            <IconButton sx={{ padding: { xs: 0, md: "8px" } }}>
              <MoreVertIcon
                sx={{
                  color: "white",
                  fontSize: { xs: "16px", md: "24px" },
                }}
              />
            </IconButton>
          </div>
        </Box>
        {/* indicator */}
        <Box className="date-indicator">
          <Typography
            sx={{ color: "#08FF00", fontSize: { xs: "12px", md: "16px" } }}
          >
            DD/MM/YY
          </Typography>
          <Box className="indicator">
            <CircleIcon sx={{ fontSize: { xs: "8px", md: "10px" } }} />
            <Typography sx={{ fontSize: { xs: "10px", md: "16px" } }}>
              Open
            </Typography>
          </Box>
        </Box>
        {/* coin indicator */}
        <CoinIndicator />

        {/* content */}
        <BasicTicketContent />

        {/* button interactions */}
        <TicketInteraction />
      </div>
    </>
  );
};

export default BasicTicket;
