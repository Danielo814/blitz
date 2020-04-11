import React from "react";

const InstagramFeed = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h4>Enter Username:</h4>
          <input type="text" className="form-control" placeholder="Username" />
          <button>Get Instagram Posts</button>
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  );
};

export default InstagramFeed;
