import React, { useState } from "react";

const InstagramFeed = () => {
  const [username, setUsername] = useState("");
  const updateUsername = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h4>Enter Username:</h4>
          <input
            type="text"
            onChange={(event) => updateUsername(event)}
            className="form-control"
            placeholder="Username"
          />
          <button>Get Instagram Posts</button>
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  );
};

export default InstagramFeed;
