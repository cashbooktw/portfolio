var React = require('react');
var PropTypes = React.PropTypes;
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {fullWhite} from 'material-ui/styles/colors'
import hamburgerButtonIcon from 'material-ui/svg-icons/navigation/menu';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
var Header = React.createClass({
  getInitialState: function() {
    return {
      show: this.props.show,
      open: false
    };
  },
  handleToggle: function() {
    this.setState({open: !this.state.open});
  },

  render: function() {
    let headerItems = (<div></div>);
    if (this.state.show) {
        headerItems = this.props.items.map((item) => {
        return <FlatButton key={item.text} label={item.text} />;
      });
    }
    const HamburgerButton = (
      <div>
             <RaisedButton
               label="Toggle Drawer"
               onTouchTap={this.handleToggle}
             />
             <Drawer open={this.state.open} openSecondary={true}>
               <MenuItem>Menu Item</MenuItem>
               <MenuItem>Menu Item 2</MenuItem>
             </Drawer>
           </div>
    );
    // const headerItems = this.props.items.map((item) => {
    //   return <FlatButton key={item.text} label={item.text} />;
    // });
    const muiTheme = getMuiTheme({
      toolbar: {
        backgroundColor: this.props.color
      }
    });
              // {headerItems}
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Toolbar>
            <a href={this.props.brand.link}><img src={this.props.brand.image} alt={this.props.brandText}/></a>
            <ToolbarGroup >

            </ToolbarGroup>
            {HamburgerButton}
          </Toolbar>
        </MuiThemeProvider>
      </div>
    );
  }

});

module.exports = Header;
