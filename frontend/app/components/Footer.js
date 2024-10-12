// components/Footer.js
import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",

        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <iframe
          title="Tons of food lost or wasted"
          src="https://www.theworldcounts.com/embeds/counters/101?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14"
          style={{ border: "none" }}
          height="100"
          width="300"
        ></iframe>
        <Typography variant="body1">Meal Sharing App Denmark</Typography>
        <Typography variant="body2" color="text.secondary">
          {"© "}
          {new Date().getFullYear()} created by Alejandro Gispert. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
}
