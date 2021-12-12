import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },

    navText: {
      "&:hover": {
        color: "#B27CFD",
      },
    },

    appBar: {},
  };
});
