import React from 'react';
import BalanceList from '../balance-list';
import AccountInfo from '../account-info';
import Promo from '../promo';
import './pages.sass';

const HomePage = () => {
  return (
    <React.Fragment>
      <h2 className="home-header">Your accounts</h2>
      <BalanceList/>
      <Promo/>
      <AccountInfo/>
    </React.Fragment>
  )
};

export default HomePage;
