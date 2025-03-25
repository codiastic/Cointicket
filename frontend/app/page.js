"use client";
import React from "react";
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
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

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

export default function Home() {
  // tabs
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // responsive
  // const isMobile = useMediaQuery("(max-width:575px)");

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
  ];
  return (
    <Box>
      <Navbar />

      {/* badge cards */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          height: "90px",
          borderBottom: "1px solid #323232",
          padding: "0 10px",
          overflowX: isMobile ? "auto" : "visible", // Enable scroll on mobile
          whiteSpace: isMobile ? "nowrap" : "normal", // Keep items in row
        }}
      >
        {/* Only show navigation buttons on desktop */}
        {!isMobile && (
          <IconButton
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

        {/* Crypto Cards (Scrollable on Mobile) */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            scrollbarWidth: "none", // Hide scrollbarF
          }}
        >
          {cryptoData.map((crypto, index) => (
            <Card key={index} className="badge">
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  padding: "5px",
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
                      fontSize: isMobile ? "14px" : "16px",
                    }}
                  >
                    {crypto.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: crypto.color,
                      fontSize: isMobile ? "14px" : "16px",
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
            <Box
              sx={{
                width: "100%",
                typography: "body1",
                // borderBottom: "1px solid #8B8B8B",
              }}
            >
              <TabContext
                value={value}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "white",
                  },
                  "& .MuiTab-root": {
                    color: "white",
                    minWidth: "auto", // Ensures the tabs shrink if needed
                    padding: "6px 12px", // Reduces padding for a smaller tab
                    fontSize: "10px", // Adjust text size for mobile
                  },
                  "& .Mui-selected": {
                    color: "white !important",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly", // Centers tabs
                    alignItems: "center",
                    padding: "2px 4px", // Reduces padding for a tighter look
                    mt: 1,
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    variant="fullWidth" // Ensures tabs take equal space
                    sx={{
                      // width: "100%",
                      "& .MuiTabs-indicator": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <Tab
                      label="Latest"
                      value="1"
                      sx={{
                        flex: 1,
                        textAlign: "center",
                        fontSize: "10px", // Smaller text for mobile
                        padding: "6px 8px", // Compact padding
                        color: "white",
                        "&.Mui-selected": { color: "white" },
                      }}
                    />
                    <Tab
                      label="My Squad"
                      value="2"
                      sx={{
                        flex: 1,
                        textAlign: "center",
                        fontSize: "10px",
                        padding: "6px 8px",
                        color: "white",
                        "&.Mui-selected": { color: "white" },
                      }}
                    />
                    <Tab
                      label="Top Tickets"
                      value="3"
                      sx={{
                        flex: 1,
                        textAlign: "center",
                        fontSize: "10px",
                        padding: "6px 8px",
                        color: "white",
                        "&.Mui-selected": { color: "white" },
                      }}
                    />
                  </TabList>
                </Box>
              </TabContext>
            </Box>

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
                    if (words.length > 10) {
                      e.target.value = e.target.value.substring(
                        0,
                        e.target.selectionStart - 1
                      ); // Prevent more input
                    }
                  }}
                  style={{
                    backgroundColor: "transparent", // Transparent background
                    border: "none", // No border
                    outline: "none", // No active outline
                    width: "auto",
                    color: "white",
                    width: "100%",
                  }}
                />
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,
                    paddingLeft: 10,
                  }}
                >
                  <Image
                    src="/images/Ticket.svg"
                    alt="ticket"
                    width={26}
                    height={26}
                  />
                  <Image
                    src="/images/polls.svg"
                    alt="poll"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/images/insight.svg"
                    alt="insight"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/images/upload.svg"
                    alt="upload"
                    width={24}
                    height={24}
                  />
                </div>
                <Button variant="contained" className="post-button">
                  Post
                </Button>
              </div>
            </Box>

            {/* tabs */}
            <Box
              sx={{
                width: "100%",
                typography: "body1",
                borderBottom: "1px solid #8B8B8B",
              }}
            >
              <TabContext
                value={value}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "white", // Change indicator color
                  },
                  "& .MuiTab-root": {
                    color: "white", // Unselected tab color
                  },
                  "& .Mui-selected": {
                    color: "white !important", // Selected tab color
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between", // Distributes the tabs
                    alignItems: "center",
                    padding: "8px 16px",
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    sx={{
                      width: "100%",
                      "& .MuiTabs-indicator": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <Tab
                      label="Latest"
                      value="1"
                      sx={{
                        marginLeft: "16px",
                        alignSelf: "flex-start",
                        color: "white", // Default color
                        "&.Mui-selected": { color: "white" },
                      }}
                    />
                    <Tab
                      label="My Squad"
                      value="2"
                      sx={{
                        margin: "0 auto",
                        color: "white", // Default color
                        "&.Mui-selected": { color: "white" },
                      }}
                    />{" "}
                    {/* Centers the tab */}
                    <Tab
                      label="Top Tickets"
                      value="3"
                      sx={{
                        marginRight: "16px",
                        alignSelf: "flex-end",
                        color: "white", // Default color
                        "&.Mui-selected": { color: "white" },
                      }}
                    />
                  </TabList>
                </Box>
              </TabContext>
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
