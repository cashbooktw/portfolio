var React = require('react');
var PropTypes = React.PropTypes;
var ListItem = require('./ListItem');
const NavLink = require('./NavLink');
/*
  Portfolio list
*/
var List = React.createClass({

  render: function() {
    var listStyle = {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap"
    };
    return (
      <div style={listStyle}>
        <NavLink to="/portfolio/pokemon-index"><ListItem /></NavLink>
        <NavLink to="/portfolio/kaohsiung-MRT"><ListItem /></NavLink>
        <NavLink to="/portfolio/multiplayer-game"><ListItem /></NavLink>
      </div>
    );
  }

});

module.exports = List;
