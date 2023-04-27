import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(8),
  },

  titleBox: {
    marginBottom: "50px",
    textAlign: "center",
    display: "block",

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

  newsLetterBox: {
    textAlign: "center",

    "& > p": {
      fontSize: "20px",
      marginBottom: "50px",
      fontWeight: "300",
    },
  },

  formBox: {
    "& > form": {
      "& > input": {
        maxWidth: "435px",
        border: "none",
        borderBottom: "1px solid #e5e5e5",
        height: "48px",
        padding: "0 10px",
        fontSize: "15px",

        "&:focus-visible": {
          outline: "none",
        },
      },

      "& button": {
        borderRadius: "4px",
        border: "none",
        background: "#000",
        color: "#fff",
        fontSize: "15px",
        height: "48px",
        cursor: "pointer",
        padding: "0 32px",
        marginLeft: "15px",
      },

      [theme.breakpoints.down("xs")]: {
        display: "flex",

        "& > button": {
          padding: "0 20px",
        },
      },
    },
  },
}));
