import { AppBar } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {
  Box,
  Button,
  CssBaseline,
  Link,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useStyles } from "./Topnav.js";
import yieldLogo from "../../assets/img/yeildLogo.webp";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba( 0, 0, 0, 0.25 )",
    }, // Purple and green play nicely together.
    secondary: { main: "#212121" }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
});

const Topnav = (props) => {
  const classes = useStyles();
  const [BgNavbar, setBgNavbar] = useState(true);

  const changeBackground = () => {
    window.scrollY >= 80 ? setBgNavbar(true) : setBgNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <AppBar
          className={classes.appBar}
          color={BgNavbar ? "primary" : "transparent"}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              <img src={yieldLogo} width={200} alt="" />
            </Box>
            <nav>
              <Link
                variant="button"
                href="#"
                className={classes.navText}
                color="white"
                underline="none"
                sx={{
                  fontSize: 16,
                  my: 1,
                  mx: 1.5,
                }}
                style={{
                  textTransform: "none",
                }}
              >
                Home
              </Link>
              <Link
                variant="button"
                href="#"
                className={classes.navText}
                color="white"
                underline="none"
                sx={{
                  fontSize: 16,
                  my: 1,
                  mx: 1.5,
                }}
                style={{
                  textTransform: "none",
                }}
              >
                Features
              </Link>
              <Link
                variant="button"
                href="#"
                className={classes.navText}
                color="white"
                underline="none"
                sx={{
                  fontSize: 16,
                  my: 1,
                  mx: 1.5,
                }}
                style={{
                  textTransform: "none",
                }}
              >
                Documentation
              </Link>

              <Link
                variant="button"
                href="#"
                className={classes.navText}
                color="white"
                underline="none"
                sx={{
                  fontSize: 16,
                  my: 1,
                  mx: 1.5,
                }}
                style={{
                  textTransform: "none",
                }}
              >
                FAQs
              </Link>

              <Link
                variant="button"
                href="#"
                className={classes.navText}
                color="white"
                underline="none"
                sx={{
                  fontSize: 16,
                  my: 1,
                  mx: 1.5,
                }}
                style={{
                  textTransform: "none",
                }}
              >
                Contact Us
              </Link>
            </nav>
            <Button
              href="#"
              variant="outlined"
              sx={{
                color: "white",
                backgroundColor: "#8240DD",
                border: "none",
                borderRadius: "20px",
                height: 45,
                width: 182,
                my: 1,
                mx: 1.5,
              }}
            >
              Launch BETA
            </Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </>
  );
};

export default Topnav;
