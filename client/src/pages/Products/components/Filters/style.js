import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",

    "& > p": {
      marginRight: "10px",
      fontSize: "14px",
      color: "#555",
    },

    "& .MuiInputBase-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#000",
      },
    },
  },

  select: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000",
    },
  },
}));
