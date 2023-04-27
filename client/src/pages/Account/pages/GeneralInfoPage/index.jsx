import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import NotFound from "../../../../components/NotFound";
import AddressPage from "../AddressPage";
import InfoPage from "../InfoPage";
import NewAddress from "../NewAddress";
import OdersPage from "../OdersPage";
import UpdateAddress from "../UpdateAddress";
import { useStyles } from "./style";

function GeneralInfoPage() {
  const classes = useStyles();
  const match = useRouteMatch();

  return (
    <Box className={classes.root}>
      <Switch>
        <Route path={match.path} component={InfoPage} exact />
        <Route path={`${match.path}/orders`} component={OdersPage} exact />
        <Route path={`${match.path}/address`} component={AddressPage} exact />
        <Route path={`${match.path}/address/add`} component={NewAddress} />
        <Route
          path={`${match.path}/address/edit/:id`}
          component={UpdateAddress}
        />

        <Route component={NotFound} />
      </Switch>
    </Box>
  );
}

export default GeneralInfoPage;
