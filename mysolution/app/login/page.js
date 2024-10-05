"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid2,
} from "@mui/material";
import Link from "next/link";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log({ email, password });
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid2 container>
            <Grid2 item xs>
              <Button href="#" variant="body2">
                Forgot password?
              </Button>
            </Grid2>
            <Grid2 item>
              <Link href="../become-host">
                <Button variant="body2">
                  Don't have an account? Become a Host
                </Button>
              </Link>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
}
