var React = require('react');
var PropTypes = React.PropTypes;
var Header = require('./Header');
var Jumbotron = require('./Jumbotron');
var HeaderCenter = require('./HeaderCenter');
var List = require('./List');
var ScrollTop = require('./ScrollTop');
var Index = React.createClass({

  render: function() {
    var testStyle = {
      "backgroundColor": "blue"
    };
    return (
      <div>
        <header className="header row vertical-align-middle-parent">
            <div className="col-12 vertical-align-middle-child">
              <Header items={["About Me", "Resume", "Portfolio", "Contact"]} />
            </div>
        </header>
        <div className="content">
          <section className="viewPage">
            <Jumbotron />
          </section>
          <div className="row">
            <div className="col-12">
              <HeaderCenter />
            </div>
          </div>
          <section className="content-groups row vertical-align-middle-parent">
            <div className="col-12 vertical-align-middle-child">
              <List />
            </div>
          </section>
          <div className="row horizontal-align-middle-parent">
            <div className="col-12 horizontal-align-middle-child">
              <ScrollTop />
            </div>
          </div>
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
