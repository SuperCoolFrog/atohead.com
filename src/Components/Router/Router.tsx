import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from '../../Pages/Home/Home';

const Router = () => {
    return (<Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Redirect to="/home"/>
    </Switch>);
};

export default Router;