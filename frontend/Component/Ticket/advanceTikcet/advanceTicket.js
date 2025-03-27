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
import TicketInteraction from "../ticketInteraction/ticketInteraction";
import AdvanceTicketContent from "../ticketContents/advanceTicketContent";
const AdvanceTicket = () => {
  return (
    <>
      <div className="ticket-container">
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
        <div className="tags-div">
          <div className="tag-tech">
            <Image
              src="/images/technical.svg"
              alt="tech"
              width={12}
              height={12}
            />
            <Typography sx={{ color: "#C191FF", fontSize: "10px" }}>
              Technical
            </Typography>
          </div>
          <div className="tag-fundamental">
            <Image
              src="/images/fundamental.svg"
              alt="fundamental"
              width={12}
              height={12}
            />
            <Typography sx={{ color: "#FFAE5D", fontSize: "10px" }}>
              Fundamental
            </Typography>
          </div>
        </div>
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
        <CoinIndicator />
        {/* contents */}
        <AdvanceTicketContent />

        {/* interactions*/}

        <TicketInteraction />
      </div>
    </>
  );
};

export default AdvanceTicket;
