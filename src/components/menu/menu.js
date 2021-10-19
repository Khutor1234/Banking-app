import React from 'react';
import './menu.sass';
import { Link } from 'react-router-dom';
import logo from '../../img/logo/logo.png';
import home from '../../img/icons/home.svg';
import send from '../../img/icons/send.svg';
import accounts from '../../img/icons/accounts.svg';
import top from '../../img/icons/top.svg';
import user from '../../img/user.png'

const Menu = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo"/>
      <Link to="/" className="header-item">
        <img src={home} alt="Home icon" className="header-item-icon"/>
        <span>Home</span>
      </Link>
      <Link to="/payment" className="header-item">
        <img src={send} alt="Send money icon" className="header-item-icon"/>
        <span>Send Money</span>
      </Link>
      <Link to="/top-up" className="header-item">
        <img src={top} alt="Top Up icon" className="header-item-icon"/>
        <span>Top Up</span>
      </Link>
      <Link to="/accounts" className="header-item">
        <img src={accounts} alt="Accounts icon" className="header-item-icon"/>
        <span>Accounts</span>
      </Link>
      <Link to="/profile" className="header-item">
        <img src={user} alt="Accounts icon" className="header-item-icon"/>
        <span>Profile</span>
      </Link>
    </header>
  );
};

export default Menu;
