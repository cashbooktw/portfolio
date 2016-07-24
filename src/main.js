var React = require('react');
var ReactDOM = require('react-dom');

var Index = require('./components/Index');

const App = () => (
  <div>
    <Index />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
