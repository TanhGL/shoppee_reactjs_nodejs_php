import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",

    "& > button": {
      "& > span": {
        textDecoration: "underline",
      },
    },
  },

  userInfo: {
    "& > h3": {
      marginBottom: "10px",
    },
  },

  main: {
    border: "1px solid rgba(224, 224, 224, 1)",
    marginBottom: "20px",

    "& > ul": {
      margin: 0,
      padding: "10px",
      listStyle: "none",

      "& > li": {
        display: "flex",

        "& > .first": {
          width: "100px",
        },

        "&:last-child": {
          marginTop: "5px",
        },
      },
    },
  },
}));
