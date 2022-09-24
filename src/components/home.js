import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();

  const onLogout = () => {
    sessionStorage.removeItem("UserToken");
    window.location.reload(false);

    setTimeout(() => {
      navigate("login");
    }, 3000);
  };

  return (
    <React.Fragment>
      <div className="topnav">
        <Link to="/" className="active">
          Testing
        </Link>
        <Link to="#">Home</Link>
        <Link to="#" className="active">
          about
        </Link>
        <div>
          <div className="split" onClick={onLogout}>
            LogOut
          </div>
        </div>
      </div>

      <div className="header">
        <h1>Headline</h1>
        <p>1 sentence description</p>
      </div>
    </React.Fragment>
  );
}
