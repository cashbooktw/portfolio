var React = require('react');
var PropTypes = React.PropTypes;
var Article = require('./Article');
var AboutList = require('./AboutList');
import {fullWhite, green500} from 'material-ui/styles/colors';

var About = React.createClass({

  render: function() {
    let styles = {
      sectionStyle: {
        padding: "3em 5%",
      },
      aboutListStyle: {
        backgroundColor: green500,
        padding: "3em 5%"
      },
      flexBoxStyle: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingTop: 10
      }
    };
    return (
      <div>
        <section style={styles.sectionStyle} className="row viewPage">
          <div className="col-7">
            <img src="http://fakeimg.pl/590x440/"></img>
          </div>
          <div className="col-5">
            <Article
              title="about me"
              subTitle="A Front End Developer from Changhua, Taiwan."
              content="I'm creative and have a passion for programming.
                I sometimes participated in community activities to discuss Web development."
            />
          </div>
        </section>
        <section style={styles.aboutListStyle}>
          <div className="row">
            <div className="col-12 flexMiddle">
              <Article title="skills" />
            </div>
          </div>

          <div className="row">
            <div className="col-12" style={styles.flexBoxStyle}>
                <AboutList
                  title={"HTML"}
                  items={["HTML5", "Semantic HTML", "PSD to HTML", "Markdown"]}
                  avatarSrc="http://fakeimg.pl/36x36/"/>
                <AboutList
                  title={"CSS"}
                  items={["CSS3", "Responsive Web Design", "SCSS", "Compass", "SMACSS"]}
                  avatarSrc="http://fakeimg.pl/36x36/"/>
                <AboutList
                  title={"JavaScript"}
                  items={["JavaScript ES6", "React", "Bootstrap 3", "Node.js", "Material-UI"]}
                  avatarSrc="http://fakeimg.pl/36x36/"/>
                <AboutList
                  title={"Development Tool"}
                  items={["Atom", "Git", "Gulp", "Chrome Developer Tools", "Photoshop"]}
                  avatarSrc="http://fakeimg.pl/36x36/"/>
            </div>
          </div>
        </section>
      </div>
    );
  }

});

module.exports = About;
