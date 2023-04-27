import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > td": {
      border: "1px solid rgba(224, 224, 224, 1)",
      padding: "8px",
      fontSize: "16px",
    },
  },

  productBox: {
    display: "flex",
    justifyContent: "space-between",

    "& > a": {
      lineHeight: "28px",
      color: "#000",
      textDecoration: "none",
    },

    "& > p": {
      lineHeight: "28px",
    },
  },
}));
