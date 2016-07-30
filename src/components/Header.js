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
      show: true
    };
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({show: nextProps.show})
  },
  render: function() {
    let headerItems = (<div></div>);
    if (this.state.show) {
        headerItems = this.props.items.map((item) => {
        return <NavLink key={item.text} to={item.link}><FlatButton label={item.text} /></NavLink>;
      });
    } else {
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
            <img src={this.props.brand.image} alt={this.props.brandText}/>
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
