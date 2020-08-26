import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "./Home/Home";
import AccountsRoutes from "./accounts";
import Review from "./review/Review";
import Tip from "./tip/Tip";
import Routes from "./marketplace/index";
import LoginRequiredRoute from "utils/LoginRequiredRoute";

function Root() {
  return (
    <AppLayout>
      <Route exact path="/" component={Home} />
      <Route path="/accounts" component={AccountsRoutes} />
      <Route path="/review" component={Review} />
      <Route path="/tip" component={Tip} />
      <Route path="/marketplace" component={Routes} />
    </AppLayout>
  );
}

export default Root;
