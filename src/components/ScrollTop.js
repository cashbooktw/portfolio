var React = require('react');
var PropTypes = React.PropTypes;
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import KeyArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import animateScroll from '../services/animationScroll';
var ScrollTop = React.createClass({
  handleTouchTap: function (event){
    event.preventDefault();
    console.log("TAP!");

    animateScroll(document.body, 0, 1000);
  },

  render: function() {
    const styles = {
      smallIcon: {
        width: 36,
        height: 36,
      },
      mediumIcon: {
        width: 48,
        height: 48,
      },
      largeIcon: {
        width: 60,
        height: 60,
      },
      small: {
        width: 72,
        height: 72,
        padding: 16,
      },
      medium: {
        width: 96,
        height: 96,
        padding: 12,
      },
      large: {
        width: 120,
        height: 120,
        padding: 30,
      },
    };
              // style={styles.medium}
                        // iconStyle={styles.mediumIcon}
    return (
      <MuiThemeProvider>
        <IconButton
          tooltip="Scroll to Top"
          tooltipPosition="top-right"
          touch={true}
          style={styles.large}
          iconStyle={styles.largeIcon}
          onTouchTap={this.handleTouchTap}
        >
        <KeyArrowUp />
        </IconButton>
      </MuiThemeProvider>
    );
  }

});

module.exports = ScrollTop;
