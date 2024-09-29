"use client";
import React, { useState, useEffect } from "react";
import styles from "../page.module.css";

export default function AnimatedText() {
  const [activeWord, setActiveWord] = useState("salsa"); // Initialize the first word
  const words = ["salsa", "casino", "dance"]; // List of words to animate

  useEffect(() => {
    let currentWordIndex = 0;

    const interval = setInterval(() => {
      // Cycle through the words
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setActiveWord(words[currentWordIndex]);
    }, 2000); // Switch every 1 second

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className={styles.homeTextFrontContainer}>
      <span
        className={`${styles.word} ${
          activeWord === "salsa" ? styles.active : ""
        }`}
      >
        Meal
      </span>
      <span> </span>
      <span
        className={`${styles.word} ${
          activeWord === "casino" ? styles.active : ""
        }`}
      >
        Sharing
      </span>
      <span> </span>
      <span
        className={`${styles.word} ${
          activeWord === "dance" ? styles.active : ""
        }`}
      >
        App
      </span>
    </div>
  );
}
