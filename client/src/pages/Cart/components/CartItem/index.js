import {
  TableCell,
  TableRow,
  IconButton,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { removeCartItem } from "app/cartSlice";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { formatPrice } from "utils";
import { useStyles } from "./style";

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

function CartItem({ cartItem = {} }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { product } = cartItem;
  const isSale = !!product.salePrice;

  const handleRedirect = () => {
    history.push(`/products/${product.id}`);
  };

  const handleRemoveItem = (id) => {
    console.log(id);

    const action = removeCartItem({
      id,
    });

    dispatch(action);
  };

  return (
    <TableRow className={classes.root}>
      <TableCell className={classes.product}>
        <Button onClick={handleRedirect}>
          <img src={product.thumbnail} alt={product.nameProduct} />
          <Box>
            <Typography>{product.nameProduct}</Typography>
            {isSale ? (
              <Box className={classes.priceBox}>
                <Typography className={classes.salePrice}>
                  {formatPrice(product.salePrice)}
                </Typography>
                <Typography className={classes.originPrice}>
                  {formatPrice(product.originPrice)}
                </Typography>
              </Box>
            ) : (
              <Box className={classes.priceBox}>
                <Typography className={classes.salePrice}>
                  {formatPrice(product.originPrice)}
                </Typography>
              </Box>
            )}
          </Box>
        </Button>
      </TableCell>
      <TableCell align="center" style={{ fontSize: "16px" }}>
        {cartItem.quantity}
      </TableCell>
      {isSale ? (
        <TableCell align="center" style={{ fontSize: "16px" }}>
          {formatPrice(product.salePrice * cartItem.quantity)}
        </TableCell>
      ) : (
        <TableCell align="center" style={{ fontSize: "16px" }}>
          {formatPrice(product.originPrice * cartItem.quantity)}
        </TableCell>
      )}
      <TableCell align="right">
        <IconButton onClick={() => handleRemoveItem(cartItem.id)}>
          <DeleteOutline />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default CartItem;
