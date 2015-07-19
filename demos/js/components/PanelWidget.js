import React from 'react';

export let PanelWidget = React.createClass({

  displayName: 'PanelWidget',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    followers: React.PropTypes.number.isRequired,
    following: React.PropTypes.number.isRequired,
    location: React.PropTypes.string.isRequired
  },

  render: function() {
    let props = this.props;

    return (
      <div className="panel panel-widget widget-userfocus">
        <div className="widget-body">
          <img src="http://placehold.it/400&amp;text=Placeholder" alt="Dangerfield" className="img-circle" />
          <span className="name">{ props.name }</span>
          <span className="location"><span className="glyphicon glyphicon-map-marker"></span>{ props.location }</span>
        </div>
        <div className="widget-footer">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <span className="number">{ props.followers }</span>
                  <span className="number-context">Followers</span>
                </td>
                <td>
                  <span className="number">{ props.following }</span>
                  <span className="number-context">Following</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});
