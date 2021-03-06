var React = require('react');
var PropTypes = React.PropTypes;
var SpeechBubble = require('./SpeechBubble');
var TimelineBoxRight = React.createClass({
  contextTypes: {
   show: React.PropTypes.bool
  },
  render: function() {
    let display = "block";
    if (this.props.side === "right") {
      display = "block";
    } else {
      display = "none";
    }
    let circleStyle = {
      backgroundColor: this.props.visualColor
    };
    // let backgroundStyle = "linear-gradient(90deg, #fff 85%, " + this.props.visualColor + " 0) repeat-y";
    let backgroundStyle = "linear-gradient(-90deg, " + this.props.visualColor + " 35px, #fff 0) repeat-y";
    // let timelineBoxRightMargin = (this.context.show)?0:20;
    // var test = {
    //   marginLeft: timelineBoxRightMargin
    // };

    return (
      <div className="TimelineBox__Right">
        <div className="circle__title">{this.props.year}</div>
        <div className="circle" style={circleStyle}></div>
        <SpeechBubble speechBubblePosition="speechBubble" content={this.props.content} display={display} visualColor={this.props.visualColor} backgroundStyle={backgroundStyle}/>
      </div>
    );
  }
});

module.exports = TimelineBoxRight;
