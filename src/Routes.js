import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Portal from './components/portal/Portal';

export default () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/portal" component={Portal} />
      </Switch>
    </div>
  );
};
