"use client";

import React, { useState, useEffect } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";

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
  color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
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
    "::placeholder": {
      color: "white",
    },
  },
}));

const placeholderTexts = [
  "Search Bitcoin",
  "Search Solana",
  "Search Ethereum",
  "Search Dogecoin",
];

// responsive

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [openMenu, setOpenMenu] = useState(false);

  const [placeholder, setPlaceholder] = useState(placeholderTexts[0]);
  const [activeTab, setActiveTab] = useState("Home");

  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % placeholderTexts.length;
      setPlaceholder(placeholderTexts[index]);
    }, 3000); // Change placeholder every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className="nav-container"
      style={{ position: isMobile ? "static" : "sticky", top: 0, zIndex: 1000 }}
    >
      {isMobile ? (
        <>
          {/* Mobile Layout */}
          <Box className="nav-content">
            <IconButton onClick={() => setOpenMenu(!openMenu)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Box className="search-fieldbox">
              {" "}
              <Image
                src="/images/logo.svg"
                alt="ct"
                width={25}
                height={25}
                style={{ marginLeft: "4px" }}
              />
              <input
                type="text"
                placeholder={placeholder}
                className="search-input"
              />
            </Box>

            <Avatar
              sx={{
                border: "1px solid #797979",
                color: "#5A0E61",
                backgroundColor: "#D6AADA",
                marginLeft: 1,
              }}
            >
              A
            </Avatar>
          </Box>
        </>
      ) : (
        <>
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
          <div>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
                fontFamily: "Sora,'sans-serif'",
              }}
              className="nav-ul"
            >
              <li
                className={activeTab === "Home" ? "active" : ""}
                onClick={() => setActiveTab("Home")}
              >
                <a
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <HomeOutlinedIcon sx={{ fontSize: "20px", color: "white" }} />
                  Home
                </a>
              </li>
              <li
                className={activeTab === "CT Alpha" ? "active" : ""}
                onClick={() => setActiveTab("CT Alpha")}
              >
                <a
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Image
                    src="images/alpha.svg"
                    alt="alpha"
                    width={18}
                    height={18}
                  />{" "}
                  CT Alpha
                </a>
              </li>
              <li
                className={activeTab === "CT Workshop" ? "active" : ""}
                onClick={() => setActiveTab("CT Workshop")}
              >
                <a
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Image
                    src="images/workshop.svg"
                    alt="alpha"
                    width={18}
                    height={18}
                  />{" "}
                  CT Workshop
                </a>
              </li>
              <li
                className={activeTab === "My Squad" ? "active" : ""}
                onClick={() => setActiveTab("My Squad")}
              >
                <a className="ct-button">
                  <Image
                    src="images/editor_choice.svg"
                    alt="alpha"
                    width={18}
                    height={18}
                  />{" "}
                  CT Pro
                </a>
              </li>
              <li>
                <IconButton>
                  <NotificationsNoneOutlinedIcon
                    sx={{ color: "white", fontSize: "20px" }}
                  />
                </IconButton>
              </li>
              <li>
                <Avatar
                  sx={{
                    border: "1px solid #797979",
                    color: "#5A0E61",
                    backgroundColor: "#D6AADA",
                  }}
                >
                  A
                </Avatar>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
