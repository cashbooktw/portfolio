var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';
var Index = require('./components/Index');
var About = require('./components/About');
var Resume = require('./components/Resume');
var Portfolio = require('./components/Portfolio');
var Contact = require('./components/Contact');
var App = require('./App');

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// const App = () => (

// );


ReactDOM.render((
  <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        {/* make them children of `App` */}
        <Route path="/about" component={About}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
      </Route>
    </Router>
  ),document.getElementById('app')
);
