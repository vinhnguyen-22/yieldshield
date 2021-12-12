import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Button, CardActionArea, CardActions, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const theme = createMuiTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          color: "white",
        },
      },
    },
  },
});
const Cards = ({ buttonText, subText, mainText }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#4090DA",
          color: "white",
          borderRadius: "20px",
          padding: "10px 5px 40px 5px",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography variant="h6" color={"white"}>
              {subText}
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              {mainText}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="large"
            variant="outlined"
            style={{
              border: "1px solid white",
              color: "#FFFFFF",
              width: "200px",
              borderRadius: "20px",
            }}
          >
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    </MuiThemeProvider>
  );
};

export default Cards;
