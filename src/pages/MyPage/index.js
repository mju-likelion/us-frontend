import React from 'react';
import { Route } from "react-router-dom";
import MyPage from "./MyPage";
import MyReview from './MyReview';
import MyTip from "./MyTip";
import MyChat from "./MyChat";
import MyUsed from "./MyUsed";
import LoginRequiredRoute from "utils/LoginRequiredRoute";
import MyChatDetail from './MyChatDetail';

function MyPageRoutes({ match }) {
  return (
    <>
      <LoginRequiredRoute exact path={match.url + "/"} component={MyPage} />
      <Route exact path={match.url + "/myreview"} component={MyReview} />
      <Route exact path={match.url + "/mytip"} component={MyTip} />
      <Route exact path={match.url + "/mychat"} component={MyChat} />
      <Route exact path={match.url + "/myused"} component={MyUsed} />
      <Route exact path={match.url + "/mychatdetail"} component={MyChatDetail} />
    </>
  );
}

export default MyPageRoutes;