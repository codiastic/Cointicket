"use client";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Menu,
  Grid,
  MenuItem,
} from "@mui/material";
import React from "react";
import Image from "next/image";
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
      <Grid className="ticket">
        <Box>
          <UserGrid />
        </Box>
        <Box sx={{ paddingRight: 2 }}>
          <IconButton>
            <BookmarkAddOutlinedIcon sx={{ color: "white" }} />
            <MoreVertIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Grid>
      {/* indicator */}
      <Box className="date-indicator">
        <Typography sx={{ color: "#08FF00" }}>DD/MM/YYY</Typography>
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
