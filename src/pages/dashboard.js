import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import Login from "../components/route-login";

export default ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);
  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <Login path="/dashboard/login" />
      </Router>
    </Layout>
  );
};
