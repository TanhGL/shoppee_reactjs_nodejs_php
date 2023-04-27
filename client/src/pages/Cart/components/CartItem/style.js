import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > td": {
      padding: "8px",

      "& > button": {
        paddingRight: "0px",
      },
    },
  },

  product: {
    display: "flex",
    margin: "0",

    "& > button": {
      padding: "0",

      "& > span": {
        "& > img": {
          maxWidth: "150px",
        },

        "& > div": {
          marginLeft: "20px",
        },
      },
    },
  },

  priceBox: {
    display: "flex",
    alignItems: "flex-end",
    margin: "15px 0",
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
  },
}));
