var React = require('react');
var PropTypes = React.PropTypes;
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fullWhite, grey400} from 'material-ui/styles/colors'
var MyDivider = React.createClass({

  render: function() {

    const dividerStyle = {
      "paddingTop": this.props.marginVertical,
      "paddingBottom": this.props.marginVertical,
      "backgroundColor": fullWhite,
      "color": grey400
    };
//       "backgroundColor": fullWhite
    return (
      <MuiThemeProvider>
        <Divider style={dividerStyle}/>
      </MuiThemeProvider>
    );
  }


});

module.exports = MyDivider;
