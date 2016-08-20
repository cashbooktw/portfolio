var React = require('react');
var PropTypes = React.PropTypes;
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {fullWhite} from 'material-ui/styles/colors'
import HamburgerButtonIcon from 'material-ui/svg-icons/navigation/menu';
import RaisedButton from 'material-ui/RaisedButton';
var NavLink = require('./NavLink');

var Header = React.createClass({
  getInitialState: function() {
    return {
      show: this.props.show //false to display HamburgerButton
    };
  },
  componentWillReceiveProps: function(nextProps) {
    //if media query screen size change, receive new props from App.js
    this.setState({show: nextProps.show})
  },
  render: function() {
    let headerItems = (<div></div>); //initial headerItems
    if (this.state.show) { //true to wide header
        headerItems = this.props.items.map((item) => {
        return <NavLink key={item.text} to={item.link} className="flexMiddle"><FlatButton label={item.text} /></NavLink>;
      });
    } else { // false to HamburgerButton
      headerItems = (<RaisedButton
                      icon={<HamburgerButtonIcon />}
                      onTouchTap={this.props._onHambugerBtnClick}
                      />);
    }

    const muiTheme = getMuiTheme({
      toolbar: {
        backgroundColor: this.props.color
      }
    });

    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Toolbar>
            <ToolbarGroup>
              <NavLink className="flexMiddle" to="/"><FlatButton label="Gary Yeh" /></NavLink>
            </ToolbarGroup>
            <ToolbarGroup >
              {headerItems}
            </ToolbarGroup>

          </Toolbar>
        </MuiThemeProvider>
      </div>
    );
  }

});

module.exports = Header;
