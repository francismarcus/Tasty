import React from 'react';
import Navbar from 'components/layout/Navbar';
import Feed from 'components/feed/Feed';
import { Switch, Route } from 'react-router-dom';
import RecipeDetails from 'components/recipes/RecipeDetails';
import SignIn from 'components/auth/SignIn';
import SignUp from 'components/auth/SignUp';
import NewRecipe from 'components/recipes/NewRecipe';
import GoogleLogin from 'components/auth/GoogleLogin';

export default function Container() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route
          exact="exact" path="/" component={Feed} />
        <Route
          path='/recipe/:id' component={RecipeDetails} />
        <Route
          path="/signin" component={SignIn} />
        <Route
        path="/signinwithgoogle" component={GoogleLogin} />
        <Route
        path="/signup" component={SignUp} />
        <Route
          path="/new" component={NewRecipe} />
      </Switch>
    </>
  );
}
