import React from "react";
import Image from "next/image";
import { Typography, Box } from "@mui/material";

import "./coinIndicator.css";
export default function CoinIndicator() {
  return (
    <Box className="main-indicator-box">
      <Box className="coin-icon">
        {" "}
        <Image src="/images/btc.svg" alt="btc" width={42} height={42} />
        <Box className="coin-name">
          <Typography>BTC</Typography>
          <Typography color="#838383">Bitcoin</Typography>
        </Box>
      </Box>
      <Box className="coin-pricing">
        <Typography>$80,682.93</Typography>
        <Typography color="red">(-1.23%)</Typography>
      </Box>
    </Box>
  );
}
