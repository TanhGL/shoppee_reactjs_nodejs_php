import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "120px",
    marginBottom: "50px",
  },

  notFoundBox: {
    textAlign: "center",

    "& > img": {
      maxWidth: "100%",
    },

    "& > p": {
      color: "#484848",
      marginBottom: "15px",
    },

    "& > a": {
      textDecoration: "none",
      color: "#484848",

      position: "relative",

      "& > svg": {
        position: "absolute",
      },
    },
  },
}));
