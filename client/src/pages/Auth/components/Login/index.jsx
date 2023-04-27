import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "app/userSlice";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import LoginForm from "../LoginForm";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      // Về trang chủ
      enqueueSnackbar("Đăng nhập thành công", {
        variant: "success",
        autoHideDuration: 2000,
      });
      history.push("/");
    } catch (error) {
      enqueueSnackbar("Đăng nhập thất bại", { variant: "error" });
    }
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
}

export default Login;
