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
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true); // Set loading to true when fetching starts
    setError("");

    try {
      // Fetch the hosts from the database
      const response = await fetch(
        "https://meal-sharing-final-backend.onrender.com/hosts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const hosts = await response.json();

      const user = hosts.find(
        (host) => host.email === email && host.password === password
      );

      if (user) {
        // Successful login logic here
        console.log("Login successful:", user.full_name);
        alert("Login successful! " + user.full_name);
        router.push(`/dashboard?user=${user.full_name}&id=${user.id}`);
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error fetching hosts:", error);
      setError("Failed to fetch user data");
    } finally {
      setLoading(false); // Set loading to false when fetching ends
    }
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
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign In"} {/* Show loading text */}
          </Button>
          <Grid2 container>
            <Grid2 item xs>
              <Button href="#" variant="body2" disabled={loading}>
                Forgot password?
              </Button>
            </Grid2>
            <Grid2 item>
              <Link href="../become-host">
                <Button variant="body2" disabled={loading}>
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
