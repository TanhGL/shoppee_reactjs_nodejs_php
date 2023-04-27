import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import Register from "./components/Register";
import { useStyles } from "./style";

const MODE = {
  LOGIN: "login",
  FORGOTPASSWORD: "forgotPassword",
};

function AuthPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;

  useEffect(() => {
    isLoggedIn && history.push("/account");
  }, [isLoggedIn, history]);

  const [mode, setMode] = useState(MODE.LOGIN);

  const handleChangeMode = () => {
    setMode(MODE.LOGIN);
  };

  return (
    <Container className={classes.root}>
      <Box className={classes.loginApp}>
        <Typography>ĐĂNG NHẬP BẰNG</Typography>
        <Box className={classes.btnGroup}>
          <button className={classes.fbBtn}>Facebook</button>
          <button className={classes.ggBtn}>Google</button>
        </Box>
      </Box>
      <Box className={classes.line}>
        <span>Hoặc</span>
      </Box>
      <Box className={classes.authContainer}>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} className={classes.loginBox}>
            {mode === MODE.LOGIN && (
              <>
                <Typography className={classes.titleBox}>ĐĂNG NHẬP</Typography>
                <Login />
                <button
                  className={classes.forgetPwd}
                  onClick={() => setMode(MODE.FORGOTPASSWORD)}>
                  Quên mật khẩu?
                </button>
              </>
            )}

            {mode === MODE.FORGOTPASSWORD && (
              <>
                <ForgotPassword onChange={handleChangeMode} />
                <button
                  className={classes.forgetPwd}
                  onClick={() => setMode(MODE.LOGIN)}>
                  Hủy
                </button>
              </>
            )}
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Typography className={classes.titleBox}>
              ĐĂNG KÝ THÀNH VIÊN MỚI
            </Typography>

            <Register />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AuthPage;
