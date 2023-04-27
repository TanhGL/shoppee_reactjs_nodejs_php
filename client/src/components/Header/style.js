import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",

    position: "fixed",
    zIndex: "10",
    left: "0",
    top: "0",
    right: "0",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    height: "100%",
    // width: "1140px",

    "& img": {
      maxWidth: "80px",
      display: "block",
      cursor: "pointer",
    },

    "& > ul": {
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,

      "& > li": {
        marginLeft: theme.spacing(3),
        cursor: "pointer",
        display: "flex",
        alignItems: "center",

        "& > a": {
          fontSize: "17px",
          fontWeight: "300",
          textDecoration: "none",
          color: "white",

          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  menuProducts: {
    display: "none",
    backgroundColor: "rgba(0,0,0,0.8)",

    opacity: 0,
    transitionDelay: "1s",

    "& > li": {
      "& > a": {
        width: "100px",
        display: "inline-block",

        fontSize: "17px",
        textDecoration: "none",
        color: "white",
      },
    },

    "& li:hover": {
      backgroundColor: "rgba(0,0,0,0.85)",
    },
  },

  subMenu: {
    position: "relative",

    "& > ul": {
      position: "absolute",
      listStyle: "none",
      top: "40px",
      padding: 0,

      "& > li": {
        "& > a": {
          padding: "10px 15px",
          borderBottom: "solid 1px rgba(255, 255, 255, 0.3)",
          fontSize: "13px",
        },
      },
    },

    "&:hover > ul": {
      display: "block",
      opacity: 1,
      transitionDelay: "1",
    },
  },

  iconButton: {},

  title: {
    padding: theme.spacing(0, 1),
    margin: 0,

    fontSize: "14px",
  },

  searchBox: {
    "& > form": {
      backgroundColor: "rgba(255,255,255,0.85)",
      display: "flex",
      alignItems: "center",
      height: "38px",
      borderRadius: "5px",

      paddingLeft: theme.spacing(1),

      "& > div": {
        "& > div:hover input:before": {
          borderBottom: "none",
        },
      },
    },
  },

  headerMobile: {
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "#fff",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    position: "fixed",
    zIndex: "10",
    left: "0",
    top: "0",
    right: "0",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },

    "& > div": {},
  },

  navLeft: {
    flex: "1",
    height: "100%",
    display: "flex",
    alignItems: "center",

    "& > button": {
      color: "#fff",
    },
  },

  navCenter: {
    flex: "1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& > a": {
      "& > img": {
        maxWidth: "80px",
        display: "block",
        cursor: "pointer",
      },
    },
  },

  navRight: {
    flex: "1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    "& > a": {
      color: "#fff",
      padding: "12px",
      marginRight: "10px",
    },
  },

  Drawer: {
    "& > div": {
      "& > li": {
        "&> a": {
          fontSize: "17px",
          textDecoration: "none",
          color: "#000",
          padding: "5px 0",
        },
      },
    },
  },

  inputForm: {
    marginTop: "20px",
    marginBottom: "10px",

    "& > form": {
      "& > div": {
        height: "40px",
        border: "1px solid #555",
        display: "flex",
        alignItems: "center",
        borderRadius: "5px",

        "& > input": {
          padding: "10px",
          border: "none",

          "&:focus-visible": {
            outline: "none",
          },
        },
      },
    },
  },

  productLink: {},

  rootList: {
    padding: 0,
    width: "100%",

    "& > li": {
      padding: 0,
      display: "flex",
      justifyContent: "space-between",

      "&> a": {
        fontSize: "17px",
        textDecoration: "none",
        color: "#000",
        padding: "5px 0",
        flex: "1",
      },
    },
  },

  linkCategory: {
    fontSize: "17px",
    textDecoration: "none",
    color: "#000",
    flex: "1",
  },
}));
