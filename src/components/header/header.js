import React from 'react';
import './header.sass';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="">Home</div>
      </Link>
      <Link to="/payment">
        <div className="">Send Money</div>
      </Link>
      <Link to="/top-up">
        <div className="">Top Up</div>
      </Link>
      <Link to="/accounts">
        <div className="">Accounts</div>
      </Link>
      <Link to="/setting">
        <div className="">Setting</div>
      </Link>
    </header>
  );
};

export default Header;
