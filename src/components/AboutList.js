var React = require('react');
var PropTypes = React.PropTypes;
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
var AboutList = React.createClass({

  render: function() {
    let styles = {
      listStyle: {
        width: 228,
        margin: 10
      },
      listItemStyle: {
        padding: 8
      }
    };
    var aboutListItems = [];
    for (let value of this.props.items) {
      aboutListItems.push(<ListItem key={value} primaryText={value} disabled={true} style={styles.listItemStyle}/>);
    }
    // <ListItem primaryText="Inbox" />
    // <ListItem primaryText="Inbox" />
    // <ListItem primaryText="Inbox" />
    return (

        <MuiThemeProvider>
          <Paper zDepth={5} style={styles.listStyle}>
            <List>
              <ListItem
                primaryText={this.props.title}
                leftAvatar={<Avatar src={this.props.avatarSrc} />}
                disabled={true}
              />
              <Divider />
              {aboutListItems}
            </List>
          </Paper>
        </MuiThemeProvider>

    );
  }

});

module.exports = AboutList;
