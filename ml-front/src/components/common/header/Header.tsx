import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/favicon.svg';
import SearchBar from '../searchBar';

const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logoContainer col-xs-2 col-sm-1">
            <Link to="/">
              <img src={logo} alt="Mercado Libre" className="logo" />
            </Link>
          </div>
          <div className="col-xs-10 col-sm-11">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;