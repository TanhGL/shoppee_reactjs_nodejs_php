import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
    padding: "30px 0",
  },

  addBtn: {
    maxWidth: "170px",
    backgroundColor: "#000",

    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
      border: "1px solid #000",
    },
  },
}));
