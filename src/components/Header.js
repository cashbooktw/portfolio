var React = require('react');
var PropTypes = React.PropTypes;
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {fullWhite} from 'material-ui/styles/colors'

var Header = React.createClass({

  render: function() {
    const headerItems = this.props.items.map((item) => {
      return <FlatButton key={item} label={item} />;
    });
    const muiTheme = getMuiTheme({
      toolbar: {
        backgroundColor: fullWhite
      }
    });
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Toolbar>
            <ToolbarGroup >
              <ToolbarTitle text="Gary's Portfolio" />
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
