import React from 'react';

import Search from './search';

const Header = () => (
  <header>
    <div className="branding">
      <div className="content">
        <a href="/">
          <img src="images/lf-logo.png" alt="Logo" /> <span>LEAPICONS</span>
        </a>
      </div>
    </div>
    <div className="search-container">
      <div className="container">
        <Search />
      </div>
    </div>
  </header>
);

export default Header;
