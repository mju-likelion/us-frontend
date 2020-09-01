import React from "react";
import { Route } from "react-router-dom";
import Review from "./Review";
import ReviewDetail from "./ReviewDetail";
import PostReview from "./PostReview";
import LoginRequiredRoute from "utils/LoginRequiredRoute";

function ReviewRoutes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/"} component={Review} />
      <Route exact path={match.url + "/detail"} component={ReviewDetail} />
      <LoginRequiredRoute
        exact
        path={match.url + "/post"}
        component={PostReview}
      />
    </>
  );
}

export default ReviewRoutes;
