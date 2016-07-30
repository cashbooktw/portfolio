var React = require('react');
var PropTypes = React.PropTypes;
var NavLink = require('./components/NavLink');
var Header = require('./components/Header');
var MyDrawer = require('./components/MyDrawer');
var Index = require('./components/Index');
var Footer = require('./components/Footer');
import {fullWhite, blue500} from 'material-ui/styles/colors'
var App = React.createClass({
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
     if(this.state.mql.matches) {
       this.onDrawerClose();
     }
  },
  onHambugerBtnClick: function() {
    this.setState({isDrawerOpen: true});
    console.log("onHambugerBtnClick, isDrawerOpen = " + this.state.isDrawerOpen);
  },
  onDrawerClose: function() {
    this.setState({isDrawerOpen: false});
    console.log("onDrawerClose, isDrawerOpen = " + this.state.isDrawerOpen);
  },
  render: function() {
    var indexProps = {
      show: this.state.show,
      _onHambugerBtnClick: this.onHambugerBtnClick
    };
    var pageLinkItems = [
      {text: "About", link: "/about"},
      {text: "Resume", link: "/resume"},
      {text: "Portfolio", link: "/portfolio"},
      {text: "Contact", link: "/contact"}
    ];
    var footerStyle = {
      backgroundColor: blue500
    };
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
        <MyDrawer isDrawerOpen={this.state.isDrawerOpen} items={pageLinkItems} _onDrawerClose={this.onDrawerClose}/>

        {this.props.children}

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

module.exports = App;
