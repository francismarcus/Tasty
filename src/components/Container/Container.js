import React from 'react';
import Navbar from 'components/layout/Navbar';
import Feed from 'components/feed/Feed';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipeDetails from 'components/recipes/RecipeDetails';

export default function Container() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route 
          exact="exact" path="/" component={Feed} />
        <Route 
          path="/recipe" component={RecipeDetails} />
      </Switch>
    </>
  );
}
