import React from "react";
import { Link } from "react-router-dom";

export default function OopsComponentPage() {
  return (
    <React.Fragment>
      <div className="mainbox">
        <div className="err">404 </div>
        <div className="msg">
          The page you are looking for does not exist or an error occured, go
          back to home page and retry
          <p>
            Let's go <Link to="/">home</Link> and try from there.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
