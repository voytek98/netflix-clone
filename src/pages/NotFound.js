import React from "react";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="main-content">
      <div className="not__found">
        <h2 className="not__found__title">404</h2>
        <p className="not__found__desc">
          Page you are looking for does not exist
        </p>
      </div>
    </div>
  );
};

export default NotFound;
