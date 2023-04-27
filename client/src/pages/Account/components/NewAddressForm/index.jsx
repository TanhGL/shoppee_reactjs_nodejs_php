import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress } from "@material-ui/core";
import InputField from "components/form-controls/InputField/index.jsx";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "yup-phone";
import { useStyle } from "./style.js";

NewAddressForm.propTypes = {
  onSubmit: PropTypes.func,
  address: PropTypes.object,
  labelButton: PropTypes.string,
};

function NewAddressForm({ labelButton, onSubmit, address = {} }) {
  const classes = useStyle();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup.object().shape({
    fullname: yup.string().required("Vui lòng nhập họ tên của bạn"),
    address: yup.string().required("Vui lòng nhập địa chỉ của bạn"),
    phone: yup.string().matches(phoneRegExp, "Số điện thoại không hợp lệ"),
  });

  const form = useForm({
    defaultValues: {
      fullname: address.fullname || "",
      address: address.address || "",
      phone: address.phone || "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullname" label="Họ tên" form={form} />
        <InputField name="address" label="Địa chỉ" form={form} />
        <InputField name="phone" label="Số điện thoại" form={form} />

        <Button
          type="submit"
          className={classes.submit}
          variant="outlined"
          fullWidth
          disabled={isSubmitting}
          size="large">
          {labelButton}
        </Button>
      </form>
    </div>
  );
}

export default NewAddressForm;
