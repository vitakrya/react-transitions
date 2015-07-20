import React from 'react';

export let SideNavList = React.createClass({

  displayName: 'SideNavList',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired
  },

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
    let open = this.state.menuOpen;

    let list;

    if (open === true) {
      list = (
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
      );
    } else {
      list = (<div></div>);
    }

    return (
      <li className={`hasChild ${open === true ? 'open': ''}`}>
        <a href="#" onClick={this.handleClick}>
          <i className={`glyphicon ${this.props.icon}`}></i>
          <span>{this.props.name}</span>
        </a>
        {list}
      </li>
    );
  }
});
