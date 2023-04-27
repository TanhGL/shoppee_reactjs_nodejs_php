import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},

  imgBox: {
    overflow: "hidden",
    position: "relative",
    zIndex: "1",
    cursor: "pointer",

    "& > p": {
      position: "absolute",
      zIndex: "10",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",

      color: "#fff",
    },
  },

  img: {
    width: "100%",
    transition: "all 2s",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
