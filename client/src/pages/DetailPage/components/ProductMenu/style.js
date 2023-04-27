import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "45px",

    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: "#000",
    },
  },
}));
