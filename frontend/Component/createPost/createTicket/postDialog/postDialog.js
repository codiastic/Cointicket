"use client";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import "./postDialog.css";

const PostDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "rgba(30, 30, 30, 0.6)", // Semi-transparent background
          backdropFilter: "blur(15px)", // Glassmorphism effect
          borderRadius: "12px", // Soft rounded edges
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Subtle shadow
        },
      }}
    >
      <DialogTitle
        sx={{ color: "#FFFFFF", display: "flex", justifyContent: "center" }}
      >
        Ticket Cannot Be Deleted After Posting
      </DialogTitle>
      <DialogContent>
        {" "}
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          {" "}
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white", borderRadius: "80px" }}
            onClick={onClose}
          >
            Back
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white", borderRadius: "80px" }}
          >
            Continue
          </Button>
        </div>
        <FormGroup>
          <FormControlLabel
            required
            control={<Checkbox sx={{ color: "white" }} />}
            label="I agree that the ticket aligns with CT’s content guidelines"
            sx={{
              color: "white",
              marginTop: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </FormGroup>
      </DialogContent>
    </Dialog>
  );
};

export default PostDialog;
