import React from 'react';

import Search from './search';
import logo from '../../../public/img/lf-logo.png';

const Header = () => (
  <header>
    <div className="branding">
      <div className="content">
        <a href="/">
          <img src={logo} alt="Logo" /> <span>LEAPICONS</span>
        </a>
      </div>
    </div>
    <div className="search-container">
      <Search />
    </div>
  </header>
);

export default Header;
