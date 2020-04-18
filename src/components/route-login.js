import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import navigate from "gatsby";

const Login = ({ showModal }) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/secret", { replace: true });
  }
  return (
    <>
      <h1>Log in or sign up</h1>
      <button onClick={showModal}>log in</button>
    </>
  );
};

export default Login;
