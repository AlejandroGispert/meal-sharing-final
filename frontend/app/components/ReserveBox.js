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
    meal_id: mealId,
    contact_name: "",
    contact_email: "",
  });

  const [textAndTagsState, setTextAndTagsState] = useState(reservationTagList);

  // Function to convert data to query string format
  const toQueryString = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [id]:
        id === "meal_id" || id === "number_of_guests" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Basic form validation
    if (
      !reservationData.contact_name ||
      !reservationData.contact_email ||
      !reservationData.contact_phonenumber ||
      !reservationData.number_of_guests ||
      !reservationData.meal_id
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const queryString = toQueryString(reservationData);
      const url = `https://meal-sharing-final-backend.onrender.com/reservations?${queryString}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("New reservation added!");

        // Reset form
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
        height: "900px", // Set fixed height to 900 pixels
        overflowY: "auto",
      }}
    >
      <Typography variant="h5" component="h2">
        Make Reservation
      </Typography>
      <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
        {/* Input for Contact Name */}
        <Box sx={{ mb: 3 }}>
          <label htmlFor="contact_name">{textAndTagsState.tag1}</label>
          <TextField
            id="contact_name"
            variant="outlined"
            fullWidth
            required
            aria-label={textAndTagsState.tag1}
            onChange={handleChange}
          />
        </Box>

        {/* Input for Contact Email */}
        <Box sx={{ mb: 3 }}>
          <label htmlFor="contact_email">{textAndTagsState.tag2}</label>
          <TextField
            id="contact_email"
            variant="outlined"
            fullWidth
            rows={4}
            required
            aria-label={textAndTagsState.tag2}
            onChange={handleChange}
          />
        </Box>

        {/* Input for Phone Number */}
        <Box sx={{ mb: 3 }}>
          <label htmlFor="contact_phonenumber">{textAndTagsState.tag3}</label>
          <TextField
            id="contact_phonenumber"
            variant="outlined"
            fullWidth
            required
            aria-label={textAndTagsState.tag3}
            onChange={handleChange}
          />
        </Box>

        {/* Input for Number of Guests */}
        <Box sx={{ mb: 3 }}>
          <label htmlFor="number_of_guests">{textAndTagsState.tag4}</label>
          <TextField
            id="number_of_guests"
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
