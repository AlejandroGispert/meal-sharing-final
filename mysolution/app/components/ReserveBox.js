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

const reservationTagList = {
  image: "images/thumbnail.png",
  tag1: "Name",
  tag2: "Email",
  tag3: "Phone",
  tag4: "Number of guests",
  buttonTxt: "Submit Reservation",
};
export default function ReserveBox({ mealId }) {
  const [mealOrReviewState, setMealOrReviewState] = useState(true);

  const [reservationData, setReservationData] = useState({
    number_of_guests: "",
    contact_phonenumber: "",
    meal_id: "",
    contact_name: "",
    contact_email: "",
  });
  const [textAndTagsState, setTextAndTagsState] = useState(reservationTagList);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    console.log(reservationData);

    try {
      const response = await fetch(
        "https://meal-sharing-final-backend.onrender.com/reservations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reservationData), // Send the meal data
        }
      );

      if (response.ok) {
        alert("New reservation added!");
        setReservationData({
          number_of_guests: "",
          meal_id: mealId,
          contact_phonenumber: "",
          contact_name: "",
          contact_email: "",
        });
      } else {
        alert("Error creating reservation.");
      }
    } catch (error) {
      console.error("Error creating reservation:", error);
      alert("Error creating reservation.");
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
        Make Reservation
      </Typography>
      <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
        {/* Input for Meal Name */}
        <Box sx={{ mb: 3 }}>
          <label htmlFor="number_of_guests">{textAndTagsState.tag1}</label>
          <TextField
            id="number_of_guests"
            variant="outlined"
            fullWidth
            required
            aria-label={textAndTagsState.tag1}
            onChange={handleChange}
          />
        </Box>

        {/* Input for Description */}
        <Box sx={{ mb: 3 }}>
          <label htmlFor="contact_phonenumber">{textAndTagsState.tag2}</label>
          <TextField
            id="contact_phonenumber"
            variant="outlined"
            fullWidth
            rows={4}
            required
            aria-label={textAndTagsState.tag2}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <label htmlFor="contact_name">{textAndTagsState.tag3}</label>
          <TextField
            id="contact_name"
            variant="outlined"
            fullWidth
            required
            aria-label={textAndTagsState.tag3}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <label htmlFor="contact_email">{textAndTagsState.tag4}</label>
          <TextField
            id="contact_email"
            variant="outlined"
            fullWidth
            required
            aria-label={textAndTagsState.tag4}
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