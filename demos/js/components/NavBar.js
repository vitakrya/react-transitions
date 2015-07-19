import React from 'react';

export let NavBar = React.createClass({

  displayName: 'NavBar',

  getInitialState: function() {
    return {
      menuOpen: false
    };
  },

  handleClick: function() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  },

  render: function() {
    let menu;

    if (this.state.menuOpen) {
      menu = (
        <ul className="dropdown-menu animated userinfo arrow">
          <li className="userlinks">
          <ul className="dropdown-menu">
            <li><a href="#">Edit Profile <i className="pull-right glyphicon glyphicon-pencil"></i></a></li>
            <li><a href="#">Account <i className="pull-right glyphicon glyphicon-user"></i></a></li>
            <li><a href="#">Settings <i className="pull-right glyphicon glyphicon-cog"></i></a></li>
            <li className="divider"></li>
            <li><a href="#">Earnings <i className="pull-right glyphicon glyphicon-stats"></i></a></li>
            <li><a href="#">Statement <i className="pull-right glyphicon glyphicon-list-alt"></i></a></li>
            <li><a href="#">Withdrawals <i className="pull-right glyphicon glyphicon-credit-card"></i></a></li>
            <li className="divider"></li>
            <li><a href="#" className="text-right">Sign Out</a></li>
          </ul>
          </li>
        </ul>
      );
    } else {
      menu = (<div></div>);
    }

    return (
      <header id="topnav" className="navbar navbar-fixed-top" role="banner">
        <a id="leftmenu-trigger"></a>
        <a id="rightmenu-trigger"></a>
        <div className="navbar-header pull-left">
          <a className="navbar-brand" href="#/">Motorizado</a>
        </div>
        <ul className="nav navbar-nav pull-right toolbar">
            <li className={`dropdown ${this.state.menuOpen === true ? "open": ""}`} dropdown="">
              <a href="#" className="dropdown-toggle username" onClick={this.handleClick}>
                <img src="http://placehold.it/400&amp;text=Placeholder" alt="Dangerfield" />
              </a>
              {menu}
            </li>
          </ul>
      </header>
    );
  }
});
