var React = require('react');
var PropTypes = React.PropTypes;
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
var MyPaper = React.createClass({

  render: function() {
    let paperStyle = {
      height: 140,
      width: 140,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block'
    };
    return (
      <div>
        <MuiThemeProvider >
        <div>
          <Paper style={paperStyle} zDepth={3} circle={false} />
          <Paper style={paperStyle} zDepth={4} circle={false} />
          <Paper style={paperStyle} zDepth={5} circle={false}></Paper>
          <Paper style={paperStyle} zDepth={5} circle={false}></Paper>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }

});

module.exports = MyPaper;
