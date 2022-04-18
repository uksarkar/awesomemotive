import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  useEffect(() => {
    document.title = "Error - page not found";
  });

  return (
    <React.Fragment>
      <h2 className="has-text-centered title is-1">404</h2>
      <h3 className="has-text-centered block">Not Found</h3>
      <div className="has-text-centered">
        <Link to={"/"} className="button is-link is-light">
          Back to Home
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Error404;
