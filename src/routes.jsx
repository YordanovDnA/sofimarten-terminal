import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import ProtectedPage from './pages/ProtectedPage';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* Any other pages need to be declare bellow */}
      {/* Public routes starts here: */}

      {/* Public routes ends here */}
      {/* Protected routes starts here */}
      {/*
        If you're planning on using ProtectedRoute you will have to create
        a Login/Signin page and declare its route here as well.

        If not just remove this section and the component bellow
      */}
      <ProtectedRoute path="/profile" component={ProtectedPage} />
      {/* Protected routes ends here */}
      <Route path="*" component={Page404} />
    </Switch>
  </>
);

export default Routes;
