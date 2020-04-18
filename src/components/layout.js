import React from "react";
import { Link } from "gatsby";
import "./layout.css";
import { IdentityContextProvider } from "react-netlify-identity-widget";

export default ({ children }) => (
  <IdentityContextProvider url="https://jam-basic.netlify.app">
    <header>
      <Link to="/">Jam</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);
