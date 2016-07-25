var React = require('react');
var PropTypes = React.PropTypes;

var Video = React.createClass({
  // <div>
  //   <video autoPlay  poster="./images/White-Keyboard.jpg" id="jumbotronVideo" loop>
  //     <source src="./videos/White-Keyboard.webm" type="video/webm"></source>
  //     <source src="./videos/White-Keyboard.mp4" type="video/mp4"></source>
  //   </video>
  // </div>
  render: function() {
    return (
      <div className="homepage-hero-module">
          <div className="video-container">
              <div className="filter"></div>
              <video autoPlay loop className="fillWidth">
                  <source src="./videos/White-Keyboard.mp4" type="video/mp4"></source>
                  <source src="./videos/White-Keyboard.webm" type="video/webm"></source>
              </video>
              <div className="poster hidden">
                  <img src="./images/White-Keyboard.jpg" alt=""></img>
              </div>
          </div>
      </div>
    );
  }

});

module.exports = Video;
