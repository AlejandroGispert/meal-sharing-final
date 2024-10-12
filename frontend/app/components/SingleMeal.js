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

const fetchData = async (props) => {
  const response = await fetch(`http://127.0.0.1:3001/meals/${props.id}`);
  const data = await response.json();
  console.log(data);
  return data;
};

export default function SingleMeal() {
  const [fetchedMeals, setMeals] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    alert("Button clicked!");
  };
  const handleDownload = () => {
    alert("nothing");
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setMeals(data[0]);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    getData();

    const intervalId = setInterval(getData, 5000); // Fetch data every 5 seconds

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [id]);

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* Grid for the Meals */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid2 className={styles.grid} container spacing={6}>
          {fetchedMeals.length > 0 ? (
            fetchedMeals.map((meal, index) => (
              <Grid2 item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: "center", padding: 2 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ textAlign: "center", padding: 2, fontWeight: "bold" }}
                  >
                    {meal.title}
                  </Typography>
                  <Avatar
                    alt={meal.title}
                    src={meal.image}
                    sx={{ width: 100, height: 100, margin: "auto" }}
                  />
                  <CardContent>
                    <Typography variant="body1">
                      Description: {meal.description}
                    </Typography>
                    <Typography variant="body1">
                      Reservations: {meal.max_reservations}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      Price: {meal.price}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                  >
                    more info {meal.id}
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

      <br />
      <br />
    </div>
  );
}
