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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setMealData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

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
          <Box className={styles.header}>
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
