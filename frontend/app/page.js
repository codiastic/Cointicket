"use client";

import "./home.css";
import Navbar from "@/Component/Common/Navbar/navbar";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Image from "next/image";

export default function Home() {
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
        }}
      >
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
      </Box>

      <Box display={"flex"}>
        {/* sidebar */}
        <Box className="sidebar">
          <Box className="sidebar-li">
            <VideocamOutlinedIcon fontSize="medium" sx={{ color: "white" }} />
            <Button className="typo-style">Tutorials</Button>
          </Box>
          <Box className="sidebar-li">
            <TaskAltOutlinedIcon fontSize="medium" sx={{ color: "white" }} />
            <Button className="typo-style">Get Verified</Button>
          </Box>
          <Box className="sidebar-li">
            <Image src="/images/gift.svg" alt="invite" width={24} height={24} />

            <Button className="typo-style">Invite Friends</Button>
          </Box>
          <Box className="sidebar-li">
            <InfoOutlinedIcon fontSize="medium" sx={{ color: "white" }} />
            <Button className="typo-style">FAQ</Button>
          </Box>
          <Box className="sidebar-li">
            <CallOutlinedIcon fontSize="medium" sx={{ color: "white" }} />
            <Button className="typo-style">Contact Us</Button>
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
                sx={{ color: "black", backgroundColor: "white" }}
              >
                Read More
              </Button>
            </Box>
            <Box sx={{ marginTop: "auto" }}>
              <img src="/images/middle.png" alt="build" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
