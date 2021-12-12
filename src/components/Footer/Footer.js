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
    navBox: {
      width: 200,
      "& a": {
        fontWeight: 300,
      },
    },
    nav: {
      display: "flex",
      flexDirection: "row",
      marginTop: "50px",
      textAlign: "center",
      justifyContent: "center",
    },
  };
});
