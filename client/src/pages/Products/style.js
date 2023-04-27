import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "120px",
    marginBottom: "50px",
  },

  topBar: {
    marginBottom: "40px",
    paddingBottom: "10px",
    borderBottom: "1px solid #ededed",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
  },

  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    marginTop: "20px",
  },
}));
