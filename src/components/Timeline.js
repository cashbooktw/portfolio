var React = require('react');
var PropTypes = React.PropTypes;
import {red500,pink500,purple500,deepPurple500, indigo500, blue500, lightBlue500, cyan500} from 'material-ui/styles/colors'
// var ScrollReveal = require('scrollreveal');

var Timeline = React.createClass({
  getInitialState: function() {
    return {
      visibility: "hidden"
    };
  },
  onScroll: function() {
    console.log("scrollY = " + window.scrollY);
    if (scrollY >= 600) {
      this.setState({visibility: "visible"});
    } else {
      this.setState({visibility: "hidden"});
    }
  },
  componentDidMount: function() {
    window.addEventListener("scroll", this.onScroll);
  },
  render: function() {
    var BlockStyle = {
      width: 1000,
      height: 500,
      margin: 10,
      backgroundColor: indigo500,
      padding: 10
    };
    var BlockStyle2 = {
      width: 1000,
      height: 500,
      margin: 10,
      backgroundColor: cyan500,
      padding: 10,
      visibility: this.state.visibility
    };

    // <div style={BlockStyle} id="A3"/>
    // <div style={BlockStyle} id="A4"/>
    // <div style={BlockStyle} id="A5"/>
    // <div style={BlockStyle} id="A6"/>
    // <div style={BlockStyle} id="A7"/>
    // <div style={BlockStyle} id="A8"/>
    // <div style={BlockStyle} id="A9"/>
    // <div style={BlockStyle} id="A0"/>
    return (
      <div>
        <div style={BlockStyle} />
        <div style={BlockStyle2} />


      </div>
    );
  }

});

module.exports = Timeline;
