"use client";
import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../page.module.css";

export default function Contact() {
  // State to handle form input values
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    webpage: "",
  });

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!contactData.name.trim()) newErrors.name = "Name is required.";

    // Phone number validation (simple regex for phone numbers)
    const phoneRegex = /^\+?[\d\s\-()]{7,}$/;
    if (!contactData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(contactData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(contactData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Webpage validation (simple URL check)
    const urlRegex = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if (contactData.webpage && !urlRegex.test(contactData.webpage)) {
      newErrors.webpage = "Please enter a valid URL.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Prevent submission if validation fails
    }

    // Process valid form submission
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Contact</h1>

        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={contactData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              fullWidth
              value={contactData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={contactData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              id="webpage"
              label="Webpage (optional)"
              variant="outlined"
              fullWidth
              value={contactData.webpage}
              onChange={handleChange}
              error={!!errors.webpage}
              helperText={errors.webpage}
            />
          </Box>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>

        <section
          className="contact-info"
          aria-labelledby="contact-info-heading"
        >
          <br />
          <br />
          <p>
            <strong>Name:</strong> Alejandro Gispert
          </p>
          <br />

          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+4542448217"
              aria-label="Call Alejandro Gispert at 42 448217"
            >
              +45 42 44 82 17
            </a>
          </p>

          <br />
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:alejandrobusiness2022@gmail.com"
              aria-label="Email Alejandro Gispert at alejandrobusiness2022@gmail.com"
            >
              alejandrobusiness2022@gmail.com
            </a>
          </p>
          <br />
          <p>
            <strong>Webpage:</strong>{" "}
            <a
              href="https://sparkly-taffy-695cb1.netlify.app/"
              aria-label="visit Alejandro Webpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Webpage
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
