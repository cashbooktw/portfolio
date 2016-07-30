var React = require('react');
var PropTypes = React.PropTypes;
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var ListItem = React.createClass({

  render: function() {
    var listItemStyle = {
      padding: 10
    };
    return (
      <div style={listItemStyle}>
        <MuiThemeProvider >
          <Card >
            <CardMedia
              overlay={<CardTitle
                title="Overlay title"
                subtitle="Overlay subtitle"
                />}
                >
              <img src="http://fakeimg.pl/314x252/" />
            </CardMedia>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }

});

module.exports = ListItem;
