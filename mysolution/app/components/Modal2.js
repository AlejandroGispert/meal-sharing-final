"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import StarRating from "./StarRating";
import styles from "../page.module.css";

const reviewTagList = {
  image: "images/thumbnail.png",
  tag1: "Title",
  tag2: "Description",
  tag3: "Stars",
  buttonTxt: "Submit",
};
export default function Modal2({ mealId }) {
  const [mealOrReviewState, setMealOrReviewState] = useState(true);
  const [starState, setStarState] = useState(0);
  const [reviewData, setReviewData] = useState({
    title: "",
    description: "",
    meal_id: mealId,
    stars: starState,
  });
  const [textAndTagsState, setTextAndTagsState] = useState(reviewTagList);

  const handleRatingChange = (selectedRating) => {
    setStarState(selectedRating);
    setReviewData((prevData) => ({
      ...prevData,
      stars: selectedRating,
    }));
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setReviewData((prevData) => ({
      ...prevData,
      [id]: id === "stars" ? parseInt(value) : value, // Parse stars as integer
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    const { title, description, stars, meal_id } = reviewData;

    try {
      const response = await fetch(
        `https://meal-sharing-final-backend.onrender.com/reviews?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(
          description
        )}&stars=${stars}&meal_id=${meal_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("New review added!");
        setReviewData({
          title: "",
          description: "",
          meal_id: mealId,
          stars: starState,
        });
      } else {
        const errorData = await response.json();
        console.log("Error response from server:", errorData);
        alert(`Error creating review: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error creating review:", error);
      alert("Error creating review.");
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 5,
        height: "900px", // Set fixed height to 500 pixels
        overflowY: "auto",
      }}
    >
      <Typography variant="h5" component="h2">
        {/* Add meal */}
        {/* <Switch
              checked={mealOrReviewState}
              onChange={handleSwitch}
              name="mealOrReviewState"
              color="primary"
            /> */}
        Add Review {<StarRating onRatingChange={handleRatingChange} />}
      </Typography>
      <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
        {/* Input for Meal Name */}
        <Box sx={{ mb: 3 }}>
          <label htmlFor="title">{textAndTagsState.tag1}</label>
          <TextField
            id="title"
            variant="outlined"
            fullWidth
            required
            aria-label={textAndTagsState.tag1}
            onChange={handleChange}
          />
        </Box>

        {/* Input for Description */}
        <Box sx={{ mb: 3 }}>
          <label htmlFor="description">{textAndTagsState.tag2}</label>
          <TextField
            id="description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            aria-label={textAndTagsState.tag2}
            onChange={handleChange}
          />
        </Box>

        {/* Submit Button */}
        <Button variant="contained" type="submit" aria-label="Submit">
          {textAndTagsState.buttonTxt}
        </Button>
      </Box>
    </Container>
  );
}
