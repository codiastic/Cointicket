"use client";
import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  IconButton,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Image from "next/image";

import "./createPost.css";
import NumberPicker from "./numberPicker/numberPicker";

const CreatePost = ({ open, onClose }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onUpload) {
      onUpload(file); // Pass the selected file to parent component
    }
  };
  return (
    <>
      <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            height: "480px", // Fixed height
            maxHeight: "100vh", // Responsive for smaller screens
            borderRadius: "12px",
            backgroundColor: "rgba(30, 30, 30, 0.6)", // Semi-transparent background
            backdropFilter: "blur(10px)", // Blur effect for glassmorphism
            borderRadius: "12px", // Soft rounded edges
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Subtle shadow
          },
        }}
      >
        {/* title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "transparent", // Transparent to allow backdrop-filter effect
            padding: "8px 16px",
            position: "relative",
          }}
        >
          {/* Back Button on the Left */}
          <IconButton
            aria-label="back"
            onClick={onClose}
            sx={{ color: "white" }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          {/* Centered Title */}
          <DialogTitle
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              fontSize: "18px",
              marginLeft: "-40px", // Adjust for perfect centering
            }}
          >
            Create Ticket
          </DialogTitle>

          {/* Close Button on the Right */}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent
          dividers
          sx={{
            backgroundColor: "transparent",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {/* search coins */}
          <div
            className="search-coin"
            style={{
              display: "flex",
              alignItems: "center",
              width: "450px",
              height: "50px",
              border: "1px solid #3D3D3D",
              borderRadius: "12px",
              padding: "0 10px",
              backgroundColor: "transparent",
            }}
          >
            <input
              type="text"
              placeholder="Search Coin"
              style={{
                flex: 1,
                height: "100%",
                fontFamily: "Poppins, 'sans-serif'",
                color: "#B8B8B8",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
              }}
            />
            <SearchIcon sx={{ color: "#B8B8B8", cursor: "pointer" }} />
          </div>
          {/* prediction button */}
          <div className="prediction-buttons-container">
            <Button
              variant="outlined"
              sx={{ color: "#07CC00", border: "1px solid #07CC00" }}
            >
              <KeyboardDoubleArrowUpIcon />
              Bullish
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#CC0003", border: "1px solid #FF1F22" }}
            >
              <KeyboardDoubleArrowUpIcon />
              Bearish
            </Button>
          </div>
          {/* analysis lock */}
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
          >
            <Image
              src="/images/createlock.svg"
              alt="lock"
              width={22}
              height={22}
            />{" "}
            <Typography
              sx={{ color: "#B8B8B8", fontFamily: "Poppins,'sans-serif'" }}
            >
              Select Analysis
            </Typography>
          </div>
          {/* percent prrediction */}
          <Typography
            sx={{
              color: "white",
              fontFamily: "Poppins,'sans-serif'",
              marginTop: 5,
            }}
          >
            Select Potential <span style={{ color: "#07CC00" }}>upside</span>
          </Typography>

          <div className="percent-main">
            <div className="percent-text">
              {" "}
              <input
                type="text"
                placeholder="eg.200%"
                className="percent-textarea"
              />
            </div>
            <Box
              sx={{
                border: "1px solid #292929",
                height: "50px",
                width: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
                color: "white",
              }}
            >
              %
            </Box>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
          >
            <Image
              src="/images/createlock.svg"
              alt="lock"
              width={22}
              height={22}
            />{" "}
            <Typography
              sx={{ color: "#B8B8B8", fontFamily: "Poppins,'sans-serif'" }}
            >
              Profit Target/Stop Loss
            </Typography>
          </div>

          {/* time scroller */}
          <Typography
            sx={{
              color: "white",
              fontFamily: "Poppins,'sans-serif'",
              marginTop: 5,
            }}
          >
            Select Time Horizon
          </Typography>
          <div>
            <NumberPicker />
          </div>

          {/* caption */}
          <Typography
            sx={{
              color: "white",
              fontFamily: "Poppins,'sans-serif'",
              marginTop: 2,
            }}
          >
            Enter Captions <span style={{ fontSize: "12px" }}>(optional)</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              border: "1px solid #292929",
              borderRadius: "6px",
              padding: 2,
              mt: 2,
            }}
          >
            <Avatar
              sx={{
                border: "1px solid #797979",
                color: "#000000",
                backgroundColor: "#CEB4FF",
              }}
            >
              A
            </Avatar>
            <textarea
              placeholder="What's Your Thoughts ?"
              onInput={(e) => {
                let words = e.target.value
                  .split(/\s+/)
                  .filter((word) => word !== ""); // Count words
                if (words.length > 10) {
                  e.target.value = e.target.value.substring(
                    0,
                    e.target.selectionStart - 1
                  ); // Prevent more input
                }
              }}
              className="create-text"
            />
            <div>
              {" "}
              <IconButton onClick={handleButtonClick}>
                <Image
                  src="/images/upload.svg"
                  alt="upload"
                  width={26}
                  height={26}
                />
              </IconButton>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*" // Allow only images
                onChange={handleFileChange}
              />
            </div>
          </Box>
          <div className="buttons-container">
            <Button variant="contained" className="final-button">
              Preview
            </Button>
            <Button variant="contained" className="final-button">
              Post
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatePost;
