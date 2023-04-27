import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},

  cancelButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > button": {
      "& > span": {
        textDecoration: "underline",
      },
    },
  },
}));
