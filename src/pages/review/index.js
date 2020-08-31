import React from 'react';
import { Route } from "react-router-dom";
import Review from "./Review"
import ReviewDetail from './ReviewDetail';


function ReviewRoutes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/"} component={Review} />
      <Route exact path={match.url + "/detail"} component={ReviewDetail} />
    </>
  );
}

export default ReviewRoutes;