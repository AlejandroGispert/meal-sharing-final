import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "../page.module.css";

export default function About() {
  return (
    <Container maxWidth="md" className={styles.aboutAddWhenResponsive}>
      <Box
        sx={{ textAlign: "center", my: 4, margin: 4 }}
        className={styles.header}
      >
        <Typography variant="h2" gutterBottom>
          About us
        </Typography>
        <Typography variant="body1">
          Welcome to our Meal Sharing App, where food meets community! Our
          meal-sharing app is designed to bring people together through the joy
          of cooking and sharing meals. Whether you're a home cook, a food
          enthusiast, or someone looking to explore new culinary experiences,
          our platform connects you with others who share your passion for good
          food.
        </Typography>
      </Box>
      <br />
      <br />
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2" gutterBottom>
          Mission
        </Typography>

        <Typography variant="body1">
          We believe that sharing a meal is one of the simplest and most
          powerful ways to connect with others. Our mission is to foster a sense
          of community by encouraging people to share their homemade dishes,
          discover local flavors, and create lasting memories around the dinner
          table.
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="h5" gutterBottom>
          How It Works
        </Typography>

        <br />
        <ul className={styles.cvText}>
          <li>
            <strong>Share Your Dishes:</strong> Cook up your favorite recipes
            and share them with others in your neighborhood. Whether it’s a
            family secret or a new culinary adventure, your meals can bring joy
            to someone else's day.
          </li>
          <li>
            <strong>Discover New Flavors:</strong> Browse a diverse selection of
            homemade meals from local cooks. Discover new cuisines, flavors, and
            cooking styles right in your community.
          </li>
          <li>
            <strong>Join a Community:</strong> Connect with fellow food lovers!
            Engage in discussions, share cooking tips, and plan meal gatherings
            to enjoy together.
          </li>
          <li>
            <strong>2003:</strong> Diploma in Show Production.
          </li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", my: 4 }}
          gutterBottom
        >
          Why Us?
        </Typography>
        <ul className={styles.cvText}>
          <li>
            <strong>Support Local Cooks:</strong>By using our Meal Sharing App,
            you’re supporting local home cooks and promoting community
            engagement. Help uplift culinary talent in your area!
          </li>
          <li>
            <strong>Safety First:</strong> We prioritize the safety of our
            users. Our platform includes features for user reviews, ratings, and
            secure communication to ensure a positive experience for everyone.
          </li>
          <li>
            <strong>Create Lasting Connections:</strong> More than just a
            meal-sharing app, we’re a community that celebrates the joy of
            cooking and sharing. Make new friends and create cherished memories
            over shared meals.
          </li>
        </ul>
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Join Today!
          </Typography>

          <Typography variant="body1">
            Whether you’re here to share your culinary creations or to enjoy a
            homemade meal made by others, We invite you to join our growing
            community. Sign up today and experience the joy of sharing meals
            with like-minded food enthusiasts!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
