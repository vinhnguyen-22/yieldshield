import React from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: { main: red[500] }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
});

const HomePage = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </MuiThemeProvider>
  );
};
export default HomePage;
