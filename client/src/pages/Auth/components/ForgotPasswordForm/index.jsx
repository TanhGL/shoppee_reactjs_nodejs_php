import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField/index.jsx";
import { useStyle } from "./style.js";

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
};

function ForgotPasswordForm(props) {
  const classes = useStyle();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Vui lòng nhập email của bạn")
      .email("Vui lòng nhập một địa chỉ email hợp lệ"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="email" label="Email" form={form} />

        <Button
          type="submit"
          className={classes.submit}
          variant="outlined"
          fullWidth
          disabled={isSubmitting}
          size="large">
          Gửi
        </Button>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
