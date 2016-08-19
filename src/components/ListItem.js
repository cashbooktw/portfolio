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
                title={this.props.title}
                subtitle={this.props.subTitle}
                />}
                >
              <img src={this.props.imgSrc} />
            </CardMedia>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }

});

module.exports = ListItem;
