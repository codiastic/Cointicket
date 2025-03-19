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
  Typography,
  useMediaQuery,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import Image from "next/image";
import BasicTicket from "../Component/Ticket/basicTicket";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MobileNav from "../Component/Common/Navbar/mobileNav";
import FollowTop from "../Component/followTop/followTop";
import Sidebar from "../Component/Common/Sidebar/sidebar";
import QuickAction from "../Component/quickAction/quickAction";
import Banner from "../Component/banner/banner";

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
      name: "BTC",
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

      {/* {isMobile && <MobileNav />} */}

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

      {isMobile ? (
        <>
          <Banner />
          <Box>
            <Box className="middle-tab">
              <QuickAction />
            </Box> 

            {/* post line -----------------*/}
            <Box
              sx={{
                marginTop: 1,
                width: "94%",
                height: "auto",
                backgroundColor: "#1C1C1C",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                padding: 2,
              }}
            >
              <Box className="post">
                <Avatar
                  sx={{
                    border: "1px solid #797979",
                    color: "#5A0E61",
                    backgroundColor: "#D6AADA",
                  }}
                >
                  A
                </Avatar>
                <Typography className="middle-typo">
                  What's Your Thoughts ?
                </Typography>
              </Box>
              <Button variant="contained" className="post-button">
                Post
              </Button>
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
              <Button variant="contained" className="post-button">
                <Image
                  src="/images/tikcet.svg"
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
            {/* <BasicTicket /> */}
          </Box>
        </>
      ) : (
        <Box display={"flex"}>
          {/* sidebar */}
          <Box className="sidebar">
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
                backgroundColor: "#1C1C1C",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                padding: 2,
              }}
            >
              <Box className="post">
                <Avatar
                  sx={{
                    border: "1px solid #797979",
                    color: "#5A0E61",
                    backgroundColor: "#D6AADA",
                  }}
                >
                  A
                </Avatar>
                <Typography className="middle-typo">
                  What's Your Thoughts ?
                </Typography>
              </Box>
              <Button variant="contained" className="post-button">
                Post
              </Button>
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
              <Button variant="contained" className="post-button">
                <Image
                  src="/images/tikcet.svg"
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
          </Box>

          {/* right content */}
          <Box sx={{ marginLeft: 8 }}>
            <FollowTop />
            <Box className="follow-home">
              <Box
                sx={{
                  width: 60, // Set equal width & height for a perfect circle
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#212121",
                  borderRadius: "50%", // Makes it fully circular
                  boxShadow: "0px 4px 10px rgba(242, 164, 62, 0.58)", // Improved shadow
                }}
              >
                <Image
                  src="/images/lock_open.svg"
                  alt="lock"
                  width={32}
                  height={32}
                />
              </Box>
              <Typography className="middle-typo">
                Unlock Stoploss & Target Price !
              </Typography>
              <Typography
                sx={{
                  textAlign: "justify",
                  justifyContent: "center",
                  color: "#323232",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                quam officia quis quae, quibusdam exercitationem laudantium rem
                nam similique aliquid earum facilis quod debitis. Suscipit
                aperiam quae laborum pariatur aspernatur.
              </Typography>
              <Button>Upgrade to CT Pro</Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
