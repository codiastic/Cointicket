"use client"; // Required for Next.js 13+ App Router

import { useState, useRef } from "react";
import Lottie from "lottie-react";
import { Rocket as RocketIcon } from "@mui/icons-material"; // Import MUI RocketIcon
import rocketLike from "@/public/animations/rocket.json"; // Import Lottie animation

const LikeButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLiked, setIsLiked] = useState(false); // Track if the button is "liked"
  const lottieRef = useRef(null); // Create a ref for Lottie animation

  const handleClick = () => {
    setIsAnimating(true); // Show Lottie animation
    setIsLiked(true);
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1); // Ensure normal animation speed
      lottieRef.current.goToAndPlay(0, true); // Play animation from start
    }

    // Automatically reset after animation completes
    setTimeout(() => setIsAnimating(false), 2000); // Adjust timing as needed
  };

  return (
    <div
      onClick={handleClick}
      className="like-button"
      style={{ cursor: "pointer", width: 40, height: 40 }}
    >
      {isAnimating ? ( // Show Lottie animation when clicked
        <Lottie
          lottieRef={lottieRef} // Attach ref properly
          animationData={rocketLike}
          loop={false}
          autoplay={true} // Ensure animation starts automatically
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <RocketIcon
          sx={{
            color: isLiked ? "#FF6200" : "#7a7a7a", // Change color after animation
            fontSize: 28,
          }}
        />
      )}
    </div>
  );
};

export default LikeButton;
