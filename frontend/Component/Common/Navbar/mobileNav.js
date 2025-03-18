import React from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const MobileNav = () => {
  return (
    <Box
      sx={{
        width: "390px",
        border: "1px solid #797979",
        borderRadius: 24,
        display: "flex",
        justifyContent: "space-between", // Distributes items evenly
        padding: "20px",
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
        <HomeOutlinedIcon fontSize="large" sx={{ color: "white" }} />
        <Button
          sx={{
            textAlign: "center",
            minWidth: "unset",
            padding: 0,
            color: "white",
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
        <Image src="/images/workshop.svg" alt="ct" width={30} height={30} />
        <Button sx={{ textAlign: "center", minWidth: "unset", padding: 0 }}>
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
        <Image src="/images/alpha.svg" alt="ct" width={30} height={30} />
        <Button sx={{ textAlign: "center", minWidth: "unset", padding: 0 }}>
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
          fontSize="large"
          sx={{ color: "white" }}
        />
        <Button sx={{ textAlign: "center", minWidth: "unset", padding: 0 }}>
          Notifications
        </Button>
      </Box>
    </Box>
  );
};

export default MobileNav;
