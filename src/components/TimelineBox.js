var React = require('react');
var PropTypes = React.PropTypes;
var getPosition = require('../services/getPosition');
var SpeechBubble = require('./SpeechBubble');
var TimelineBoxRight = require('./TimelineBoxRight');
var TimelineBoxLeft = require('./TimelineBoxLeft');

var TimelineBox = React.createClass({
  getInitialState: function() {
    return {
      visibility: "hidden",
      myClass: ""
    };
  },
  componentDidMount: function() {
    let myRef = this.refs[this.props.myRef];
    let positionMyRef = getPosition(myRef).y - 300;// the position is on the block center, so it's a magic number
    this.setState({position: positionMyRef});
    if (this.props.scrollY >= positionMyRef) {
      this.setState({visibility: "visible", myClass: "animated fadeInUp"});
    }
  },
  componentWillReceiveProps: function(nextProps) {
    //only when user switch to "/timeline", the timeline can be seen and animate
    if ((nextProps.scrollY >= this.state.position) && this.context.router.isActive({pathname: "/timeline"})) {
        this.setState({visibility: "visible", myClass: "animated fadeInUp"});
    }
  },
  contextTypes: {
   router: React.PropTypes.object
  },
  render: function() {
    var BlockStyle = {
      visibility: this.state.visibility
    };
    let {year, side, content, visualColor} = this.props;
    return (
      <div style={BlockStyle} ref={this.props.myRef} className={this.state.myClass}>
        <div className="TimelineBox__wrapper">
          <div className="TimelineBox__container">
            <TimelineBoxLeft side={side} visualColor={visualColor} content={content}/>
            <TimelineBoxRight side={side} visualColor={visualColor} content={content} year={year} />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = TimelineBox;
