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
        <NavLink to="/portfolio/pokemon-index"><ListItem
          imgSrc="./images/pokedex_314x252.png"
          title="Pokédex"
          subTitle="Visualize the data from pokéapi."
          /></NavLink>
        <NavLink to="/portfolio/kaohsiung-MRT"><ListItem
          imgSrc="./images/KHMRT_314x252.png"
          title="Kaohsiung MRT"
          subTitle="Represent the immediate MRT information"
          /></NavLink>
        <NavLink to="/portfolio/multiplayer-game"><ListItem
          imgSrc="./images/multiplayer_game_314x252.png"
          title="Multiplayer Game"
          subTitle="Implemented by WebSocket and three.js"
          /></NavLink>
      </div>
    );
  }

});

module.exports = List;
