import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
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
  const [reservationData, setReservationData] = useState({
    number_of_guests: "",
    contact_phonenumber: "",
    meal_id: mealId,
    contact_name: "",
    contact_email: "",
  });

  const [errors, setErrors] = useState({});

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
      [id]: id === "number_of_guests" ? parseInt(value) : value,
    }));
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    // Validate name (non-empty, at least 2 characters)
    if (
      !reservationData.contact_name ||
      reservationData.contact_name.length < 2
    ) {
      newErrors.contact_name = "Name must be at least 2 characters long.";
    }

    // Validate email (simple regex for valid email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !reservationData.contact_email ||
      !emailRegex.test(reservationData.contact_email)
    ) {
      newErrors.contact_email = "Please enter a valid email address.";
    }

    // Validate phone number (basic regex for phone format)
    const phoneRegex = /^\+?[\d\s\-()]{7,}$/;
    if (
      !reservationData.contact_phonenumber ||
      !phoneRegex.test(reservationData.contact_phonenumber)
    ) {
      newErrors.contact_phonenumber = "Please enter a valid phone number.";
    }

    // Validate number of guests (must be a positive integer greater than 0)
    if (
      !reservationData.number_of_guests ||
      reservationData.number_of_guests <= 0
    ) {
      newErrors.number_of_guests =
        "Please enter a valid number of guests (at least 1).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
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
            error={!!errors.contact_name}
            helperText={errors.contact_name}
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
            error={!!errors.contact_email}
            helperText={errors.contact_email}
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
            error={!!errors.contact_phonenumber}
            helperText={errors.contact_phonenumber}
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
            error={!!errors.number_of_guests}
            helperText={errors.number_of_guests}
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
