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
        <Button className="typo-style">
          {" "}
          <VideocamOutlinedIcon fontSize="medium" sx={{ color: "white" }} />
          Tutorials
        </Button>
      </Box>
      <Box className="sidebar-li">
        <Button className="typo-style">
          {" "}
          <TaskAltOutlinedIcon fontSize="medium" sx={{ color: "white" }} />
          Get Verified
        </Button>
      </Box>
      <Box className="sidebar-li">
        <Button className="typo-style">
          {" "}
          <Image src="/images/gift.svg" alt="invite" width={24} height={24} />
          Invite Friends
        </Button>
      </Box>
      <Box className="sidebar-li">
        <Button className="typo-style">
          <InfoOutlinedIcon fontSize="medium" sx={{ color: "white" }} />
          FAQ
        </Button>
      </Box>
      <Box className="sidebar-li">
        <Button className="typo-style">
          {" "}
          <CallOutlinedIcon fontSize="medium" sx={{ color: "white" }} />
          Contact Us
        </Button>
      </Box>
    </>
  );
}
