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
import styles from "../page.module.css";

const mealTagList = {
  image: "images/thumbnail.png",
  tag1: "Share your favourite meal!",
  tag2: "Tell us about it!",
  tag3: "Where?",
  tag4: "$",
  buttonTxt: "Add meal",
};
const reviewTagList = {
  image: "images/thumbnail.png",
  tag1: "Number of guests",
  tag2: "Name",
  tag3: "Email",
  tag4: "Phone Number",
  buttonTxt: "Add Reservation",
};

export default function Add() {
  const [mealOrReviewState, setMealOrReviewState] = useState(true);

  const [textAndTagsState, setTextAndTagsState] = useState(mealTagList);
  function handleSwitch() {
    setMealOrReviewState(!mealOrReviewState);

    if (textAndTagsState === mealTagList) {
      setTextAndTagsState(reviewTagList);
    } else {
      setTextAndTagsState(mealTagList);
    }

    console.log(textAndTagsState.tag1);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Add Meal or Review</title>
        <meta name="description" content="add" />
        <meta charSet="UTF-8" />
      </Head>

      <main>
        <Container maxWidth="md">
          <Box className={styles.header}>
            <Typography variant="h4" component="h1">
              Add meal
              <Switch
                checked={mealOrReviewState}
                onChange={handleSwitch}
                name="mealOrReviewState"
                color="primary"
              />
              Add Review
            </Typography>
          </Box>
        </Container>

        <Container maxWidth="md">
          <Box component="form" sx={{ mt: 4, pt: 0, pl: 20, pr: 20 }}>
            {/* Input for Meal Name */}
            <Box sx={{ mb: 3 }}>
              <label htmlFor="mealName">{textAndTagsState.tag1}</label>
              <TextField
                id="mealName"
                variant="outlined"
                fullWidth
                required
                aria-label={textAndTagsState.tag1}
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
              />
            </Box>

            {/* Input for Place */}
            <Box sx={{ mb: 3 }}>
              <label htmlFor="place">{textAndTagsState.tag3}</label>
              <TextField
                id="place"
                variant="outlined"
                fullWidth
                required
                aria-label={textAndTagsState.tag3}
              />
            </Box>

            {/* Input for Price */}
            <Box sx={{ mb: 3 }}>
              <label htmlFor="price">{textAndTagsState.tag4}</label>
              <TextField
                id="price"
                type="number"
                variant="outlined"
                fullWidth
                required
                aria-label={textAndTagsState.tag4}
              />
            </Box>

            {/* Submit Button */}
            <Button variant="contained" type="submit" aria-label="Submit">
              {textAndTagsState.buttonTxt}
            </Button>
          </Box>
        </Container>
      </main>
    </div>
  );
}
