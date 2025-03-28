"use client";
import React, { useState, useRef } from "react";
import "./home.css";
import Navbar from "@/Component/Common/Navbar/navbar";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  Paper,
} from "@mui/material";

import Image from "next/image";
import BasicTicket from "../Component/Ticket/basicTicket/basicTicket";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MobileNav from "../Component/Common/Navbar/mobileNav";
import FollowTop from "../Component/followTop/followTop";
import Sidebar from "../Component/Common/Sidebar/sidebar";
import QuickAction from "../Component/quickAction/quickAction";
import Banner from "../Component/banner/banner";
import UpgrateToCT from "@/Component/upgradeCT/upgradeToCT";
import AdvanceTikcet from "@/Component/Ticket/advanceTikcet/advanceTicket";
import Tabs from "@/Component/tabs/tabs";
import CreateTicket from "@/Component/createPost/createTicket/createTicket";
// import CreateTicket from "@/Component/Ticket/createPost/createTicket";

export default function Home() {
  // tabs

  // responsive

  const isMobile = useMediaQuery("(max-width:768px)"); // Detect mobile

  const cryptoData = [
    {
      name: '"BTC"',
      price: "$83,651.18 (1.23)",
      color: "#48A648",
      icon: "/images/btc.svg",
    },
    {
      name: "XRP",
      price: "$2.36 (-1.23)",
      color: "#D03636",
      icon: "/images/x.svg",
    },
    {
      name: "BNB",
      price: "$2.36 (-1.23)",
      color: "#D03636",
      icon: "/images/bnb.svg",
    },
    {
      name: "Dogecoin",
      price: "$83,651.18 (1.23)",
      color: "#48A648",
      icon: "/images/doge.svg",
    },
    {
      name: "Hype",
      price: "$83,651.18 (1.23)",
      color: "#48A648",
      icon: "/images/hype.svg",
    },
    {
      name: "Avalanche",
      price: "$83,651.18 (1.23)",
      color: "#48A648",
      icon: "/images/avalanche.svg",
    },
    {
      name: "Avalanche",
      price: "$83,651.18 (1.23)",
      color: "#48A648",
      icon: "/images/avalanche.svg",
    },
    {
      name: "Avalanche",
      price: "$83,651.18 (1.23)",
      color: "#48A648",
      icon: "/images/avalanche.svg",
    },
  ];

  const scrollRef = useRef(null); // Reference for scrollable div

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  const [open, setOpen] = useState(false);
  const [openTicket, setOpenTicket] = useState(false);

  const handleTicketOpen = () => {
    setOpenTicket(true);
  };
  const handleClose = () => {
    setOpenTicket(false);
  };

  const buttonRef = useRef(null);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Navbar />

      {/* badge cards */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          height: "90px",
          borderBottom: "1px solid #323232",
          padding: "0 2px",
        }}
      >
        {/* Only show navigation buttons on desktop */}
        {!isMobile && (
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#262626",
              color: "white",
              "&:hover": { backgroundColor: "#1a1a1a" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        )}

        {/* Scrollable Cards */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto", // Enables scrolling
            scrollBehavior: "smooth", // Smooth scrolling
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome/Safari
            flex: "1", // Makes it take full available space
          }}
        >
          {cryptoData.map((crypto, index) => (
            <Card key={index} className="badge">
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  // padding: "12px",
                }}
              >
                <Image
                  src={crypto.icon}
                  alt={crypto.name}
                  width={32}
                  height={32}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "white",
                      fontSize: isMobile ? "12px" : "14px",
                    }}
                  >
                    {crypto.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: crypto.color,
                      fontSize: isMobile ? "10px" : "12px",
                    }}
                  >
                    {crypto.price}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Only show navigation buttons on desktop */}
        {!isMobile && (
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#262626",
              color: "white",
              "&:hover": { backgroundColor: "#1a1a1a" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Box>

      {/* mobile----------------------------------------------------------------------------------------------- */}
      {isMobile ? (
        <>
          <Banner />
          <Box>
            <Box className="middle-tab">
              <QuickAction />
            </Box>

            {/* tabs */}
            <div style={{ width: "100%", borderBottom: "1px solid #8B8B8B" }}>
              <Tabs />
            </div>

            {/* buttons */}
            <Box className="screen-buttons">
              <Button variant="contained" className="button-screen">
                <Image
                  src="/images/Ticket.svg"
                  alt="coins"
                  width={21}
                  height={21}
                />
                Tickets
              </Button>
              <Button variant="contained" className="button-screen">
                <Image
                  src="/images/polls.svg"
                  alt="coins"
                  width={21}
                  height={21}
                />
                Polls
              </Button>
              <Button variant="contained" className="button-screen">
                <Image
                  src="/images/insight.svg"
                  alt="coins"
                  width={21}
                  height={21}
                />
                Insights
              </Button>
            </Box>

            {/* Ticket */}
            <BasicTicket />
            <AdvanceTikcet />
          </Box>
          {/* boottom nav */}
          <MobileNav />
        </>
      ) : (
        // desktop-------------------------------------------------------------------------------------------------------
        <Box className="main-content-div">
          {/* sidebar */}
          <Box
            className="sidebar"
            sx={{
              position: "sticky",
              top: 80, // Stick after scrolling 20px
              height: "100vh", // Make it full height
              overflowY: "auto",
            }}
          >
            <Sidebar />
          </Box>

          {/* middle content */}
          <Box className="main-middle">
            {/* Quick Buttons */}
            <QuickAction />

            {/* middle banner */}
            <Banner />

            {/* post line */}
            <Box
              sx={{
                marginTop: 1,
                width: "94%",
                height: "auto",
                border: "1px solid #3D3D3D",
                borderRadius: "8px",
                padding: 2,
              }}
            >
              <Box className="post">
                <Avatar
                  sx={{
                    border: "1px solid #797979",
                    color: "#000000",
                    backgroundColor: "#CEB4FF",
                  }}
                >
                  A
                </Avatar>

                <textarea
                  placeholder="What's Your Thoughts ?"
                  onInput={(e) => {
                    let words = e.target.value
                      .split(/\s+/)
                      .filter((word) => word !== ""); // Count words
                    if (words.length > 500) {
                      e.target.value = e.target.value.substring(
                        0,
                        e.target.selectionStart - 1
                      ); // Prevent more input
                    }
                  }}
                  className="create-text"
                />
                <div style={{ position: "relative", display: "inline-block" }}>
                  <Button
                    ref={buttonRef}
                    variant="contained"
                    className="post-button"
                    onClick={handleClickOpen}
                  >
                    Post
                  </Button>
                  {open && (
                    <Paper
                      style={{
                        position: "absolute",
                        top: "100%", // Below the button
                        left: "50%", // Center it horizontally
                        transform: "translateX(-50%)", // Shift back to perfect center
                        zIndex: 10,
                        padding: "10px",
                        marginTop: "8px", // Small gap below the button
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                        backgroundColor: "rgba(30, 30, 30, 0.6)", // Semi-transparent background
                        backdropFilter: "blur(15px)", // Glassmorphism effect
                        borderRadius: "12px", // Soft rounded edges
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Subtle shadow
                      }}
                    >
                      {/* <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          fontWeight: 600,
                          fontFamily: "Poppins,sans-serif",
                          color: "white",
                        }}
                      >
                        Post
                      </Typography> */}
                      <Button
                        variant="outlined"
                        className="post-button-pop"
                        onClick={handleTicketOpen}
                      >
                        <Image
                          src="/images/Ticket.svg"
                          alt="coins"
                          width={22}
                          height={22}
                        />
                        Tickets
                      </Button>
                      <CreateTicket open={openTicket} onClose={handleClose} />
                      <Button variant="outlined" className="post-button-pop">
                        {" "}
                        <Image
                          src="/images/polls.svg"
                          alt="coins"
                          width={22}
                          height={22}
                        />
                        Polls
                      </Button>
                      <Button variant="outlined" className="post-button-pop">
                        <Image
                          src="/images/insight.svg"
                          alt="coins"
                          width={22}
                          height={22}
                        />
                        Insights
                      </Button>
                    </Paper>
                  )}
                </div>
              </Box>
            </Box>

            {/* tabs */}
            <Box
              sx={{
                width: "100%",
                borderBottom: "1px solid #8B8B8B",
              }}
            >
              <Tabs />
            </Box>

            {/* buttons */}
            <Box className="screen-buttons">
              <Button variant="contained" className="button-screen">
                <Image
                  src="/images/Ticket.svg"
                  alt="coins"
                  width={32}
                  height={32}
                />
                Tickets
              </Button>
              <Button variant="contained" className="button-screen">
                <Image
                  src="/images/polls.svg"
                  alt="coins"
                  width={32}
                  height={32}
                />
                Polls
              </Button>
              <Button variant="contained" className="button-screen">
                <Image
                  src="/images/insight.svg"
                  alt="coins"
                  width={32}
                  height={32}
                />
                Insights
              </Button>
            </Box>

            {/* Ticket */}

            <BasicTicket />
            <AdvanceTikcet />
          </Box>

          {/* right content */}
          <Box
            sx={{
              position: "sticky",
              top: 50, // Stick after scrolling 20px
              height: "100vh", // Make it full height
            }}
          >
            <FollowTop />
            <UpgrateToCT />
          </Box>
        </Box>
      )}
    </Box>
  );
}
