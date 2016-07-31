var React = require('react');
var PropTypes = React.PropTypes;
var getPosition = require('../services/getPosition');
var TimelineBox = React.createClass({
  getInitialState: function() {
    return {
      visibility: "hidden",
      myClass: ""
    };
  },
  componentDidMount: function() {
    var A1 = this.refs[this.props.myRef];
    var positionA1 = getPosition(A1).y - 250;
    this.setState({position: positionA1});
  },
  componentWillReceiveProps: function(nextProps) {
    console.log("nextProps.scrollY = " + nextProps.scrollY + " this.state.position = " + this.state.position);
    if (nextProps.scrollY >= this.state.position) {
        this.setState({visibility: "visible", myClass: "animated fadeInUp"});
    }

  },
  render: function() {
    var BlockStyle = {
      width: 1000,
      height: 500,
      margin: 10,
      backgroundColor: this.props.bgColor,
      padding: 10,
      visibility: this.state.visibility
    };

    return (
      <div style={BlockStyle} ref={this.props.myRef} className={this.state.myClass}>

      </div>
    );
  }

});

module.exports = TimelineBox;
