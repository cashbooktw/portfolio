var React = require('react');
var PropTypes = React.PropTypes;
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var Contact = React.createClass({
  contextTypes: {
   show: React.PropTypes.bool
  },
  render: function() {
    let styles = {
      sectionStyle: {
        padding: "3em 5%",
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
        <MuiThemeProvider>
          <section style={styles.sectionStyle} className="row viewPage">
            <div id="aboutImg" className={aboutImgClass + " animated fadeInUp aboutImg"}>
              <img src="./images/eat_590x440.jpg"></img>
            </div>
            <div className={aboutArticleClass + " animated fadeInUp"}>
              <List>
                <ListItem
                primaryText="Star me on Github"
                leftAvatar={<Avatar src="images/github36.png" />}
                onTouchTap={() => {window.open("https://github.com/cashbooktw/")}}
                />
                <ListItem
                primaryText="Like me on Codepen"
                leftAvatar={<Avatar src="images/codepen36.png" />}
                onTouchTap={() => {window.open("http://codepen.io/cashbook/")}}
                />
                <ListItem
                primaryText="Discuss with me on Logdown"
                leftAvatar={<Avatar src="images/logdown36.png" />}
                onTouchTap={() => {window.open("http://cashbook.logdown.com/")}}
                />
                <ListItem
                primaryText="Email: cashbooktw@gmail.com"
                leftAvatar={<Avatar src="images/gmail36.png" />}
                />
              </List>
            </div>
          </section>
        </MuiThemeProvider>
      </div>
    );
  }

});

module.exports = Contact;
