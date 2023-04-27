import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: "0 auto",
    maxWidth: "410px",

    [theme.breakpoints.down("xs")]: {
      width: "326px",
    },
  },

  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: "center",
    margin: theme.spacing(2, 0, 2, 0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
    color: "#000",
    border: "1px solid #000",

    "&:hover": {
      color: "#fff",
      backgroundColor: "#000",
    },
  },

  progress: {
    position: "absolute",
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));
