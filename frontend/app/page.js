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
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Image from "next/image";
import BasicTicket from "../Component/Common/Ticket/basicTicket";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MobileNav from "../Component/Common/Navbar/mobileNav";

export default function Home() {
  // tabs
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // responsive
  const isMobile = useMediaQuery("(max-width:575px)");

  return (
    <Box>
      <Navbar />

      {/* {isMobile && <MobileNav />} */}

      {/* badge cards */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          height: "90px",
          borderBottom: "1px solid #323232",
        }}
      >
        <IconButton
          sx={{
            width: "60px", // Increased size
            height: "60px",
            borderRadius: "50%", // Makes it fully round
            backgroundColor: "#262626", // Button background
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            "&:hover": {
              backgroundColor: "#1a1a1a", // Darker on hover
            },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Card className="badge">
          <Box>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 2,
                padding: "10px",
              }}
            >
              {" "}
              <Image src="/images/btc.svg" alt="btc" width={32} height={32} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "white" }}>
                  BTC
                </Typography>
                <Typography sx={{ fontWeight: 500, color: "#48A648" }}>
                  $83,651.18(1.23)
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
        <Card className="badge">
          <Box>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 2,
                padding: "10px",
              }}
            >
              {" "}
              <Image src="/images/x.svg" alt="btc" width={32} height={32} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "white" }}>
                  XRP
                </Typography>
                <Typography sx={{ fontWeight: 500, color: "#D03636" }}>
                  $2.36(-1.23)
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
        <Card className="badge">
          <Box>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 2,
                padding: "10px",
              }}
            >
              {" "}
              <Image src="/images/bnb.svg" alt="btc" width={32} height={32} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "white" }}>
                  BNB
                </Typography>
                <Typography sx={{ fontWeight: 500, color: "#D03636" }}>
                  $2.36(-1.23)
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
        <Card className="badge">
          <Box>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 2,
                padding: "10px",
              }}
            >
              {" "}
              <Image src="/images/doge.svg" alt="btc" width={32} height={32} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "white" }}>
                  Dogecoin
                </Typography>
                <Typography sx={{ fontWeight: 500, color: "#48A648" }}>
                  $83,651.18(1.23)
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
        <Card className="badge">
          <Box>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 2,
                padding: "10px",
              }}
            >
              {" "}
              <Image src="/images/hype.svg" alt="btc" width={32} height={32} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "white" }}>
                  Hype
                </Typography>
                <Typography sx={{ fontWeight: 500, color: "#48A648" }}>
                  $83,651.18(1.23)
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
        <Card className="badge">
          <Box>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 2,
                padding: "10px",
              }}
            >
              {" "}
              <Image
                src="/images/avalanche.svg"
                alt="btc"
                width={32}
                height={32}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "white" }}>
                  Avalanche
                </Typography>
                <Typography sx={{ fontWeight: 500, color: "#48A648" }}>
                  $83,651.18(1.23)
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
        <IconButton
          sx={{
            width: "60px", // Increased size
            height: "60px",
            borderRadius: "50%", // Makes it fully round
            backgroundColor: "#262626", // Button background
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            "&:hover": {
              backgroundColor: "#1a1a1a", // Darker on hover
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Box display={"flex"}>
        {/* sidebar */}
        <Box className="sidebar">
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
              <Image
                src="/images/gift.svg"
                alt="invite"
                width={24}
                height={24}
              />
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
        </Box>

        {/* middle content */}
        <Box className="main-middle">
          <Box className="middle-tab">
            <Box className="middle-box">
              <Image
                src="/images/coins.svg"
                alt="coins"
                width={65}
                height={30}
              />
              <Typography className="middle-typo">Trending Coins</Typography>
            </Box>
            <Box className="middle-box">
              <Image
                src="/images/trader.svg"
                alt="coins"
                width={32}
                height={32}
              />
              <Typography className="middle-typo">Top Traders</Typography>
            </Box>
            <Box className="middle-box">
              <Image
                src="/images/history.svg"
                alt="coins"
                width={32}
                height={32}
              />
              <Typography className="middle-typo">My Activity</Typography>
            </Box>
            <Box className="middle-box">
              <Image
                src="/images/saved.svg"
                alt="coins"
                width={32}
                height={32}
              />
              <Typography className="middle-typo">View Watchlist</Typography>
            </Box>
          </Box>

          {/* middle center */}
          <Box className="reason-box">
            <Box className="learn-box">
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  color: "white",
                }}
              >
                Top 5 Reasons to use
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  color: "#FFB34F",
                }}
              >
                CoinTicket
              </Typography>
              <Button
                variant="contained"
                sx={{ color: "black", backgroundColor: "white", mb: 2 }}
              >
                Read More
              </Button>
            </Box>
            <Box className="middle-img">
              <img src="/images/middle.png" alt="build" />
            </Box>
          </Box>

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

          {/* <BasicTicket /> */}
        </Box>

        {/* right content */}
        <Box sx={{ marginLeft: 8 }}>
          <Box className="follow-home" sx={{ justifyContent: "center" }}>
            <Typography className="follow-head">Follow Top Traders</Typography>
            <Box className="follow-content">
              <Box display={"flex"} gap={1} sx={{ width: "220px" }}>
                <Avatar
                  src="/images/ctuser.png"
                  alt="profilepic"
                  className="avatar"
                />
                <Box display={"flex"} flexDirection={"column"}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "12px",
                      }}
                    >
                      @anonymous123
                    </Typography>
                    <Button variant="outlined" className="follow-button">
                      Follow
                    </Button>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <img
                      src="/images/ctscore.png"
                      alt="score"
                      className="score"
                    />

                    <Typography sx={{ color: "#08FF00", fontSize: "12px" }}>
                      | Hit rate 76%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box display={"flex"} gap={1}>
                <Avatar
                  src="/images/ctuser.png"
                  alt="profilepic"
                  className="avatar"
                />
                <Box display={"flex"} flexDirection={"column"}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "12px",
                      }}
                    >
                      @anonymous123
                    </Typography>
                    <Button variant="outlined" className="follow-button">
                      Follow
                    </Button>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <img
                      src="/images/ctscore.png"
                      alt="score"
                      className="score"
                    />

                    <Typography sx={{ color: "#08FF00", fontSize: "12px" }}>
                      | Hit rate 76%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box display={"flex"} gap={1}>
                <Avatar
                  src="/images/ctuser.png"
                  alt="profilepic"
                  className="avatar"
                />
                <Box display={"flex"} flexDirection={"column"}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "12px",
                      }}
                    >
                      @anonymous123
                    </Typography>
                    <Button variant="outlined" className="follow-button">
                      Follow
                    </Button>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <img
                      src="/images/ctscore.png"
                      alt="score"
                      className="score"
                    />

                    <Typography sx={{ color: "#08FF00", fontSize: "12px" }}>
                      | Hit rate 76%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box display={"flex"} gap={1}>
                <Avatar
                  src="/images/ctuser.png"
                  alt="profilepic"
                  className="avatar"
                />
                <Box display={"flex"} flexDirection={"column"}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "12px",
                      }}
                    >
                      @anonymous123
                    </Typography>
                    <Button variant="outlined" className="follow-button">
                      Follow
                    </Button>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <img
                      src="/images/ctscore.png"
                      alt="score"
                      className="score"
                    />

                    <Typography sx={{ color: "#08FF00", fontSize: "12px" }}>
                      | Hit rate 76%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
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
              nam similique aliquid earum facilis quod debitis. Suscipit aperiam
              quae laborum pariatur aspernatur.
            </Typography>
            <Button>Upgrade to CT Pro</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
