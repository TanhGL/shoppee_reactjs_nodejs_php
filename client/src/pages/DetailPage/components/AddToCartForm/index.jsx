import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@material-ui/core";
import QuantityField from "components/form-controls/QuantityField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useStyles } from "./style";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null, quantity }) {
  const classes = useStyles();

  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required("Vui lòng nhập số lượng")
      .min(1, "Giá trị nhỏ nhất là 1")
      .typeError("Vui lòng nhập số"),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <Box className={classes.root}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <QuantityField name="quantity" label="" form={form} />

        <Button
          disabled={quantity <= 0}
          className={classes.addBtn}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          style={{ width: "250px" }}>
          {quantity > 0 ? "Thêm vào giỏ" : "Hết hàng"}
        </Button>
      </form>
    </Box>
  );
}

export default AddToCartForm;
