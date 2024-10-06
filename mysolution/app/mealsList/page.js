"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../page.module.css";
import { Grid2 } from "@mui/material"; // Make sure you're importing Grid2 correctly
import TextField from "@mui/material/TextField";

import Modal from "../components/Modal";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const fetchData = async (sortedState) => {
  const url =
    sortedState === "asc"
      ? `https://meal-sharing-final-backend.onrender.com/meals?sortDir=asc`
      : `https://meal-sharing-final-backend.onrender.com/meals`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

const fetchDataSingle = async (mealId, sortedState) => {
  const url =
    sortedState === "asc"
      ? `https://meal-sharing-final-backend.onrender.com/meals/${mealId}?sortDir=${sortedState}`
      : `https://meal-sharing-final-backend.onrender.com/meals/${mealId}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const search = async (value, sortedState) => {
  const url =
    sortedState === "asc"
      ? `https://meal-sharing-final-backend.onrender.com/meals?title=${value}&sortDir=${sortedState}`
      : `https://meal-sharing-final-backend.onrender.com/meals?title=${value}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

export default function Meals() {
  const [fetchedMeals, setMeals] = useState([]);
  const [fetchedSingleMeal, setSingleMeal] = useState(null);
  // const [inputValue, setInputValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentMealId, setCurrentMealId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedState, setSortedState] = useState("desc");

  const handleSearchClick = async () => {
    try {
      const selectedMeals = await search(searchTerm, sortedState);

      setMeals(selectedMeals);
      console.log("done");
      console.log(selectedMeals);
    } catch (err) {
      console.error("Error searching meals:", err);
    }
  };

  const handleOpenModal = async (mealId, sortedState) => {
    try {
      const meal = await fetchDataSingle(mealId, sortedState);
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
        const data = await fetchData(sortedState);
        setMeals(data); // Set the fetched meals array directly
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <TextField
          label="Search meal"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearchClick}>search</Button>
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
        <div>
          <Button>
            {" "}
            <ArrowUpwardIcon onClick={() => setSortedState("desc")} />
          </Button>
          <Button>
            {" "}
            <ArrowDownwardIcon onClick={() => setSortedState("asc")} />
          </Button>
        </div>
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
                    onClick={() => handleOpenModal(meal.id, sortedState)} // Fix here: Pass function to onClick
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
