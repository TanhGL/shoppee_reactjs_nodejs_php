import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},

  imgBox: {
    "&:focus-visible": {
      outline: "none",
    },

    "& > img": {
      width: "100%",

      [theme.breakpoints.down("md")]: {
        height: "500px",
        objectFit: "cover",
      },

      [theme.breakpoints.down("xs")]: {
        height: "400px",
        objectFit: "cover",
      },
    },
  },
}));
