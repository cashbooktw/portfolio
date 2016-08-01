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
    let positionMyRef = getPosition(myRef).y - 300;
    this.setState({position: positionMyRef});
  },
  componentWillReceiveProps: function(nextProps) {
    console.log("nextProps.scrollY = " + nextProps.scrollY + " this.state.position = " + this.state.position);
    if (nextProps.scrollY >= this.state.position) {
        this.setState({visibility: "visible", myClass: "animated fadeInUp"});
    }

  },
  render: function() {
    var BlockStyle = {
      visibility: this.state.visibility
    };
    let {year, side, content, visualColor} = this.props;
  //   let switchBoxSide = (side === "right") ? <div><TimelineBoxRight year={year} content={content} visualColor={visualColor} /> <TimelineBoxLeft visualColor={visualColor} /><div/> : <div><TimelineBoxRight year={year} visualColor={visualColor} /> <TimelineBoxLeft content={content} visualColor={visualColor} /><div/>;
  // let TBR = (side === "right") ? <TimelineBoxRight year={year} content={content} visualColor={visualColor} />

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
