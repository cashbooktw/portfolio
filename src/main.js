var React = require('react');
var ReactDOM = require('react-dom');

var Index = require('./components/Index');

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <div>
    <Index />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
