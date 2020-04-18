import React from "react";
import { Link } from "gatsby";

const Profile = () => (
  <div className="dashboard-header">
    <nav>
      <Link to="/dashboard/secret" activeClassName="active">
        Secret Stuff
      </Link>
      <Link to="/dashboard/base" activeClassName="active">
        Base
      </Link>
    </nav>
  </div>
);

export default Profile;
