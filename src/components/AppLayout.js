import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter.js";
import AppSubBar from "./AppSubBar";

function AppLayout({ children }) {
  return (
    <>
      <AppHeader />
      <AppSubBar />
      {children}
      <AppFooter />
    </>
  );
}

export default AppLayout;
