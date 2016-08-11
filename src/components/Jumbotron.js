var React = require('react');
var PropTypes = React.PropTypes;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
var Jumbotron = React.createClass({
  getInitialState: function() {
    return {
      open: false
    };
  },
  handleToggle: function() {
    this.setState({open: !this.state.open});
  },
  render: function() {
    // let styles = {
    //   container: {
    //     width: "100%",
    //     height: "600px",
    //     backgroundImage: "url('http://fakeimg.pl/1366x600/')",
    //     backgroundSize: "cover",
    //     textAlign: "center"
    //   }
    // };
    let colorTitleStyle = {
      color: "#2196F3"
    };
    return (
      <MuiThemeProvider>
        <div className="horizontal-align-middle-parent jumbotron">
          <div className="horizontal-align-middle-child">
          <span className="font__large font__white">{this.props.title}<span style={colorTitleStyle}>{this.props.colorTitle}</span></span>
          <br />
          <span className="h2 font__white">{this.props.subTitle}</span>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

});

module.exports = Jumbotron;
