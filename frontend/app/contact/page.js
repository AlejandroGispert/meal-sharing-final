"use client";
import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Contact</h1>

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
