var React = require('react');
var PropTypes = React.PropTypes;
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
var MyDrawer = React.createClass({
  getInitialState: function() {
    return {
      isDrawerOpen: false,
      items: []
    };
  },
  handleToggle: function() {
    return this.setState({isDrawerOpen: !this.state.isDrawerOpen});
  },
  handleClose: function() {
    this.setState({isDrawerOpen: false});
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({isDrawerOpen: nextProps.isDrawerOpen})
  },
  render: function() {
    var headerItems = this.props.items.map((item) => {
    return <MenuItem key={item.text} onTouchTap={this.handleClose}>{item.text}</MenuItem>;
  });
    return (

      <MuiThemeProvider>
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.state.isDrawerOpen}
          onRequestChange={(isDrawerOpen) => this.setState({isDrawerOpen})}
        >
        {headerItems}
        </Drawer>
      </div>
           </MuiThemeProvider>
    );
  }

});

module.exports = MyDrawer;
