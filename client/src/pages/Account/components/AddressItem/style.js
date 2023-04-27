import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px dashed #ccc",

    "& > div": {
      padding: "10px",

      "& > p": {
        lineHeight: "26px",
        fontSize: "15px",
      },
    },
  },
}));
