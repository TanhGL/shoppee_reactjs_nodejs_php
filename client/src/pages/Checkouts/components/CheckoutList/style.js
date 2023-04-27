import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},

  subTotal: {
    padding: "20px 0",

    borderTop: "1px solid rgba(224, 224, 224, 1)",
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
  },

  price: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },

  ship: {
    display: "flex",
    justifyContent: "space-between",
  },

  total: {
    display: "flex",
    justifyContent: "space-between",

    "& > p": {
      fontSize: "24px",
      marginTop: "20px",
    },
  },
}));
