var React = require('react');
var PropTypes = React.PropTypes;
var Header = require('./Header');
var Video = require('./Video');
// var MyDivider = require('./MyDivider');
// var WhiteSpace = require('./WhiteSpace');
var HeaderCenter = require('./HeaderCenter');
var Index = React.createClass({

  render: function() {
    var testStyle = {
      "backgroundColor": "blue"
    };
              // <MyDivider marginVertical={20} />
    return (
      <div>
        <header className="header row vertical-align-middle-parent">
            <div className="col-12 vertical-align-middle-child">
              <Header items={["About Me", "Resume", "Portfolio", "Contact"]} />
            </div>
        </header>
        <div className="content">
          <section>
              <Video />
              <div className="video--words horizontal-align-middle-parent">
                <h2>Hi! I am Gary Yeh</h2>
                <p>Front End Developer with passion for studying techonologies.</p>
              </div>
          </section>
          <HeaderCenter />
          <section className="content-groups row ">
            <div className="col-12" style={testStyle}>
            test
            </div>
          </section>
        </div>
        <footer className="footer row" >
          <div className="col-12" style={testStyle}>
          test
          </div>
        </footer>
      </div>
    );
  }

});

module.exports = Index;
