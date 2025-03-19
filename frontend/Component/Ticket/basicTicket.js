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
          <UserGrid />
          {/* <Box className="left">
            <IconButton>
              <BookmarkAddOutlinedIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default BasicTicket;
