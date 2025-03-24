"use client"
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

import "./sidebar.css";

export default function Sidebar() {
  return (
    <>
      <Box className="sidebar-li">
        <ul className="typo-style">
          <div className="typo-tags">
            <VideocamOutlinedIcon />
            <li>Tutorials</li>
          </div>
          <div className="typo-tags">
            <TaskAltOutlinedIcon />
            <li>Get Verified</li>
          </div>
          <div className="typo-tags">
            <Image src="/images/gift.svg" alt="invite" width={24} height={24} />
            <li>Invite Friends</li>
          </div>
          <div className="typo-tags">
            <InfoOutlinedIcon />
            <li>FAQ's</li>
          </div>
          <div className="typo-tags">
            <CallOutlinedIcon />
            <li>Contact Us</li>
          </div>
        </ul>
      </Box>
    </>
  );
}
