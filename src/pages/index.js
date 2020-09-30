import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "./Home/Home";
import AccountsRoutes from "./accounts";
import ReviewRoutes from "./review/index";
import TipRoutes from "./tip/index";
import MarketplaceRoutes from "./marketplace/index";
import MyPageRoutes from "./MyPage/index";

function Root() {
  return (
    <AppLayout>
      <Route exact path="/" component={Home} />
      <Route path="/accounts" component={AccountsRoutes} />
      <Route path="/review" component={ReviewRoutes} />
      <Route path="/tip" component={TipRoutes} />
      <Route path="/marketplace" component={MarketplaceRoutes} />
      <Route path="/mypage" component={MyPageRoutes} />
    </AppLayout>
  );
}

export default Root;
