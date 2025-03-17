"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./navbar.css";

// buttons
const pages = ["Home", "CT Alpha", "CT Workshop"];

// searchbar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#232323",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontFamily: "Poppins, 'sans-serif'",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  return (
    <AppBar className="nav-container" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="search">
            <Image src="/images/logo.svg" alt="ct" width={40} height={40} />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search “Cryptocurrencies” or “User” "
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>{" "}
          <Box sx={{ display: { xs: "none", md: "flex", marginLeft: "10%" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Sora, sans-serif",
                }}
              >
                {page}
              </Button>
            ))}

            <Button>CT Pro</Button>
          </Box>
          <Box className="right-section">
            <IconButton>
              <NotificationsNoneOutlinedIcon className="icon" />
            </IconButton>
            <Avatar
              sx={{
                border: "1px solid #797979",
                color: "#5A0E61",
                backgroundColor: "#D6AADA",
              }}
            >
              A
            </Avatar>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
