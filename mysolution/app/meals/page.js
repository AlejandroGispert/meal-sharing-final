"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../page.module.css";
import { Grid2 } from "@mui/material"; // Make sure you're importing Grid2 correctly
import TextField from "@mui/material/TextField";
import Image from "next/image";
import Modal from "../components/Modal";

const fetchData = async () => {
  const response = await fetch(
    "https://meal-sharing-final-backend.onrender.com/meals/"
  );
  const data = await response.json();
  console.log(data);
  return data;
};

const fetchDataSingle = async (mealId) => {
  const response = await fetch(
    `https://meal-sharing-final-backend.onrender.com/meals/${mealId}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export default function Meals() {
  const [fetchedMeals, setMeals] = useState([]);
  const [fetchedSingleMeal, setSingleMeal] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentMealId, setCurrentMealId] = useState(null);

  const handleOpenModal = async (mealId) => {
    try {
      const meal = await fetchDataSingle(mealId);
      setSingleMeal(meal[0]);
      setCurrentMealId(mealId);
      setOpenModal(true);
    } catch (error) {
      console.error("Error fetching single meal:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setMeals(data); // Set the fetched meals array directly
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    getData();
  }, []);

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div className={styles.header}>
        <TextField
          label="Search meal"
          variant="outlined"
          value={inputValue}
          onChange={handleChangeInput}
        />
      </div>

      {/* The Modal component */}
      <Modal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        fetchedSingleMeal={fetchedSingleMeal}
        currentMealId={currentMealId}
      />

      {/* Grid for the Meals */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid2 className={styles.grid} container spacing={6}>
          {fetchedMeals.length > 0 ? (
            fetchedMeals.map((meal, index) => (
              <Grid2 item xs={12} sm={6} md={3} key={index}>
                <Card className={styles.gridCard}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ textAlign: "center", padding: 2, fontWeight: "bold" }}
                  >
                    {meal.title}
                  </Typography>
                  <Avatar
                    alt={meal.title}
                    src={meal.image_url}
                    sx={{ width: 100, height: 100, margin: "auto" }}
                  />
                  <CardContent>
                    <Typography variant="body1">
                      Reservations: {meal.max_reservations}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      Price: {meal.price}
                    </Typography>
                  </CardContent>
                  <Button
                    key={index}
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenModal(meal.id)} // Fix here: Pass function to onClick
                  >
                    More info {meal.id}
                  </Button>
                </Card>
              </Grid2>
            ))
          ) : (
            <Typography
              variant="h6"
              component="div"
              sx={{ textAlign: "center", padding: 2 }}
            >
              No meals available.
            </Typography>
          )}
        </Grid2>
      </Box>
    </div>
  );
}
