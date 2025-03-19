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
  MenuItem,
} from "@mui/material";
import React from "react";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./basicTicket.css";
import "../../app/home.css";
import UserGrid from "../userGrid/userGrid";

const BasicTicket = () => {
  const options = ["1", "2", "3", "4"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="header">
      <Card className="ticket">
        <CardContent className="content">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <UserGrid />
            <Box>
              <IconButton>
                <BookmarkAddOutlinedIcon sx={{ color: "white" }} />
                <MoreVertIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BasicTicket;
