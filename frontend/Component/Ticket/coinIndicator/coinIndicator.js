"use client"
import React from "react";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import { LineChart, Line } from "recharts";

import "./coinIndicator.css";
export default function CoinIndicator() {
  const chartLine = [
    { value: 80 },
    { value: 10 },
    { value: 30 },
    { value: 90 },
    { value: 50 },
    { value: 10 },
    { value: 5 },
  ];

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
      <Box>
        <LineChart width={45} height={14} data={chartLine}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#89CFF0"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </Box>
      <Box className="coin-pricing">
        <Typography>$80,682.93</Typography>
        <Typography color="red">(-1.23%)</Typography>
      </Box>
    </Box>
  );
}
