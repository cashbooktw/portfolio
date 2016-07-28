var React = require('react');
var PropTypes = React.PropTypes;
var Header = require('./Header');
var Jumbotron = require('./Jumbotron');
var HeaderCenter = require('./HeaderCenter');
var List = require('./List');
var ScrollTop = require('./ScrollTop');
var Footer = require('./Footer');
var MyDrawer = require('./MyDrawer');
import {fullWhite, blue500} from 'material-ui/styles/colors'
var Index = React.createClass({
  getInitialState: function() {
    return {
      show: false,
      isDrawerOpen: false
    };
  },
  componentWillMount: function() {
    const mql = window.matchMedia("(min-width: 768px)");
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, show: mql.matches});
  },
  mediaQueryChanged: function() {
     this.setState({show: this.state.mql.matches});
     console.log("show = " + this.state.show);
  },
  onHambugerBtnClick: function() {
    this.setState({isDrawerOpen: true});
    console.log("isDrawerOpen = " + this.state.isDrawerOpen);
  },
  render: function() {
    var testStyle = {
      "backgroundColor": "blue"
    };
    var footerStyle = {
      "backgroundColor": blue500
    };
    var indexProps = {
      show: this.state.show,
      _onHambugerBtnClick: this.onHambugerBtnClick
    };
    var pageLinkItems = [
      {text: "About Me", link: "#"},
      {text: "Resume", link: "#"},
      {text: "Portfolio", link: "#"},
      {text: "Contact", link: "#"}
    ];
    return (
      <div>
        <header className="header row vertical-align-middle-parent">
            <div className="col-12 vertical-align-middle-child">
              <Header
                items={pageLinkItems}
                color={fullWhite}
                brand={{image: "http://fakeimg.pl/62x62/", link: "#"}}
                {...indexProps}
                />
            </div>
        </header>
        <MyDrawer isDrawerOpen={this.state.isDrawerOpen} items={pageLinkItems}/>
        <div className="content">
          <section className="viewPage">
            <Jumbotron
              title="Hi! I am "
              colorTitle="Gary Yeh"
              subTitle="Front End Developer with passion for studying techonologies."
            />
          </section>
          <div className="row">
            <div className="col-12">
              <HeaderCenter text="Some of my latest work" />
            </div>
          </div>
          <section className="content-groups row ">
            <div className="col-12 ">
              <List />
            </div>
          </section>
          <div className="row horizontal-align-middle-parent">
            <div className="col-12 horizontal-align-middle-child">
              <ScrollTop />
            </div>
          </div>
        </div>
        <footer className="footer flexMiddle" style={footerStyle}>
          <div className="row ">
            <div className="col-12" >
              <Footer
                items={pageLinkItems}
                color={blue500}
                brandText="&copy; 2016 cashbook"
              />
            </div>
          </div>
        </footer>
      </div>
    );
  }

});

module.exports = Index;
