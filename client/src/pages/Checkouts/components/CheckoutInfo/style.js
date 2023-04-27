import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  sections: {
    marginBottom: "20px",

    "& > h3": {
      fontSize: "24px",
      marginBottom: "20px",
    },

    "& > p": {
      marginBottom: "10px",
      fontSize: "16px",
      fontWeight: "bold",
    },
  },

  customer: {
    display: "flex",
    marginBottom: "20px",

    "& > img": {
      maxWidth: "60px",

      borderRadius: "10px",
    },
  },

  infoUser: {
    marginLeft: "20px",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",

    "& > button": {
      paddingLeft: "0",

      color: "#338dbc",
    },
  },

  selectBox: {
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

    "& > button": {
      paddingLeft: "0",
      marginTop: "10px",

      color: "#338dbc",
    },
  },

  select: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000",
    },
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& > a": {
      textDecoration: "none",
      color: "#338dbc",
    },

    "& > button": {
      backgroundColor: "#286f94",
      padding: "10px 20px",
      color: "#fff",

      "&:hover": {
        backgroundColor: "#338dbc",
      },
    },
  },

  emptyAddress: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",

    "& > p": {
      fontStyle: "italic",
      marginLeft: "20px",
      color: "#555",
    },

    "& > button": {
      color: "#338dbc",
    },
  },
}));
