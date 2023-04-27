import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import CartList from "./components/CartList";
import CartTotal from "./components/CartTotal";
import { cartTotalSelector } from "./selectors";
import { useStyles } from "./style";

function CartPage() {
  const classes = useStyles();
  const history = useHistory();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector(cartTotalSelector);

  const handleRedirect = () => {
    history.push("/collections/allitems");
  };

  if (cartItems?.length <= 0) {
    return (
      <Container className={classes.root}>
        <Typography className={classes.headingTitle}>GIỎ HÀNG</Typography>
        <Box className={classes.emptyCart}>
          <img
            src="https://theme.hstatic.net/200000031420/1000757913/14/empty_cart.png?v=10"
            alt="empty-cart"
          />
          <Typography>Không có sản phẩm nào trong giỏ hàng của bạn</Typography>
          <Box className={classes.button}>
            <Button onClick={handleRedirect}>Tiếp tục mua sắm</Button>
          </Box>
        </Box>
      </Container>
    );
  }

  return (
    <Container className={classes.root}>
      <Typography className={classes.headingTitle}>GIỎ HÀNG</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <CartList cartItems={cartItems} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <CartTotal total={cartTotal} />
        </Grid>
      </Grid>
      <Box className={classes.button}>
        <Button onClick={handleRedirect}>Tiếp tục mua sắm</Button>
      </Box>
    </Container>
  );
}

export default CartPage;
