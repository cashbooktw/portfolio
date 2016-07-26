var React = require('react');
var PropTypes = React.PropTypes;

var Jumbotron = React.createClass({

  render: function() {
    var imgStyle = {
      "width": "100%",
      "height": "600px",
      "backgroundImage": "url('http://fakeimg.pl/1366x600/')",
      "backgroundSize": "cover"
    };
    var textAlignCenter = {
      "textAlign" : "center"
    };
    return (
      <div style={imgStyle} className="horizontal-align-middle-parent">
        <div style={textAlignCenter} className="horizontal-align-middle-child">
        <span className="font__large font__white">{this.props.title}{this.props.colorTitle}</span>
        <br />
        <span className="h2 font__white">{this.props.subTitle}</span>
        </div>
      </div>
    );
  }

});

module.exports = Jumbotron;
