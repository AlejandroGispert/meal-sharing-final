"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.query) {
      console.log("Router query:", router.query.id);
    }

    if (router.query && router.query.name) {
      setName(router.query.name);
      setLoading(false);
    } else if (router.isReady) {
      setLoading(false);
    }
  }, [router.isReady, router.query]); // React to changes in the query

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Container maxWidth="md" className={styles.aboutAddWhenResponsive}>
      <Box
        sx={{ textAlign: "center", my: 4, margin: 4 }}
        className={styles.header}
      >
        <Typography variant="h2" gutterBottom>
          You are Logged in!
        </Typography>
        <Typography variant="h6" gutterBottom>
          {/*    {name ? name : "Guest"} */}
          {name}
        </Typography>
      </Box>
    </Container>
  );
}
