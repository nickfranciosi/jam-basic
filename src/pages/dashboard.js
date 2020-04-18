import React, { useEffect, useState } from "react";
import IdentityModal from "react-netlify-identity-widget";
import { navigate } from "gatsby";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import Login from "../components/route-login";

import "react-netlify-identity-widget/styles.css";

export default ({ location }) => {
  const [isVisible, setVisibility] = useState(false);
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);

  const showModal = () => setVisibility(true);
  const hideModal = () => setVisibility(false);
  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <Login path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal showDialog={isVisible} onCloseDialog={hideModal} />
    </Layout>
  );
};
