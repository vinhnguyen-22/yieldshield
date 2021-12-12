import { Fab, makeStyles } from "@material-ui/core";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, useScrollTrigger, Zoom } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import Topnav from "../Topnav/Topnav.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const Layout = (props) => {
  return (
    <Box component="div" sx={{ backgroundColor: "#100213" }}>
      <div id="back-to-top-anchor"></div>
      <Topnav props={props} />
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      {props.children}
    </Box>
  );
};

ScrollTop.propTypes = {
  window: PropTypes.func,
};
export default Layout;
