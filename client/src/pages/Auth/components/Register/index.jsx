import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "app/userSlice";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    // auto set username = email
    values.username = values.email;
    const action = register(values);
    const resultAction = await dispatch(action);
    const resp = unwrapResult(resultAction);

    if (!resp) return;

    // do something here on register sucessfully
    if (resp.status === 1) {
      enqueueSnackbar("Đăng ký tài khoản thành công!!! ❤️❤️❤️", {
        variant: "success",
      });
    } else {
      enqueueSnackbar(resp.msg, {
        variant: "error",
      });
    }
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
}

export default Register;
