var React = require('react');
var PropTypes = React.PropTypes;
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
var NavLink = require('./NavLink');
// the drawer is to display hamburge button header items
var MyDrawer = React.createClass({
  getInitialState: function() {
    return {
      isDrawerOpen: false,
      items: []
    };
  },
  handleClose: function() {
    this.props._onDrawerClose();
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({isDrawerOpen: nextProps.isDrawerOpen})
  },
  render: function() {
    var headerItems = this.props.items.map((item) => {
      return <NavLink key={item.text} to={item.link} onTouchTap={this.handleClose}><MenuItem>{item.text}</MenuItem></NavLink>;
  });
    return (
      <MuiThemeProvider>
        <div>
          <Drawer
            docked={false}
            width={200}
            open={this.state.isDrawerOpen}
            onRequestChange={this.handleClose}
            >
            {headerItems}
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }

});

module.exports = MyDrawer;
