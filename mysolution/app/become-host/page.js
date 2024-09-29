"use client";
import { useEffect, useRef } from "react";
import * as React from "react";
import Head from "next/head";
import styles from "../page.module.css";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function BecomeHost() {
  const videoRef = useRef(null);

  // useEffect(() => {
  //   const videoElement = videoRef.current;

  //   // Pause the video initially
  //   videoElement.pause();

  //   // Set the current time to 60 seconds
  //   videoElement.currentTime = 60;

  //   // Play the video
  //   videoElement.play();

  //   // Cleanup function to pause the video if the component unmounts
  //   return () => {
  //     videoElement.pause();
  //   };
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Become Host</title>
        <meta name="description" content="how to become a host" />
        <meta charSet="UTF-8" />
      </Head>

      <main className={styles.main}>
        <Container maxWidth="md">
          <Box
            className={styles.content}
            sx={{ textAlign: "center", mb: 4, padding: 7 }}
          ></Box>

          <article lang="no" className={styles.bachataSection}>
            <section>
              <Typography variant="body1">
                Here is how to become a host
              </Typography>
            </section>
          </article>
        </Container>
      </main>
    </div>
  );
}
