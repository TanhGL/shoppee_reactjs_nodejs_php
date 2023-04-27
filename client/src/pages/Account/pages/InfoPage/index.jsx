import { Box, Typography } from "@material-ui/core";
import { clearCart } from "app/cartSlice";
import { logout } from "app/userSlice";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import AccountAddress from "../AddressPage";
import AccountOders from "../OdersPage";
import { Button } from "@material-ui/core";
import { useStyles } from "./style";

InfoPage.propTypes = {};

function InfoPage(props) {
  const classes = useStyles();
  const loggedInUser = useSelector((state) => state.user.current);

  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = () => {
    const action = logout();
    dispatch(action);
    dispatch(clearCart());

    enqueueSnackbar("Đăng xuất thành công", {
      variant: "success",
      autoHideDuration: 2000,
    });
    history.push("/");
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.accountInfo}>
        <Box className={classes.header}>
          <Typography>BẢNG THÔNG TIN CỦA TÔI</Typography>
          <Button onClick={handleLogout}>Đăng xuất</Button>
        </Box>

        <Box className={classes.userInfo}>
          <Typography component="h3">Thông tin tài khoản</Typography>
          <Box className={classes.main}>
            <Box component="ul">
              <Box component="li">
                <span className="first">Họ và tên: </span>
                <span className="last">{loggedInUser.fullname}</span>
              </Box>
              <Box component="li">
                <span className="first">Email: </span>
                <span className="last">{loggedInUser.email}</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <AccountOders />
      <AccountAddress />
    </Box>
  );
}

export default InfoPage;
