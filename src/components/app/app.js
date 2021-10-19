import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../menu';
import { HomePage, PaymentPage, TopUpPage, AccountsPage, ProfilePage } from '../pages';

import './app.sass';

const App = () => {
  return (
    <main role="main" className="container">
      <Menu />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/top-up" component={TopUpPage} />
        <Route path="/accounts" component={AccountsPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </main>
  );
};

export default App;
