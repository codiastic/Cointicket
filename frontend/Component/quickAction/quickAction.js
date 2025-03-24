"use client"
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

import "./quickAction.css";

export default function QuickAction() {
  return (
    <Box className="middle-tab">
      <Button className="middle-box">
        <Image src="/images/coins.svg" alt="coins" width={65} height={30} />
        Trending Coins
      </Button>
      <Button className="middle-box">
        <Image src="/images/trader.svg" alt="coins" width={32} height={32} />
        Top Traders
      </Button>
      <Button className="middle-box">
        <Image src="/images/history.svg" alt="coins" width={32} height={32} />
        My Activity
      </Button>
      <Button className="middle-box">
        <Image src="/images/saved.svg" alt="coins" width={32} height={32} />
        View Watchlist
      </Button>
    </Box>
  );
}
