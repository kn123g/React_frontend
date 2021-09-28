import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Products from './store/pages/Products';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { Provider } from 'react-redux';
import store from './redux/store'
import Parent from './classComponents/parent/parent';
const App = () => {
  return (
    <Router>
      <Provider store={store}>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/store" exact>
            <Products />
          </Route>
          <Route path="/parentClassComponent" exact>
            <Parent />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      </Provider>
    </Router>
  );
};

export default App;
