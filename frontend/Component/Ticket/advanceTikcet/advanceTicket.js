"use client";

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";
import Image from "next/image";

import "../basicTicket/basicTicket.css";
import "./advanceTicket.css";
import UserGrid from "../../userGrid/userGrid";
import CoinIndicator from "../coinIndicator/coinIndicator";
import TicketContent from "../ticketContents/ticketContent";
import TicketInteraction from "../ticketInteraction/ticketInteraction";
import AdvanceTicketContent from "../ticketContents/advanceTicketContent";
const AdvanceTicket = () => {
  return (
    <>
      <Box className="ticket">
        <Box className="user-grid-container">
          <UserGrid />
        </Box>

        <IconButton>
          <BookmarkAddOutlinedIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <MoreVertIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <div className="tags-div">
        <div className="tag-tech">
          <Image
            src="/images/technical.svg"
            alt="tech"
            width={12}
            height={12}
          />
          <Typography sx={{ color: "#C191FF" }}>Technical</Typography>
        </div>
        <div className="tag-fundamental">
          <Image
            src="/images/fundamental.svg"
            alt="fundamental"
            width={12}
            height={12}
          />
          <Typography sx={{ color: "#FFAE5D" }}>Fundamental</Typography>
        </div>
      </div>
      <Box className="date-indicator">
        <Typography sx={{ color: "#08FF00" }}>DD/MM/YY</Typography>
        <Box className="indicator">
          <CircleIcon sx={{ fontSize: "12px" }} />
          <Typography>Open</Typography>
        </Box>
      </Box>
      <CoinIndicator />
      {/* contents */}
      <AdvanceTicketContent />

      {/* interactions*/}

      <TicketInteraction />
    </>
  );
};

export default AdvanceTicket;
