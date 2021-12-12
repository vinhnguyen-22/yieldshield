import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./PageHeader";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#8240DD" },
    secondary: { main: "#212121" },
    text: {
      inherit: { main: "#fafafa" },
      secondary: { main: "#46505A" },
    },
  },
  typography: { useNextVariants: true },
});
const PageHeader = () => {
  const classes = useStyles();
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Paper className={classes.heroSection}>
          <Container
            disableGutters
            maxWidth="lg"
            component="main"
            color="text.inherit"
            sx={{ pt: 8, pb: 6, color: "white" }}
          >
            <Typography
              variant="h5"
              align="center"
              component="p"
              color="secondary"
            >
              Locked and loaded
            </Typography>

            <Typography
              component="h1"
              variant="h2"
              fontWeight={500}
              align="center"
              gutterBottom
            >
              YieldShield Features
            </Typography>
          </Container>
        </Paper>
      </MuiThemeProvider>
    </>
  );
};

export default PageHeader;
