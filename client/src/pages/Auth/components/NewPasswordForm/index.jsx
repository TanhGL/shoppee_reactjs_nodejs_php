import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress } from "@material-ui/core";
import InputField from "components/form-controls/InputField/index.jsx";
import PasswordField from "components/form-controls/PasswordField/index.jsx";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useStyle } from "./style.js";

NewPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
};

function NewPasswordForm(props) {
  const classes = useStyle();

  const schema = yup.object().shape({
    otp: yup.string().required("Vui lòng nhập OTP"),

    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu của bạn")
      .min(6, "Vui lòng nhập ít nhất 6 ký tự"),

    retypePassword: yup
      .string()
      .required("Vui lòng nhập lại mật khẩu của bạn")
      .oneOf([yup.ref("password")], "Mật khẩu không khớp"),
  });

  const form = useForm({
    defaultValues: {
      otp: "",
      password: "",
      retypePassword: "",
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
        <InputField name="otp" label="OTP" form={form} />
        <PasswordField name="password" label="Mật khẩu" form={form} />
        <PasswordField
          name="retypePassword"
          label="Nhập lại mật khẩu"
          form={form}
        />

        <Button
          type="submit"
          className={classes.submit}
          variant="outlined"
          fullWidth
          disabled={isSubmitting}
          size="large">
          Thay đổi mật khẩu
        </Button>
      </form>
    </div>
  );
}

export default NewPasswordForm;
