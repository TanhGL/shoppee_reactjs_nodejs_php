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

  addAddress: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > button": {
      "& > span": {
        textDecoration: "underline",
      },
    },
  },

  addressEmpty: {
    "& > p": {
      marginTop: "5px",
      marginLeft: "20px",
      fontStyle: "italic",
      color: "rgba(0,0,0,0.6)",
    },
  },
}));
