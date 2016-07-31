var React = require('react');
var PropTypes = React.PropTypes;
import {red500,pink500,purple500,deepPurple500, indigo500, blue500, lightBlue500, cyan500} from 'material-ui/styles/colors'
var getPosition = require('../services/getPosition');
var TimelineBox = require('./TimelineBox');

var Timeline = React.createClass({
  getInitialState: function() {
    return {
      visibility: "hidden"
    };
  },
  onScroll: function() {
    console.log("scrollYYY = " + window.scrollY);
    this.setState({scrollY: window.scrollY});
  },
  componentDidMount: function() {
    window.addEventListener("scroll", this.onScroll);
  },
  componentWillUnmount: function() {
    window.removeEventListener("scroll",  this.onScroll);
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
    return (
      <div>
        <TimelineBox myRef="A1" bgColor={indigo500} scrollY={this.state.scrollY} />
        <TimelineBox myRef="A2" bgColor={cyan500} scrollY={this.state.scrollY}/>

      </div>
    );
  }

});

module.exports = Timeline;
