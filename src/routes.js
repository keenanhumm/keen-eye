import React from 'react';
import { Route } from "react-router-dom";

import Landing from './pages/Landing';
import Search from './pages/Search';

export default (
  <React.Fragment>
    <Route
      path='/'
      component={Landing}
      exact
    />
    <Route
      path='/search'
      component={Search}
      exact
    />
    {/* <Route 
        path='/search'
        component={Sea}
        exact
      /> */}
  </React.Fragment>
);