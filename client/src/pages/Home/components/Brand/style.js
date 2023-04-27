import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},

  titleBox: {
    marginBottom: "50px",
    textAlign: "center",

    "& > p": {
      fontSize: "40px",
      fontFamily: "SVN-Veneer",

      paddingBottom: "15px",
      position: "relative",
      display: "inline-block",

      "&::after": {
        content: '""',
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "-1px",
        width: "100%",
        height: "3px",
        background: "#3a3a3a",
        margin: "0px auto",
      },
    },
  },

  imgBox: {
    cursor: "pointer",
    height: "154px",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    "&:focus-visible": {
      outline: "none",
    },

    [theme.breakpoints.down("md")]: {
      height: "120px",
    },
  },
}));
