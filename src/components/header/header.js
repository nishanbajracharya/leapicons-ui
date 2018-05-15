import React from 'react';

import Search from './search';

const Header = () => (
  <header>
    <div className="header--top">
      <div className="container">
        <a className="branding" href="/" title="Leapicons">
          <div className="logo left">
            <img src="images/lf-icon.svg" alt="Leapfrog Technology" />
          </div>
          <h2 className="main-heading left">Leapicons</h2>
        </a>
      </div>
    </div>
    <div className="header--bottom">
      <div className="container">
        <form>
          <img className="left header--bottom--icon" src="images/search-icon.svg" alt="Search" />
          <input type="text" className="left form-control" placeholder="Search Icons" />
        </form>
      </div>
    </div>
    {/* <div className="search-container">
      <div className="container">
        <Search />
      </div>
    </div> */}
  </header>
);

export default Header;
