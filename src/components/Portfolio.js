var React = require('react');
var PropTypes = React.PropTypes;
var NavLink = require('./NavLink');
const HeaderCenter = require('./HeaderCenter');
const List = require('./List');
const ScrollTop = require('./ScrollTop');
var Portfolio = React.createClass({

  render: function() {
    return (
      <div>
        {this.props.children}
        <div className="row">
          <div className="col-12">
            <HeaderCenter text="My Portfolios" />
          </div>
        </div>
        <section className="content-groups row">
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
    );
  }

});

module.exports = Portfolio;
