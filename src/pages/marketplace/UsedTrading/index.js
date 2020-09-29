import React from "react";
import { Route } from "react-router-dom";
import UsedTradingList from "./UsedTradingList";
import UsedTradingDetail from "./UsedTradingDetail";
import PostUsedTrading from "./PostUsedTrading";
import LoginRequiredRoute from "utils/LoginRequiredRoute";

function UsedTradingRoutes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/"} component={UsedTradingList} />
      <Route exact path={match.url + "/:id(\\w)"} component={UsedTradingDetail} />

      <LoginRequiredRoute
        exact
        path={match.url + "/post"}
        component={PostUsedTrading}
      />
    </>
  );
}

export default UsedTradingRoutes;
