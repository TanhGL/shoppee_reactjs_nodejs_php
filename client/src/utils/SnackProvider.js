import { makeStyles } from "@material-ui/core/styles";
import { SnackbarProvider as NotistackProvider } from "notistack";
import React from "react";

const useStyles = makeStyles((theme) => ({
  containerAnchorOriginTopRight: {
    top: "90px",
  },
}));

const SnackbarProvider = ({ children }) => {
  const classes = useStyles();
  return (
    <NotistackProvider
      classes={classes}
      children={children}
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    />
  );
};

export default SnackbarProvider;
