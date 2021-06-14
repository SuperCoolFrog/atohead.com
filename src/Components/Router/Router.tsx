import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from '../../Pages/Home/Home';
import Collection from '../../Pages/Collection/Collection';
import DeckBuilder from '../../Pages/DeckBuilder/DeckBuilder';

const Router = () => {
    return (<Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/collection">
        <Collection />
      </Route>
      <Route path="/deck-builder/:characterType">
        <DeckBuilder />
      </Route>
      <Redirect to="/home"/>
    </Switch>);
};

export default Router;