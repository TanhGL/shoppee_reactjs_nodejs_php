import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},

  headingTable: {
    borderTop: "1px solid rgba(224, 224, 224, 1)",

    "& > th": {
      padding: "8px",
      fontSize: "16px",
    },
  },
}));
