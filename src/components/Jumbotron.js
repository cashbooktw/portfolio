var React = require('react');
var PropTypes = React.PropTypes;

var Jumbotron = React.createClass({

  render: function() {
    var imgStyle = {
      "width": "100%",
      "height": "600px",
      // "backgroundImage": "url('./images/keyboard2.jpg')",
      "backgroundImage": "url('http://fakeimg.pl/1366x600/')",
      "backgroundSize": "cover"
    };
    var textAlignCenter = {
      "textAlign" : "center"
    };
    return (
      <div style={imgStyle} className="horizontal-align-middle-parent">
        <div style={textAlignCenter} className="horizontal-align-middle-child">
        <span className="font__large font__white">Hi! I am Gary Yeh</span>
        <br />
        <span className="h2 font__white">Front End Developer with passion for studying techonologies.</span>
        </div>
      </div>
    );
  }

});

module.exports = Jumbotron;
