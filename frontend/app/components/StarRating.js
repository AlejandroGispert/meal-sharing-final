import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    onRatingChange(value); // Call the parent function with the selected rating
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <IconButton key={value} onClick={() => handleStarClick(value)}>
          {value <= rating ? (
            <StarIcon sx={{ color: "yellow" }} />
          ) : (
            <StarBorderIcon sx={{ color: "gray" }} />
          )}
        </IconButton>
      ))}
    </Box>
  );
};

export default StarRating;
