import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "120px",
    marginBottom: "50px",
  },

  titleBox: {
    textAlign: "center",

    "& > p": {
      fontSize: "40px",
      fontFamily: "SVN-Veneer",

      paddingBottom: "15px",
      position: "relative",
      display: "inline-block",
    },
  },

  aboutsContent: {
    textAlign: "center",

    "& > p": {
      color: "#484848",
      marginBottom: "15px",
    },
  },
}));
