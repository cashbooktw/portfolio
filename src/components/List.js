var React = require('react');
var PropTypes = React.PropTypes;
var ListItem = require('./ListItem');
var List = React.createClass({

  render: function() {
    var listStyle = {
      display: "flex",
      justifyContent: "space-around"
    };
    return (
      <div style={listStyle}>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }

});

module.exports = List;
