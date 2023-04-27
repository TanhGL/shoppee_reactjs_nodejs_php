import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5px",
    marginBottom: "10px",

    [theme.breakpoints.only("xs")]: {
      margin: 0,
    },
  },

  img: {
    minHeight: "279px",
    "&:hover": {
      cursor: "pointer",
    },

    [theme.breakpoints.only("md")]: {
      minHeight: "216px",
    },

    [theme.breakpoints.only("sm")]: {
      minHeight: "251px",
    },

    [theme.breakpoints.only("xs")]: {
      minHeight: "147px",
    },

    "& > img": {
      width: "100%",
    },
  },

  content: {
    padding: "20px 15px 0px 15px",
    textAlign: "center",

    [theme.breakpoints.only("xs")]: {
      padding: "5px 5px 0px 5px",

      "& > p": {
        marginBottom: 0,
        fontSize: "14px",
        minHeight: "42px",
      },
    },
  },

  nameProduct: {
    fontWeight: "500",
    fontSize: "15px",
    marginBottom: "10px",
    "&:hover": {
      cursor: "pointer",
    },

    [theme.breakpoints.up("sm")]: {
      height: "40px",
    },
  },

  priceBox: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "15px",
    justifyContent: "center",

    [theme.breakpoints.only("xs")]: {
      marginBottom: 0,

      "& > p": {
        fontSize: "15px",
        marginTop: "5px",
      },
    },
  },

  salePrice: {
    fontSize: "16px",
    color: "#000",
    margin: 0,
    lineHeight: 1,
    fontWeight: 500,
  },

  originPrice: {
    fontSize: "16px",
    marginLeft: "20px",
    lineHeight: 1,
    fontWeight: 300,
    textDecoration: "line-through",

    [theme.breakpoints.only("xs")]: {
      marginLeft: "5px",
    },
  },
}));
