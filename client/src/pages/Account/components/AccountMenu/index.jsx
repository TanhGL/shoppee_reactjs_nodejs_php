import { Box, Typography } from "@material-ui/core";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useStyles } from "./style";
import PropTypes from "prop-types";

AccountMenu.propTypes = {
  user: PropTypes.object,
};

function AccountMenu({ user = {} }) {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <Box className={classes.root}>
      <Box className={classes.user}>
        <img src={user.avatar} alt="avatar" />
        <Box>
          <Typography>Tài khoản của</Typography>
          <Typography>{user.fullname}</Typography>
        </Box>
      </Box>
      <Box className={classes.linkAccount}>
        <Box component="ul">
          <Box component="li">
            <NavLink to={`${url}`} exact>
              Thông tin chung
            </NavLink>
          </Box>
          <Box component="li">
            <NavLink to={`${url}/address`}>Sổ địa chỉ</NavLink>
          </Box>
          <Box component="li">
            <NavLink to={`${url}/orders`}>Đơn hàng của tôi</NavLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AccountMenu;
