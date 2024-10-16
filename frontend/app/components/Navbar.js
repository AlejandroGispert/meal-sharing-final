"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useAuth } from "../../AuthContext";
import styles from "../page.module.css";
import { isNull } from "@grafana/faro-web-sdk";

export default function Navbar() {
  // State to control drawer
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { user, logout } = useAuth();
  // Toggle Drawer Open/Close
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Drawer content (Menu Items)

  const list = () => (
    <Box
      className={styles.navbar}
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "Login", "Meals list", "Become host", "About", "Contact"].map(
          (text) => (
            <Link href={`/${text.toLowerCase().replace(/\s+/g, "-")}`} passHref>
              <ListItem sx={{ marginTop: 4.75 }} button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          )
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      {/* AppBar for the Navbar */}
      <AppBar
        position="static"
        sx={{ background: "linear-gradient(to right, #caa024, #16f5b7)" }}
      >
        <Toolbar>
          {/* Hamburger Icon Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)} // Opens drawer when clicked
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={styles.title}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <strong>Eat Together</strong> - Live Better
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button color="inherit" sx={{ mx: 1 }}>
              <Link href="/" passHref>
                Home
              </Link>
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              <Link href="/meals-list" passHref>
                Meals
              </Link>
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              <Link href="/become-host" passHref>
                Become a host
              </Link>
            </Button>

            {user && (
              <Button color="inherit" sx={{ mx: 1 }}>
                <Link href="/add" passHref>
                  Add Meal
                </Link>
              </Button>
            )}

            {user && (
              <Button color="inherit" sx={{ mx: 1 }} onClick={() => logout()}>
                Log Out
              </Button>
            )}
            {!user && (
              <Button color="inherit" sx={{ mx: 1 }}>
                <Link href="/login" passHref>
                  Login
                </Link>
              </Button>
            )}

            {/* Language switcher */}
            {/* <div>
              <Link href={router.asPath} locale="en">
                English
              </Link>{" "}
              |{" "}
              <Link href={router.asPath} locale="no">
                Norsk
              </Link>
            </div> */}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer component for mobile menu */}
      <Drawer
        // className={styles.navbar}
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}
