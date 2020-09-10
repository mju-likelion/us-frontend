import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "./Home/Home";
import AccountsRoutes from "./accounts";
import ReviewRoutes from "./review/index";
import Tip from "./tip/Tip";
import Routes from "./marketplace/index";
import MyPageRoutes from "./MyPage/index";

function Root() {
  return (
    <AppLayout>
      <Route exact path="/" component={Home} />
      <Route path="/accounts" component={AccountsRoutes} />
      <Route path="/review" component={ReviewRoutes} />
      <Route path="/tip" component={Tip} />
      <Route path="/marketplace" component={Routes} />
      <Route path="/mypage" component={MyPageRoutes} />
    </AppLayout>
  );
}

export default Root;
