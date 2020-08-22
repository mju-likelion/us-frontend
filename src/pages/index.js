import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "./home/Home";
import AccountsRoutes from "./accounts";
import Review from "./review/Review";
import Tip from "./tip/Tip"

function Root() {
  return (
    <AppLayout>
      <Route exact path="/" component={Home} />
      <Route path="/accounts" component={AccountsRoutes} />
      <Route path="/review" component={Review} />
      <Route path="/tip" component={Tip} />
    </AppLayout>
  );
}

export default Root;
