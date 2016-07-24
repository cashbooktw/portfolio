var React = require('react');
var PropTypes = React.PropTypes;

var Video = React.createClass({

  render: function() {
    return (
      <div>
        <video autoPlay  poster="./images/White-Keyboard.jpg" id="jumbotronVideo" loop>
          <source src="./videos/White-Keyboard.webm" type="video/webm"></source>
          <source src="./videos/White-Keyboard.mp4" type="video/mp4"></source>
        </video>
      </div>
    );
  }

});

module.exports = Video;
