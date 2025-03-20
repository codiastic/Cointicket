import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import "./upgradeCT.css";

const UpgrateToCT = () => {
  return (
    <Box className="follow-home upgrade-box">
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
          margin: "1rem",
        }}
      >
        <Image src="/images/lock_open.svg" alt="lock" width={32} height={32} />
      </Box>
      <Typography className="middle-typo upgrade-box-title">
        Unlock Stoploss & Target Price !
      </Typography>
      <Typography
        className="upgrade-box-content"
        // sx={{
        //   textAlign: "justify",
        //   justifyContent: "center",
        // }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quam
        officia quis quae, quibusdam exercitationem laudantium rem
      </Typography>
      <Button className="upgrade-btn">Upgrade to CT Pro</Button>
    </Box>
  );
};

export default UpgrateToCT;
