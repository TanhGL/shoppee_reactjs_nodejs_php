import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "120px",
    marginBottom: "50px",
  },

  loginApp: {
    margin: "20px 0px",

    "& > p": {
      textAlign: "center",
      fontsize: "16px",
      color: "#666666",
      marginBottom: "20px",
    },
  },

  btnGroup: {
    textAlign: "center",

    "& > button": {
      margin: "0 5px",
      paddingRight: "10px",
      textIndent: "30px",
      lineHeight: "24px",
      borderRadius: "12px",
      color: "#fff",
      border: "none",
      outline: "none",
    },
  },

  fbBtn: {
    background:
      "#546ea6 url(//theme.hstatic.net/200000031420/1000719377/14/facebook.png?v=154) no-repeat 0 center",

    "&:hover": {
      opacity: "0.7",
      cursor: "pointer",
    },
  },

  ggBtn: {
    background:
      "#df5656 url(//theme.hstatic.net/200000031420/1000719377/14/googleplus.png?v=154) no-repeat 0 center",

    "&:hover": {
      opacity: "0.7",
      cursor: "pointer",
    },
  },

  line: {
    width: "100%",
    position: "relative",
    borderBottom: "1px solid #dfdfdf",

    "& > span": {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      top: "-13px",
      background: "#fff",
      display: "inline-block",
      padding: "5px",
      color: "#999999",
      textTransform: "uppercase",
      fontSize: "14px",
      fontWeight: "600",
      textAlign: "center",
    },
  },

  loginBox: {
    textAlign: "center",
  },

  titleBox: {
    textAlign: "center",
    fontSize: "16px",
    color: "#666666",
    textTransform: "uppercase",
    marginTop: "20px",
  },

  forgetPwd: {
    border: "none",
    backgroundColor: "#fff",
    textDecoration: "underline",
    color: "#434343",
    fontSize: "14px",
    cursor: "pointer",
  },
}));
