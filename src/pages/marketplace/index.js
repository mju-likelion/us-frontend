import React from 'react';
import { Route } from "react-router-dom";
import Entrance from "./Entrance";
import UsedTrading from './UsedTrading';
import Barter from './Barter';
import GroupBuying from './GroupBuying';


function Routes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/"} component={Entrance} />
      <Route exact path={match.url + "/used_trading"} component={UsedTrading} />
      <Route exact path={match.url + "/barter"} component={Barter} />
      <Route exact path={match.url + "/group_buying"} component={GroupBuying} />
    </>
  );
}


export default Routes;