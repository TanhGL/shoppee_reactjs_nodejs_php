import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},

  user: {
    display: "flex",

    backgroundColor: "#000",
    padding: "10px",
    marginBottom: "10px",

    "& > img": {
      width: "50px",
    },

    "& > div": {
      marginLeft: "10px",

      "& > p": {
        color: "#fff",
      },
    },
  },

  linkAccount: {
    padding: "10px",

    "& > ul": {
      padding: 0,
      margin: 0,
      listStyle: "none",

      "& > li": {
        padding: "5px 5px 5px 15px",

        "& > a": {
          textDecoration: "none",
          color: "rgba(0,0,0,0.8)",

          "&.active": {
            color: "rgba(0,0,0,1)",
            fontWeight: "500",
          },
        },
      },
    },
  },
}));
