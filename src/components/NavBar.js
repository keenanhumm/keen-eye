import React from "react";

import { navigateTo } from '../utils'

export default props => {
  return (
    <React.Fragment>
      <div></div>
      <div className="nav_center">
        <h2 className="nav--title" onClick={() => navigateTo("/")}>
          <span className="link">KeenEye</span>
        </h2>
      </div>
      <div className="nav_right">
        <h3 className="nav--option" onClick={() => navigateTo("/search")}>
          <span className="link font-color--gray">Search</span>
        </h3>
      </div>
    </React.Fragment>
  );
};
