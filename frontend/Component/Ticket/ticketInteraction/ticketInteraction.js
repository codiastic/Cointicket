import { Box, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import RocketIcon from "@mui/icons-material/Rocket";
import Image from "next/image";

import "./ticketInteraction.css";

export default function TicketInteraction() {
  return (
    <div className="interaction-main">
      <Box className="rocket-interaction">
        <Typography>124k</Typography>
        <IconButton>
          <RocketIcon sx={{ color: "#7a7a7a" }} />
        </IconButton>
      </Box>
      <Box className="rocket-interaction">
        <Typography>35k</Typography>
        <IconButton>
          <RocketIcon sx={{ transform: "rotate(180deg)", color: "#7a7a7a" }} />
        </IconButton>
      </Box>
      <Box className="rocket-interaction">
        <Typography>50</Typography>
        <IconButton>
          <Image
            src="/images/Comment.svg"
            alt="comment"
            width={24}
            height={24}
          />
        </IconButton>
      </Box>
      <IconButton>
        <Image src="/images/Share.svg" alt="comment" width={24} height={24} />
      </IconButton>
    </div>
  );
}
