var React = require('react');
var PropTypes = React.PropTypes;
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {fullWhite} from 'material-ui/styles/colors'
var NavLink = require('./NavLink');

var Header = React.createClass({

  render: function() {
    const headerItems = this.props.items.map((item) => {
      return <NavLink key={item.text} to={item.link}><FlatButton label={item.text} hoverColor={fullWhite}/></NavLink>;
    });
    const muiTheme = getMuiTheme({
      toolbar: {
        backgroundColor: this.props.color
      }
    });

    var toolbarTitleStyle = {
      color: fullWhite
    };

    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text={this.props.brandText} style={toolbarTitleStyle}/>
            </ToolbarGroup>
            <ToolbarGroup>
              {headerItems}
            </ToolbarGroup>
          </Toolbar>
        </MuiThemeProvider>
      </div>
    );
  }

});

module.exports = Header;
