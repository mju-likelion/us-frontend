import React from 'react';
import { Route } from "react-router-dom";
import Entrance from "./Entrance";
import UsedTradingRoutes from './UsedTrading/index';
import BarterRoutes from './Barter/index';


function Routes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/"} component={Entrance} />
      <Route exact path={match.url + "/used_trading"} component={UsedTradingRoutes} />
      <Route exact path={match.url + "/barter"} component={BarterRoutes} />
    </>
  );
}


export default Routes;