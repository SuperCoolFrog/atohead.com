import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from '../../Pages/Home/Home';
import Collection from '../../Pages/Collection/Collection';
import DeckBuilder from '../../Pages/DeckBuilder/DeckBuilder';
import Champions from '../../Pages/Champions/Champions';
import ChampionDetails from '../../Pages/ChampionDetails/ChampionDetails';
import Monsters from '../../Pages/Monsters/Monsters';
import MonsterDetails from '../../Pages/MonsterDetails/MonsterDetails';

const Router = () => {
    return (<Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/collection">
        <Collection />
      </Route>
      <Route exact path="/champions">
        <Champions />
      </Route>
      <Route exact path="/champion/:id">
        <ChampionDetails />
      </Route>
      <Route path="/deck-builder/:characterType">
        <DeckBuilder />
      </Route>
      <Route exact path="/monsters">
        <Monsters />
      </Route>
      <Route exact path="/monster/:id">
        <MonsterDetails />
      </Route>
      <Redirect to="/home"/>
    </Switch>);
};

export default Router;