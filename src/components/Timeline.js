var React = require('react');
var PropTypes = React.PropTypes;
import {red500,pink500,purple500,deepPurple500, indigo500, blue500, lightBlue500, cyan500} from 'material-ui/styles/colors'
var getPosition = require('../services/getPosition');
var TimelineBox = require('./TimelineBox');
var Article = require('./Article');
var Timeline = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  componentDidMount: function() {
    window.addEventListener("scroll", this.onScroll);
  },
  componentWillUnmount: function() {
    window.removeEventListener("scroll",  this.onScroll);
  },
  onScroll: function() {
    console.log("scrollYYY = " + window.scrollY);
    this.setState({scrollY: window.scrollY});
  },
  contextTypes: {
   router: React.PropTypes.object
  },
  render: function() {
    var BlockStyle = {
      width: 1000,
      height: 500,
      margin: 10,
      backgroundColor: purple500,
      padding: 10
    };
    let styles = {
      sectionStyle: {
        padding: "3em 5%"
      }
    }
    return (
      <div className="timeline" ref="timeline">
        <div className="row">
          <div className="col-12">
            <div className="bigBubble">
              <Article
                title="What I did this year"
                subTitle="Substitute Military Service in Taiwan Changhua District Court."
              />
            <Article subTitle="self-learning Front End technonogies." />
              <Article subTitle="participated in Soft & Share online meetups" />
              <Article subTitle="reading and programming" />
            </div>
            <div className="bigBubble--after"></div>
            <TimelineBox
              myRef="A0"
              visualColor={purple500}
              scrollY={1000}
              year="2016"
              />
          </div>
        </div>
        <TimelineBox
          myRef="A1"
          visualColor={indigo500}
          scrollY={this.state.scrollY}
          year="2015"
          side="left"
          content="This is the 2015 content"
          />

          <TimelineBox
            myRef="A2"
            visualColor={cyan500}
            scrollY={this.state.scrollY}
            year="2014"
            side="right"
            content="This is the 0214 content"
            />
      </div>
    );
  }

});
module.exports = Timeline;
