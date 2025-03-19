import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import "./quickAction.css";

export default function QuickAction() {
  return (
    <Box className="middle-tab">
      <Box className="middle-box">
        <Image src="/images/coins.svg" alt="coins" width={65} height={30} />
        <Typography className="middle-typo">Trending Coins</Typography>
      </Box>
      <Box className="middle-box">
        <Image src="/images/trader.svg" alt="coins" width={32} height={32} />
        <Typography className="middle-typo">Top Traders</Typography>
      </Box>
      <Box className="middle-box">
        <Image src="/images/history.svg" alt="coins" width={32} height={32} />
        <Typography className="middle-typo">My Activity</Typography>
      </Box>
      <Box className="middle-box">
        <Image src="/images/saved.svg" alt="coins" width={32} height={32} />
        <Typography className="middle-typo">View Watchlist</Typography>
      </Box>
    </Box>
  );
}
