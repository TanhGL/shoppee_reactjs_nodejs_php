import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000",
  },

  footerTop: {
    paddingTop: "75px",
    paddingBottom: "40px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  footerTitle: {
    "& > p": {
      fontSize: "20px",
      color: "#fff",
      fontWeight: "500",
      lineHeight: "27px",
      marginBottom: "25px",
    },
  },

  linkWidget: {
    margin: "0px",
    padding: "0px",

    "& > li": {
      listStyle: "none",
      marginBottom: "14px",

      "& > p": {
        fontSize: "13px",
        color: "#ececec",
        display: "block",
      },
    },
  },

  footerMid: {
    paddingTop: "30px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  footerInfo: {
    padding: "10px 0",
    display: "flex",

    "& > img": {
      maxWidth: "113px",
    },

    "& > div": {
      //   display: "inline-block",
      paddingTop: "6px",
      fontSize: "24px",
    },

    "& > p": {
      fontSize: "14px",
      color: "#ececec",
      marginLeft: "25px",
    },
  },

  footerBottom: {
    paddingBottom: "50px",
  },

  footerPayments: {
    textAlign: "center",
    marginBottom: "35px",

    "& > img": {
      maxWidth: "100%",
    },
  },

  footerMenus: {
    "& > ul": {
      padding: "0px",
      textAlign: "center",

      "& > li": {
        display: "inline-block",
        listStyle: "none",
        borderRight: "1px solid #999999",
        lineHeight: "13px",

        "& > p": {
          color: "#ececec",
          fontSize: "12px",
          letterSpacing: "1px",
          padding: "0 15px",
        },

        "&:first-child > p": {
          paddingLeft: "0px",
        },

        "&:last-child": {
          borderRight: "0",
        },
      },
    },
  },

  footerCopyright: {
    "& > p": {
      textAlign: "center",
      marginBottom: "0px",
      fontSize: "14px",
      color: "#ececec",
      marginTop: "10px",
      lineHeight: "16px",
    },
  },
}));
