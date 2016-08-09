var React = require('react');
var PropTypes = React.PropTypes;
var SpeechBubble = require('./SpeechBubble');
var TimelineBoxRight = React.createClass({
  contextTypes: {
   show: React.PropTypes.bool
  },
  render: function() {
    let display = "block";
    if (this.props.side === "left") {
      display = "block";
    } else {
      display = "none";
    }
    let backgroundStyle = "linear-gradient(-90deg, #fff 85%, " + this.props.visualColor + " 0) repeat-y";
    let styles = {};
    if (this.context.show) {
      styles = {display: "block"};
    } else {
      styles = {display: "none"}
    }
    return (
      <div className="TimelineBox__Left" style={styles}>
        <SpeechBubble speechBubblePosition="speechBubble--left" content={this.props.content} display={display} visualColor={this.props.visualColor} backgroundStyle={backgroundStyle}/>
      </div>
    );
  }
});

module.exports = TimelineBoxRight;
