import React from "react";
import { Link } from "react-router-dom";

import { navigateTo } from '../utils'

export default props => {
  return (
    <div>
      <h5>
        <Link to="/" style={{ textDecoration: "none" }}>
          KeenEye
        </Link>
      </h5>
      <button color="inherit" onClick={() => navigateTo("/search")}>
        Search
      </button>
    </div>
  );
};
