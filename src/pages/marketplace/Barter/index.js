import React from "react";
import { Route } from "react-router-dom";
import BarterList from "./BarterList";
import BarterDetail from "./BarterDetail";
import PostBarter from "./PostBarter";
import LoginRequiredRoute from "utils/LoginRequiredRoute";

function BarterRoutes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/"} component={BarterList} />
      <Route exact path={match.url + "/:id(\\w)"} component={BarterDetail} />

      <LoginRequiredRoute
        exact
        path={match.url + "/post"}
        component={PostBarter}
      />
    </>
  );
}

export default BarterRoutes;
