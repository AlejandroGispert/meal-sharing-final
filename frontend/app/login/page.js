"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid2,
  Snackbar,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../AuthContext";
import Dashboard from "../dashboard/page";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // State for Snackbar message
  const router = useRouter();

  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
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

        login(user.full_name);
        setSnackbarMessage(`Login successful! ${user.full_name}`);
        setSnackbarOpen(true); // Open snackbar

        // Redirect to the dashboard
        router.push(`/dashboard?user=${user.full_name}&id=${user.id}`);
        <Dashboard />;
      } else {
        setError("Invalid email or password");
        setSnackbarMessage("Invalid email or password");
        setSnackbarOpen(true); // Open snackbar for error
      }
    } catch (error) {
      console.error("Error fetching hosts:", error);
      setError("Failed to fetch user data");
      setSnackbarMessage("Failed to fetch user data");
      setSnackbarOpen(true); // Open snackbar for error
    } finally {
      setLoading(false);
    }
  };

  // Function to close the snackbar
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
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
        {error && <Typography color="error">{error}</Typography>}
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
            {loading ? "Loading..." : "Sign In"}
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

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }} // Positioning Snackbar to the upper right
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
