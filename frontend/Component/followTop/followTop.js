import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import "../../app/home.css";

export default function FollowTop() {
  return (
    <>
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
                <img src="/images/ctscore.png" alt="score" className="score" />

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
                <img src="/images/ctscore.png" alt="score" className="score" />

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
                <img src="/images/ctscore.png" alt="score" className="score" />

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
                <img src="/images/ctscore.png" alt="score" className="score" />

                <Typography sx={{ color: "#08FF00", fontSize: "12px" }}>
                  | Hit rate 76%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
