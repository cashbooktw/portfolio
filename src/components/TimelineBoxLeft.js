var React = require('react');
var PropTypes = React.PropTypes;
var SpeechBubble = require('./SpeechBubble');
var TimelineBoxRight = React.createClass({

  render: function() {
    let display = "block";
    if (this.props.side === "left") {
      display = "block";
    } else {
      display = "none";
    }
    let backgroundStyle = "linear-gradient(-90deg, #fff 85%, " + this.props.visualColor + " 0) repeat-y";
    return (
      <div className="TimelineBox__Left">
        <SpeechBubble speechBubblePosition="speechBubble--left" content={this.props.content} display={display} visualColor={this.props.visualColor} backgroundStyle={backgroundStyle}/>
      </div>
    );
  }
});

module.exports = TimelineBoxRight;
