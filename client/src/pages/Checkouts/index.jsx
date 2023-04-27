import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import CheckoutInfo from "./components/CheckoutInfo";
import CheckoutList from "./components/CheckoutList";
import { useStyles } from "./style";

function Checkouts() {
  const classes = useStyles();
  const history = useHistory();

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;

  const cartItems = useSelector((state) => state.cart.cartItems);
  const note = useSelector((state) => state.cart.note);

  const [address, setAddress] = useState(
    loggedInUser?.addresses[0]?.id || null
  );

  useEffect(() => {
    !isLoggedIn && history.push("/auth");

    if (cartItems?.length <= 0) {
      history.push("/cart");
    }
  }, [isLoggedIn, history, cartItems]);

  const handleAddressChange = (values) => {
    setAddress(values);
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CheckoutInfo
            user={loggedInUser}
            onChange={handleAddressChange}
            address={address}
            cartItems={cartItems}
            note={note}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CheckoutList cartItems={cartItems} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Checkouts;
