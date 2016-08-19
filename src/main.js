var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, hashHistory, browserHistory, IndexRoute, RouterContext} from 'react-router';
var Index = require('./components/Index');
var About = require('./components/About');
var Timeline = require('./components/Timeline');
var Portfolio = require('./components/Portfolio');
var Contact = require('./components/Contact');
var App = require('./App');
var PokemonIndex = require('./components/PokemonIndex');
var KaohsiungMRT = require('./components/KaohsiungMRT');
var MultiplayerGame = require('./components/MultiplayerGame');

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// const App = () => (

// );
var onRouteChange = function () {
    window.scrollTo(0, 0);
    // console.log("Router.isActive = " + this.context.router.isActive({pathname: "/timeline"}));
}.bind(this);

//  onUpdate={onRouteChange}
ReactDOM.render((
  <Router history={browserHistory} onUpdate={onRouteChange}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        {/* make them children of `App` */}
        <Route path="/about" component={About}/>
        <Route path="/timeline" component={Timeline}/>
        <Route path="/portfolio" component={Portfolio}>
          <Route path="/portfolio/pokemon-index" component={PokemonIndex}></Route>
          <Route path="/portfolio/kaohsiung-MRT" component={KaohsiungMRT}></Route>
          <Route path="/portfolio/multiplayer-game" component={MultiplayerGame}></Route>
        </Route>
        <Route path="/contact" component={Contact}/>
      </Route>
    </Router>
  ),document.getElementById('app')
);
