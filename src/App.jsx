import { createMuiTheme } from "@material-ui/core";
import { CssBaseline } from "@mui/material";
import { MuiThemeProvider } from "material-ui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Features from "./pages/Features/Features.jsx";
import HomePage from "./pages/Home/HomePage";

const theme = createMuiTheme({
  palette: {
    text: {
      primary: { main: "#173A5E" },
    },
    background: {
      background: {
        paper: "#fff",
      },
    },
    mode: "dark",
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Features />} />
          <Route path="/features" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
