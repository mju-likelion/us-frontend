import React from 'react';
import { Route } from "react-router-dom";
import Entrance from "./Entrance";
import UsedTradingRoutes from './UsedTrading/index';
import BarterRoutes from './Barter/index';
import LoginRequiredRoute from 'utils/LoginRequiredRoute';
import PostUsedTrading from './UsedTrading/PostUsedTrading'
import UsedTradingDetail from './UsedTrading/UsedTradingDetail'
import BarterDetail from './Barter/BarterDetail'
import PostBarter from './Barter/PostBarter'

function MarketplaceRoutes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/"} component={Entrance} />
      <Route exact path={match.url + "/usedTrading"} component={UsedTradingRoutes} />
      <Route exact path={match.url + "/usedTrading/:id(\\w)" } component={UsedTradingDetail} />
      <LoginRequiredRoute 
        exact
        path={match.url + "/usedTrading/post"}
        component={PostUsedTrading}
      />
      <Route exact path={match.url + "/barter"} component={BarterRoutes} />
      <Route exact path={match.url + "/barter/:id(\\w)" } component={BarterDetail} />
      <LoginRequiredRoute 
        exact
        path={match.url + "/barter/post"}
        component={PostBarter}
      />
    </>
  );
}


export default MarketplaceRoutes;