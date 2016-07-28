var React = require('react');
var PropTypes = React.PropTypes;
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {fullWhite} from 'material-ui/styles/colors'
import HamburgerButtonIcon from 'material-ui/svg-icons/navigation/menu';
import RaisedButton from 'material-ui/RaisedButton';


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
        return <FlatButton key={item.text} label={item.text} />;
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
            <a href={this.props.brand.link}><img src={this.props.brand.image} alt={this.props.brandText}/></a>
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
