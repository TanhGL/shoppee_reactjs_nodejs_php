import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "25px",
  },

  productId: {
    display: "flex",

    "& > p": {
      fontSize: "16px",
      color: "#545454",
      fontWeight: "500",
    },

    "& > span": {
      marginLeft: "10px",
      fontSize: "16px",
      color: "#545454",
    },
  },

  share: {
    display: "flex",
    marginTop: "25px",

    "& > p": {
      fontSize: "16px",
      color: "#545454",
      fontWeight: "500",
    },

    "& > ul": {
      display: "flex",

      listStyle: "none",
      margin: 0,
      padding: 0,
      marginTop: "2px",

      "& > li": {
        margin: "0 7px",

        "& > a": {
          color: "#000",

          "& > svg": {
            fontSize: "20px",
          },
        },
      },
    },
  },
}));
