"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid2 } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Map from "../components/Map"; // Assuming you have a Map component
import styles from "../page.module.css";

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

  const [errors, setErrors] = useState({});

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate phone format (optional)
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/; // Customize the phone number format
    return phone ? phoneRegex.test(phone) : true;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = {};
    if (!formData.full_name) newErrors.full_name = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.phone && !validatePhone(formData.phone))
      newErrors.phone = "Phone number must be between 10 and 15 digits.";

    setErrors(newErrors);

    // If there are errors, don't submit the form
    if (Object.keys(newErrors).length > 0) {
      return;
    }

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
        alert("Error: " + (errorData.error || "Failed to submit the form."));
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
              error={!!errors.full_name}
              helperText={errors.full_name}
            />
            <TextField
              id="email"
              label="Email*"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              id="password"
              label="Password*"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              id="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
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
      </main>
    </div>
  );
}
