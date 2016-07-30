var React = require('react');
var PropTypes = React.PropTypes;
import {Link} from 'react-router';

var NavLink = React.createClass({

  render: function() {
    return (
      <Link {...this.props} />
    );
  }

});

module.exports = NavLink;
