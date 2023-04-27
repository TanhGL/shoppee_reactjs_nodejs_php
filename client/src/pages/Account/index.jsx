import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import AccountMenu from "./components/AccountMenu";
import GeneralInfoPage from "./pages/GeneralInfoPage";
import { useStyles } from "./style";

AccountPage.propTypes = {};

function AccountPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;

  useEffect(() => {
    !isLoggedIn && history.push("/auth");
  }, [isLoggedIn, history]);

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <AccountMenu user={loggedInUser} />
        </Grid>
        <Grid item lg={9} md={9} sm={12} xs={12}>
          <GeneralInfoPage />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AccountPage;
