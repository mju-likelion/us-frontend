import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "./home/Home";
import AccountsRoutes from "./accounts";
import Review from "./review/Review"

function Root() {
  return (
    <AppLayout>
      <Route exact path="/" component={Home} />
      <Route path="/accounts" component={AccountsRoutes} />
      <Route path="/reviews" component={Review} />
    </AppLayout>
  );
}

export default Root;
