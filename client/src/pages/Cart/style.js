import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "140px",
    marginBottom: "50px",
  },

  headingTitle: {
    fontSize: "40px",
    fontFamily: "SVN-Veneer",
    marginBottom: "15px",
  },

  button: {
    margin: "20px 0",

    "& > button": {
      backgroundColor: "#000",
      padding: "12px 30px",
      borderRadius: "40px",
      border: "1px solid #000",

      "&:hover": {
        backgroundColor: "#fff",
        border: "1px solid #000",
      },

      "& > span": {
        color: "#fff",
        fontWeight: "400",
        fontSize: "16px",

        "&:hover": {
          color: "#000",
        },
      },
    },
  },

  emptyCart: {
    textAlign: "center",

    "& > p": {
      marginTop: "10px",
    },

    "& > div": {
      marginTop: "30px",
    },
  },
}));
