import React from "react";
import { Route } from "react-router-dom";
import UsedTradingList from "./UsedTradingList";

function UsedTradingRoutes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/"} component={UsedTradingList} />
    </>
  );
}

export default UsedTradingRoutes;
