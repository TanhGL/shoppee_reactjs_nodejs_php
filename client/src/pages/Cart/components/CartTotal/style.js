import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},

  totalCart: {
    border: "1px solid rgba(224, 224, 224, 1)",
    marginBottom: "20px",
  },

  subTotal: {
    display: "flex",
    justifyContent: "space-between",

    boxSizing: "border-box",
    padding: "10px 25px",
  },

  finalTotal: {
    display: "flex",
    justifyContent: "center",

    padding: "25px",
    borderTop: "1px solid rgba(224, 224, 224, 1)",

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

  note: {
    "& > p": {
      marginBottom: "5px",
    },

    "& > textarea": {
      marginTop: "0px",
      marginBottom: "0px",
      height: "80px",
      width: "100%",
      boxSizing: "border-box",

      padding: "10px",

      fontSize: "16px",
      resize: "vertical",
    },
  },
}));
