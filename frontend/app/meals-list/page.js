"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid2 } from "@mui/material"; // Make sure you're importing Grid2 correctly
import TextField from "@mui/material/TextField";
import Modal from "../components/Modal";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Meal from "../components/Meal";
import styles from "../page.module.css";

const fetchData = async (sortedState) => {
  const url = `https://meal-sharing-final-backend.onrender.com/meals?sortKey=id&sortDir=${sortedState}`;

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
  const [statusState, setStatusState] = useState("Active");

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
  const handleSorting = async (direction) => {
    setSortedState(direction);
    console.log("direction " + direction);
  };

  const handleOpenModal = async (mealId) => {
    try {
      const meal = await fetchDataSingle(mealId, sortedState);
      setSingleMeal(meal[0]);
      setCurrentMealId(mealId);
      setOpenModal(true);
      console.log("this " + meal[0]);
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
  }, [sortedState]);

  return (
    <div>
      <div className={styles.addMealPage}>
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
      <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: "#fbe3c7" }}>
        <div>
          <Button>
            {" "}
            <ArrowUpwardIcon onClick={() => handleSorting("asc")} />
          </Button>
          <Button>
            {" "}
            <ArrowDownwardIcon onClick={() => handleSorting("desc")} />
          </Button>
        </div>
        <Grid2 className={styles.grid} container spacing={6}>
          {fetchedMeals.length > 0 ? (
            fetchedMeals.map((meal, index) => (
              <Grid2 item xs={12} sm={6} md={3} key={index}>
                <Meal
                  meal={meal}
                  index={index}
                  handleOpenModal={handleOpenModal}
                />
              </Grid2>
            ))
          ) : (
            <Typography
              variant="h6"
              component="div"
              sx={{ textAlign: "center", padding: 2 }}
            >
              No meals available.
              <br /> Please try again later as the content is still loading.
            </Typography>
          )}
        </Grid2>
      </Box>
    </div>
  );
}
