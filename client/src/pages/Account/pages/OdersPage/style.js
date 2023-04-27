import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& > button": {
      "& > span": {
        textDecoration: "underline",
      },
    },
  },

  tableOders: {
    marginBottom: "20px",
  },

  headingTable: {
    "& > th": {
      border: "1px solid rgba(224, 224, 224, 1)",

      padding: "8px",
      fontSize: "15px",
    },
  },

  ordersEmpty: {
    "& > p": {
      margin: "20px 0 20px 20px",
      fontStyle: "italic",
      color: "rgba(0,0,0,0.6)",
    },
  },
}));
