import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > h2": {
      fontSize: "24px",
      color: "#000",
      margin: 0,
      lineHeight: 1,
    },

    "& > span": {
      display: "block",
      width: "50px",
      height: "1px",
      background: " #000",
      margin: "20px 0",
    },
  },

  priceBox: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "15px",
  },

  salePrice: {
    fontSize: "24px",
    color: "#000",
    margin: 0,
    lineHeight: 1,
  },

  originPrice: {
    fontSize: "18px",
    marginLeft: "20px",
    lineHeight: 1,
    fontWeight: 300,
    textDecoration: "line-through",
  },

  cate: {
    fontSize: "16px",
    color: "#1c1c1c",
    marginBottom: "15px",
  },

  shortDesc: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
    marginTop: "10px",
  },
}));
