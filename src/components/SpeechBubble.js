var React = require('react');
var PropTypes = React.PropTypes;

var SpeechBubble = React.createClass({

  render: function() {
    let speechBubblePosition = this.props.speechBubblePosition;
    let styles = {
      display: this.props.display,
      background: this.props.backgroundStyle
    };
    return (
      <p className={speechBubblePosition} style={styles}>{this.props.content}</p>
    );
  }

});

module.exports = SpeechBubble;
