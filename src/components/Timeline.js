var React = require('react');
var PropTypes = React.PropTypes;
import {red500,pink500,purple500,deepPurple500, indigo500, blue500, lightBlue500, cyan500} from 'material-ui/styles/colors'
var getPosition = require('../services/getPosition');
var TimelineBox = require('./TimelineBox');
var Article = require('./Article');
const ScrollTop = require('./ScrollTop');

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
    this.setState({scrollY: window.scrollY});
    console.log("show = " + this.context.show);
  },
  contextTypes: {
   show: React.PropTypes.bool
  },
  render: function() {
    // var BlockStyle = {
    //   width: 1000,
    //   height: 500,
    //   margin: 10,
    //   backgroundColor: purple500,
    //   padding: 10
    // };
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
                subTitle="&bull; Substitute Military Service in Taiwan Changhua District Court."
              />
            <Article subTitle="&bull; Self-learning Front End technonogies." />
              <Article subTitle="&bull; Participated in Soft & Share online meetups" />
              <Article subTitle="&bull; Reading and programming" />
            </div>

            <TimelineBox
              myRef="A0"
              visualColor={red500}
              scrollY={1000}
              year="2016"
              />
          </div>
        </div>
        <TimelineBox
          myRef="A1"
          visualColor={pink500}
          scrollY={this.state.scrollY}
          year="2015"
          side={(this.context.show)?"left":"right"}
          content="Graduated from National Cheng Kung University and received Master of Science in Engineering Science."
          />

          <TimelineBox
            myRef="A2"
            visualColor={purple500}
            scrollY={this.state.scrollY}
            year="2014"
            side="right"
            content="TECO Green Tech Contest Main Contest Entry Award upon
            'Appliance Energy Management System Based on Cloud Appliance Recognition Computing'."
            />

            <TimelineBox
              myRef="A1"
              visualColor={deepPurple500}
              scrollY={this.state.scrollY}
              year="2013"
              side={(this.context.show)?"left":"right"}
              content="Won second place in Network Communication Software and Innovative Application Contest held by Ministry of Education"
              />

              <TimelineBox
                myRef="A2"
                visualColor={indigo500}
                scrollY={this.state.scrollY}
                year="2012"
                side="right"
                content="Project: Sitting Posture Detection System."
                />

              <div className="row horizontal-align-middle-parent">
                <div className="col-12 horizontal-align-middle-child">
                  <ScrollTop />
                </div>
              </div>
      </div>
    );
  }

});
module.exports = Timeline;
