import {
  Box,
  FormHelperText,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Add, Remove } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {},

  form: {
    marginTop: 0,
  },

  box: {
    maxWidth: "170px",
    display: "flex",
    alignItems: "center",
    flexFlow: "row nowrap",

    "& > .MuiIconButton-root": {
      border: "1px solid rgba(0, 0, 0, 0.23)",
      borderRadius: "4px",
      height: "40px",
    },
  },

  input: {
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },

  removeBtn: {
    marginRight: "10px",
  },

  addBtn: {
    marginLeft: "10px",
  },
}));

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, size } = props;
  const { control, setValue } = form;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, error },
      }) => (
        <>
          <FormControl
            className={classes.form}
            error={isTouched && invalid}
            fullWidth
            margin="normal"
            variant="outlined"
            size="small">
            <Typography>{label}</Typography>
            <Box className={classes.box}>
              <IconButton
                size={size}
                className={classes.removeBtn}
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                  )
                }>
                <Remove />
              </IconButton>

              <OutlinedInput
                id={name}
                error={invalid}
                type="number"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                className={classes.input}
              />

              <IconButton
                size={size}
                className={classes.addBtn}
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                  )
                }>
                <Add />
              </IconButton>
            </Box>
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </FormControl>
        </>
      )}
    />
  );
}

export default QuantityField;
