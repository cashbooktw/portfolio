var React = require('react');
var PropTypes = React.PropTypes;
var Article = require('./Article');
var AboutList = require('./AboutList');
const ScrollTop = require('./ScrollTop');
const MyPaper = require('./MyPaper');
import {fullWhite, green500} from 'material-ui/styles/colors';

/*
This is the about page.
*/
var About = React.createClass({
  contextTypes: {
   show: React.PropTypes.bool
  },
  render: function() {
    let styles = {
      sectionStyle: {
        padding: "3em 5%",
      },
      aboutListStyle: {
        backgroundColor: green500,
        padding: "3em 5%  0 5%"
      },
      flexBoxStyle: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingTop: 10
      }
    };
    let aboutImgClass = "";
    let aboutArticleClass = "";
    if (this.context.show) {
      // this.refs.aboutImg.classList.add("col-7");
      aboutImgClass = "col-7";
      aboutArticleClass = "col-5";
    } else {
      // this.refs.aboutImg.classList.remove("col-7");
      // this.refs.aboutImg.classList.add("col-12");
      aboutImgClass = "col-12";
      aboutArticleClass = "col-12";
    }
    return (
      <div>
        <section  className="row viewPage">
          <div id="aboutImg" className={aboutImgClass + " animated fadeInUp aboutImg"}>
            <img src="./images/about_590x440.jpg"></img>
          </div>
          <div className={aboutArticleClass + " animated fadeInUp"}>
            <Article
              title="about me"
              subTitle="A Front End Developer from Changhua, Taiwan."
              content="I'm creative and have a passion for programming.
                I participate in community activities to discuss Web development."
            />
          </div>
        </section>

{/*
        <section style={styles.sectionStyle}>
          <div className="row">
            <div className="col-12" style={styles.flexBoxStyle}>
              <MyPaper />
            </div>
          </div>
        </section>
*/}
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
                  avatarSrc="./images/HTML5_Badge_64.png"/>
                <AboutList
                  title={"CSS"}
                  items={["CSS3", "Responsive Web Design", "SCSS", "Compass", "SMACSS"]}
                  avatarSrc="./images/css3-icon_36x36.png"/>
                <AboutList
                  title={"JavaScript"}
                  items={["JavaScript ES6", "React", "Bootstrap 3", "Node.js", "Material-UI"]}
                  avatarSrc="./images/JS_36x36.png"/>
                <AboutList
                  title={"Development Tool"}
                  items={["Atom", "Git", "Webpack", "Chrome Developer Tools", "Photoshop"]}
                  avatarSrc="./images/tools.png"/>
            </div>
          </div>
          <div className="row horizontal-align-middle-parent">
            <div className="col-12 horizontal-align-middle-child">
              <ScrollTop />
            </div>
          </div>
        </section>

      </div>
    );
  }

});

module.exports = About;
