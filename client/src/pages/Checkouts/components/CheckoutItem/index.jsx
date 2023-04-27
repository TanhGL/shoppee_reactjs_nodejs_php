import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "utils";
import { useStyles } from "./style";

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
};

function CheckoutItem({ cartItem = {} }) {
  const classes = useStyles();

  const isSale = !!cartItem.product.salePrice;

  return (
    <Box className={classes.root}>
      <Link to={`/products/${cartItem.product.id}`} className={classes.product}>
        <img
          src={cartItem.product.thumbnail}
          alt={cartItem.product.nameProduct}
        />
        <Box>
          <Typography>{cartItem.product.nameProduct}</Typography>
          <Typography>SL: {cartItem.quantity}</Typography>
        </Box>
      </Link>
      {isSale ? (
        <Typography style={{ fontSize: "16px" }}>
          {formatPrice(cartItem.product.salePrice * cartItem.quantity)}
        </Typography>
      ) : (
        <Typography style={{ fontSize: "16px" }}>
          {formatPrice(cartItem.product.originPrice * cartItem.quantity)}
        </Typography>
      )}
    </Box>
  );
}

export default CheckoutItem;
