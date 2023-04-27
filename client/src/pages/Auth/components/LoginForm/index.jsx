import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import PasswordField from "../../../../components/form-controls/PasswordField";
import { useStyle } from "./style.js";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyle();

  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("Vui lòng nhập email của bạn")
      .email("Vui lòng nhập một địa chỉ email hợp lệ"),

    password: yup.string().required("Vui lòng nhập mật khẩu của bạn"),
  });

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
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
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Mật khẩu" form={form} />

        <Button
          type="submit"
          className={classes.submit}
          variant="outlined"
          fullWidth
          disabled={isSubmitting}
          size="large">
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
