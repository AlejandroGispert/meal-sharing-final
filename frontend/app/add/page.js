"use client";

import * as React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from "../page.module.css";

export default function Add() {
  const [mealData, setMealData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    max_reservations: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setMealData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Validate fields before submitting
  const validateForm = () => {
    const newErrors = {};

    // Validate Meal Name
    if (!mealData.title.trim()) {
      newErrors.title = "Meal Name is required.";
    } else if (mealData.title.length < 3 || mealData.title.length > 50) {
      newErrors.title = "Meal Name must be between 3 and 50 characters.";
    }

    // Validate Description
    if (!mealData.description.trim()) {
      newErrors.description = "Description is required.";
    } else if (mealData.description.length < 10) {
      newErrors.description =
        "Description must be at least 10 characters long.";
    }

    // Validate Location
    if (!mealData.location.trim()) {
      newErrors.location = "Place is required.";
    }

    // Validate Price
    const priceValue = parseFloat(mealData.price);
    if (
      !mealData.price ||
      isNaN(priceValue) ||
      priceValue <= 0 ||
      priceValue >= 3000
    ) {
      newErrors.price = "Price must be a positive number less than 3000.";
    }

    // Validate Max Reservations
    const maxReservationsValue = parseInt(mealData.max_reservations);
    if (
      !mealData.max_reservations ||
      isNaN(maxReservationsValue) ||
      maxReservationsValue <= 0 ||
      maxReservationsValue > 500
    ) {
      newErrors.max_reservations =
        "Max Reservations must be a positive integer up to 500.";
    }

    setErrors(newErrors);

    // If there are any errors, the form is invalid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    try {
      const response = await fetch(
        "https://meal-sharing-final-backend.onrender.com/meals",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mealData), // Send the meal data
        }
      );

      if (response.ok) {
        alert("New meal created successfully!");
        setMealData({
          title: "",
          description: "",
          location: "",
          price: "",
          max_reservations: "",
        });
      } else {
        alert("Error creating meal.");
      }
    } catch (error) {
      console.error("Error creating meal:", error);
      alert("Error creating meal.");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Add Meal</title>
        <meta name="description" content="Add a new meal" />
        <meta charSet="UTF-8" />
      </Head>

      <main>
        <Container maxWidth="md">
          <Box className={styles.addMealPage}>
            <Typography variant="h4" component="h1">
              Add Meal
            </Typography>
          </Box>
        </Container>

        <Container maxWidth="md">
          <Box
            component="form"
            sx={{ mt: 4, pt: 0, pl: 20, pr: 20 }}
            onSubmit={handleSubmit} // Bind handleSubmit to form submit
            className={styles.addMealPageItems}
          >
            {/* Input for Meal Name */}
            <Box sx={{ mb: 3 }}>
              <label htmlFor="title">Meal Name</label>
              <TextField
                id="title"
                variant="outlined"
                fullWidth
                required
                aria-label="Meal Name"
                value={mealData.title}
                onChange={handleChange}
                error={!!errors.title}
                helperText={errors.title}
              />
            </Box>

            {/* Input for Description */}
            <Box sx={{ mb: 3 }}>
              <label htmlFor="description">Description</label>
              <TextField
                id="description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                aria-label="Description"
                value={mealData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
              />
            </Box>

            {/* Input for Place */}
            <Box sx={{ mb: 3 }}>
              <label htmlFor="location">Place</label>
              <TextField
                id="location"
                variant="outlined"
                fullWidth
                required
                aria-label="Place"
                value={mealData.location}
                onChange={handleChange}
                error={!!errors.location}
                helperText={errors.location}
              />
            </Box>

            {/* Input for Price */}
            <Box sx={{ mb: 3 }}>
              <label htmlFor="price">Price</label>
              <TextField
                id="price"
                type="number"
                variant="outlined"
                fullWidth
                required
                aria-label="Price"
                value={mealData.price}
                onChange={handleChange}
                error={!!errors.price}
                helperText={errors.price}
              />
            </Box>

            {/* Input for Max Reservations */}
            <Box sx={{ mb: 3 }}>
              <label htmlFor="max_reservations">Max Reservations</label>
              <TextField
                id="max_reservations"
                type="number"
                variant="outlined"
                fullWidth
                required
                aria-label="Max Reservations"
                value={mealData.max_reservations}
                onChange={handleChange}
                error={!!errors.max_reservations}
                helperText={errors.max_reservations}
              />
            </Box>

            {/* Submit Button */}
            <Button variant="contained" type="submit" aria-label="Submit">
              Submit
            </Button>
          </Box>
        </Container>
      </main>
    </div>
  );
}
