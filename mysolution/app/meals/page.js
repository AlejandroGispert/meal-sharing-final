"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../page.module.css";
import { Grid2 } from "@mui/material";
// Dummy data for cards
const meals = [
  {
    header: "sushi",
    title: "course",
    price: "kr.990",
    image: "/icons/bachata.svg",
  },
  {
    header: "pizza",
    title: "under 20",
    price: "kr.790",
    image: "/icons/student.svg",
  },
  {
    header: "meat",
    title: "7 clips",
    price: "kr.1200",
    image: "/icons/salsacubana.svg",
  },
  {
    header: "tenderloin",
    title: "per class",
    price: "kr.200",
    image: "icons/jazmodern.svg",
  },
];

export default function Meals() {
  const handleDownload = () => {
    alert("nothing");
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Meals</h1>
      </div>

      {/* Grid for the Meals */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid2 className={styles.grid} container spacing={6}>
          {meals.map((course, index) => (
            <Grid2 item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center", padding: 2 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ textAlign: "center", padding: 2, fontWeight: "bold" }}
                >
                  {course.header}
                </Typography>
                <Avatar
                  alt={course.title}
                  src={course.image}
                  sx={{ width: 100, height: 100, margin: "auto" }}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {course.price}
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Read More
                  </Button>
                </CardActions> */}
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <br />
      <br />
      <div className={styles.courseButtonContainer}>
        <Button
          className={styles.courseButton}
          variant="contained"
          color="primary"
          onClick={handleDownload}
        >
          Download Pdf file with all offers
        </Button>
      </div>
    </div>
  );
}
