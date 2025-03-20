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
import TicketContent from "../ticketContents/ticketContent";
import TicketInteraction from "../ticketInteraction/ticketInteraction";

const BasicTicket = () => {
  return (
    <>
      {/* header */}
      <Box className="ticket">
        <Box className="user-grid-container">
          <UserGrid />
        </Box>

        <IconButton>
          <BookmarkAddOutlinedIcon sx={{ color: "white" }} />
          <MoreVertIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      {/* indicator */}
      <Box className="date-indicator">
        <Typography sx={{ color: "#08FF00" }}>DD/MM/YY</Typography>
        <Box className="indicator">
          <CircleIcon sx={{ fontSize: "12px" }} />
          <Typography>Open</Typography>
        </Box>
      </Box>
      {/* coin indicator */}
      <CoinIndicator />

      {/* content */}
      <TicketContent />

      {/* button interactions */}
      <TicketInteraction />
    </>
  );
};

export default BasicTicket;
