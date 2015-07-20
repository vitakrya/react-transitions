import React from 'react';
import { SideNavList } from './SideNavList';

export let SideNav = React.createClass({

  displayName: 'SideNav',

  getInitialState: function() {
    return {
      menuOpen: false
    };
  },

  render: function() {
    return (
      <nav className="static-sidebar" role="navigation">
        <ul id="sidebar" sticky-scroll="50" style={{"top": "50px"}}>
          <SideNavList
            name='Calendar'
            icon='glyphicon-calendar'
          />
          <SideNavList
            name='Servers'
            icon='glyphicon-tower'
          />
          <SideNavList
            name='Admin'
            icon='glyphicon-globe'
          />
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
