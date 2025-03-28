"use client";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const PreviewDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#121212",
        },
      }}
    >
      {" "}
      <DialogContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",

            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%", // Ensures full width
              maxWidth: "500px", // Limits width
              gap: "200px", // Adjusts spacing between columns
            }}
          >
            <div>
              <Typography>Ticket Price</Typography>
              <Typography>Trade Type</Typography>
              <Typography>Upside</Typography>
              <Typography>Time Frame</Typography>
            </div>
            <div>
              <Typography>$83,868.12</Typography>
              <Typography sx={{ color: "#07CC00" }}>Bullish</Typography>
              <Typography>15%</Typography>
              <Typography>3 weeks</Typography>
            </div>
          </div>

          {/* Centered Button */}
          <Button
            variant="contained"
            sx={{
              width: "260px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              borderRadius: "80px",
            }}
          >
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;
