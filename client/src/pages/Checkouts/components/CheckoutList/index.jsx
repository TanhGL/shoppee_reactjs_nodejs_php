import { Box, Typography } from "@material-ui/core";
import { cartTotalSelector } from "pages/Cart/selectors";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "utils";
import CheckoutItem from "../CheckoutItem";
import { useStyles } from "./style";

CheckoutList.propTypes = {
  cartItems: PropTypes.array,
};

function CheckoutList({ cartItems = [] }) {
  const classes = useStyles();

  const cartTotal = useSelector(cartTotalSelector);

  return (
    <Box className={classes.root}>
      {cartItems?.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <Box className={classes.subTotal}>
        <Box className={classes.price}>
          <Typography>Tạm tính</Typography>
          <Typography>{formatPrice(cartTotal)}</Typography>
        </Box>
        <Box className={classes.ship}>
          <Typography>Phí vận chuyển</Typography>
          <Typography>Miễn phí</Typography>
        </Box>
      </Box>
      <Box className={classes.total}>
        <Typography>Tổng cộng</Typography>
        <Typography>{formatPrice(cartTotal)}</Typography>
      </Box>
    </Box>
  );
}

export default CheckoutList;
