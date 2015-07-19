import React from 'react';

export let SideNav = React.createClass({

  displayName: 'SideNav',

  getInitialState: function() {
    return {
      menuOpen: false
    };
  },

  handleBlur: function() {
    this.setState({
      menuOpen: false
    });
  },

  handleClick: function() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  },

  render: function() {
    return (
      <nav className="static-sidebar" role="navigation">
        <ul id="sidebar" sticky-scroll="50" style={{"top": "50px"}}>
          <li className="hasChild">
            <a href="#">
              <i className="glyphicon glyphicon-calendar"></i>
              <span>Calendar</span>
            </a>
              <ul data-slide-out-nav="true" style={{"display": "block"}}>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-ok"></i>
                    <span>Tasks</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-bullhorn"></i>
                    <span>Alerts</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-record"></i>
                    <span>Records</span>
                  </a>
                </li>
              </ul>
          </li>
          <li>
            <a href="#">
              <i className="glyphicon glyphicon-inbox"></i>
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="glyphicon glyphicon-stats"></i>
              <span>Charts</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
});
