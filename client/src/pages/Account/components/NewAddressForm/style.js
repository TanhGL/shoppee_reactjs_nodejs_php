import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  root: {
    position: "relative",

    "& > form": {
      "& > div": {
        marginTop: 0,
      },
    },
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
    color: "#fff",
    border: "1px solid #000",
    backgroundColor: "#000",

    "&:hover": {
      color: "#000",
      backgroundColor: "#fff",
    },
  },

  progress: {
    position: "absolute",
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));
