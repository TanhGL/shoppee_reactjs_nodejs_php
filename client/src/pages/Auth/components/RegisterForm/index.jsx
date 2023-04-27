import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import PasswordField from "../../../../components/form-controls/PasswordField";
import { useStyle } from "./style.js";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm({ onSubmit = null }) {
  const classes = useStyle();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Vui lòng nhập tên đầy đủ của bạn.")
      .test(
        "Nên có ít nhất hai từ",
        "Vui lòng nhập ít nhất hai từ",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),

    email: yup
      .string()
      .required("Vui lòng nhập email của bạn")
      .email("Vui lòng nhập một địa chỉ email hợp lệ"),

    passwordRegister: yup
      .string()
      .required("Vui lòng nhập mật khẩu của bạn")
      .min(6, "Vui lòng nhập ít nhất 6 ký tự"),

    retypePassword: yup
      .string()
      .required("Vui lòng nhập lại mật khẩu của bạn")
      .oneOf([yup.ref("passwordRegister")], "Mật khẩu không khớp"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      passwordRegister: "",
      retypePassword: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      try {
        await onSubmit(values);
      } catch (error) {}
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Họ và tên" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="passwordRegister" label="Mật khẩu" form={form} />
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
          Đăng ký
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
