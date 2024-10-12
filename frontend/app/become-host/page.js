"use client";
import { useRef } from "react";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid2 } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Map from "../components/Map"; // Assuming you have a Map component
import styles from "../page.module.css";
import { handleClientScriptLoad } from "next/script";

export default function BecomeHost() {
  const [city, setCity] = useState("København");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    details: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://meal-sharing-final-backend.onrender.com/hosts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully! You can now login.");
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.error || "Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Become a Host</title>
        <meta name="description" content="How to become a host" />
        <meta charSet="UTF-8" />
      </Head>

      <main>
        <Container maxWidth="lg" className={styles.becomeHostSection}>
          {/* Map Section */}

          {/* Become a Host Form Section */}

          <Box onSubmit={handleSubmit} className={styles.becomeHostSectionForm}>
            <Typography variant="h4" gutterBottom>
              Become a Host
            </Typography>

            <form>
              <TextField
                id="full_name"
                label="Full Name*"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <TextField
                id="email"
                label="Email*"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <TextField
                id="password"
                label="Password*"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <TextField
                id="phone"
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <TextField
                id="address"
                label="City"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <TextField
                id="details"
                label="Meal Details"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </form>
          </Box>
          <Map city={city} />
        </Container>
      </main>
    </div>
  );
}
