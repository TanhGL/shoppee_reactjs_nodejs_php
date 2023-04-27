import { Box, Typography } from "@material-ui/core";
import userApi from "api/userApi";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ForgotPasswordForm from "../ForgotPasswordForm";
import NewPasswordForm from "../NewPasswordForm";
import { useStyle } from "./style";

const MODE = {
  SENDEMAIL: "sendEmail",
  NEWPASSWORD: "newPassword",
};

ForgotPassword.propTypes = {
  onChange: PropTypes.func,
};

function ForgotPassword({ onChange }) {
  const classes = useStyle();
  const { enqueueSnackbar } = useSnackbar();

  const [mode, setMode] = useState(MODE.SENDEMAIL);

  const handleSubmitOTP = async (values) => {
    const resp = await userApi.forgotPassword(values);

    if (resp.status === 1) {
      setMode(MODE.NEWPASSWORD);

      enqueueSnackbar(resp.message, {
        variant: "success",
        autoHideDuration: 2000,
      });
    } else {
      enqueueSnackbar(resp.message, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  const handleChangePassword = async (values) => {
    const resp = await userApi.newPassword(values);

    if (resp.status === 1) {
      onChange();

      enqueueSnackbar(resp.message, {
        variant: "success",
        autoHideDuration: 2000,
      });
    } else {
      enqueueSnackbar(resp.message, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  return (
    <>
      {mode === MODE.SENDEMAIL && (
        <Box>
          <Typography className={classes.titleBox}>QUÊN MẬT KHẨU</Typography>
          <ForgotPasswordForm onSubmit={handleSubmitOTP} />
        </Box>
      )}
      {mode === MODE.NEWPASSWORD && (
        <Box>
          <Typography className={classes.titleBox}>MẬT KHẨU MỚI</Typography>
          <NewPasswordForm onSubmit={handleChangePassword} />
        </Box>
      )}
    </>
  );
}

export default ForgotPassword;
