import React from 'react';
import { Route } from "react-router-dom";
import Entrance from "./Entrance";
import UsedTrading from './UsedTrading/UsedTrading';
import Barter from './Barter/Barter';


function Routes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/"} component={Entrance} />
      <Route exact path={match.url + "/used_trading"} component={UsedTrading} />
      <Route exact path={match.url + "/barter"} component={Barter} />
    </>
  );
}


export default Routes;