var React = require('react');
var PropTypes = React.PropTypes;

var HeaderCenter = React.createClass({

  render: function() {
    return (
      <div className="header-center">
        <span className="h4">{this.props.text}</span>
      </div>
    );
  }

});

module.exports = HeaderCenter;
