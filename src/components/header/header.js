import React from 'react';

import Search from './search';

class Header extends React.Component{

  constructor() {
    super();

    this.state = {
      headerClass : '',
      headerBottomClass : ''
    }

    this.listenScroll = this.listenScroll.bind(this);
  }

  componentDidMount() {
    this.listenScroll();
  }

  listenScroll() {
    window.onscroll = () => {
      let offset = document.getElementsByClassName('header--top')[0].offsetHeight;
      let headerBottomHeight = document.getElementsByClassName('header--bottom')[0].offsetHeight;
      
      if (window.pageYOffset >= offset){
        this.setState({
          headerClass : 'header--fixed-bottom',
          headerBottomClass: 'header--bottom--fixed'
        });
        document.getElementsByClassName('toolbar-container')[0].style.top = headerBottomHeight + 'px';
      }
      else {
        document.getElementsByClassName('toolbar-container')[0].style.top = (headerBottomHeight + offset - window.pageYOffset) + 'px';
        this.setState({
          headerClass : '',
          headerBottomClass : ''
        });
      }
    }
  }

  render () {
    return (
      <header className={this.state.headerClass}>
        <div className="header--top">
          <div className="custom-container">
            <a className="branding" href="/" title="Leapicons">
              <div className="logo left">
                <img src="images/lf-icon.svg" alt="Leapfrog Technology" />
              </div>
              <h2 className="main-heading left">Leapicons</h2>
            </a>
          </div>
        </div>
        <div className={"header--bottom " + this.state.headerBottomClass}  id="headerBottom">
          <div className="custom-container">
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
    )
  }
}

export default Header;
