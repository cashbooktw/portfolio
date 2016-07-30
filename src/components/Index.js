var React = require('react');
var PropTypes = React.PropTypes;
var Header = require('./Header');
var Jumbotron = require('./Jumbotron');
var HeaderCenter = require('./HeaderCenter');
var List = require('./List');
var ScrollTop = require('./ScrollTop');

var Index = React.createClass({
  render: function() {
    return (
      <div>

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
      </div>
    );
  }

});

module.exports = Index;
