var React = require('react');
var PropTypes = React.PropTypes;
import {Link} from 'react-router';
var NavLink = require('./components/NavLink');
var test = React.createClass({

  render: function() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
               <ul role="nav">
                 <li><NavLink to="/about/reactjs/react-router">About</NavLink></li>
                 <li><NavLink to="/resume">Resume</NavLink></li>
               </ul>

               {/* add this */}
               {this.props.children}
      </div>
    );
  }

});

module.exports = test;
