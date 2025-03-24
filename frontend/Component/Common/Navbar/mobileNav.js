"use client"
import React from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const MobileNav = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "6px",
        right: 0,
        width: "100%",
        height: "60px",
        border: "1px solid #797979",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-evenly", // Distributes items evenly
        alignItems: "center",
        gap: "2px",
        background: "rgba(255, 255, 255, 0.1)", // Transparent background
        backdropFilter: "blur(10px)", // Blur effect
        WebkitBackdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      {/** Home */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <HomeOutlinedIcon fontSize="18px" sx={{ color: "white" }} />
        <Button
          sx={{
            textAlign: "center",
            minWidth: "unset",
            padding: 0,
            color: "white",
            fontSize: "10px",
          }}
        >
          HOME
        </Button>
      </Box>

      {/** CT Workshop */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Image src="/images/workshop.svg" alt="ct" width={18} height={18} />
        <Button
          sx={{
            textAlign: "center",
            minWidth: "unset",
            padding: 0,
            fontSize: "10px",
            color: "white",
          }}
        >
          CT Workshop
        </Button>
      </Box>

      {/** CT Alpha */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Image src="/images/alpha.svg" alt="ct" width={18} height={18} />
        <Button
          sx={{
            textAlign: "center",
            minWidth: "unset",
            padding: 0,
            fontSize: "10px",
            color: "white",
          }}
        >
          CT Alpha
        </Button>
      </Box>

      {/** Notifications */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <NotificationsNoneOutlinedIcon
          fontSize="18px"
          sx={{ color: "white" }}
        />
        <Button
          sx={{
            textAlign: "center",
            minWidth: "unset",
            padding: 0,
            fontSize: "10px",
            color: "white",
          }}
        >
          Notifications
        </Button>
      </Box>
    </Box>
  );
};

export default MobileNav;
