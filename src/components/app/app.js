import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import { HomePage, PaymentPage, TopUpPage, AccountsPage, SettingPage } from '../pages';

import './app.sass';

const App = () => {
  return (
    <main role="main" className="container">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/top-up" component={TopUpPage} />
        <Route path="/accounts" component={AccountsPage} />
        <Route path="/setting" component={SettingPage} />
      </Switch>
    </main>
  );
};

export default App;
