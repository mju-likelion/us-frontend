import React from "react";
import { Route } from "react-router-dom";
import TipList from "./TipList";
import TipDetail from "./TipDetail";
import PostTip from "./PostTip";
import LoginRequiredRoute from "utils/LoginRequiredRoute";

function TipRoutes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/"} component={TipList} />
      <Route exact path={match.url + "/:id(\\w)"} component={TipDetail} />

      <LoginRequiredRoute
        exact
        path={match.url + "/post"}
        component={PostTip}
      />
    </>
  );
}

export default TipRoutes;