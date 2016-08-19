var React = require('react');
var PropTypes = React.PropTypes;
const Article = require('./Article');
// one of the profolios
var MultiplayerGame = React.createClass({
  contextTypes: {
   show: React.PropTypes.bool
  },
  render: function() {
    let styles = {
      sectionStyle: {
        padding: "3em 5%",
      }
    };
    let aboutImgClass = "";
    let aboutArticleClass = "";
    if (this.context.show) {
      aboutImgClass = "col-7";
      aboutArticleClass = "col-5";
    } else {
      aboutImgClass = "col-12";
      aboutArticleClass = "col-12";
    }
    return (
      <div>
        <section style={styles.sectionStyle} className="row">
          <div className={"col-12" + " animated fadeInUp"}>
            <Article
              title="Multiplayer Game"
            />
          <h3>The multiplayer game is implemented by WebSocket and WebGL.
            I use Three.js as the implement of WebGL. WebSocket server is built with Node.js</h3>
          </div>
        </section>

        <section style={styles.sectionStyle} className="row">
          <div id="aboutImg" className={aboutImgClass + " animated fadeInUp aboutImg"}>
            <img src="./images/mpgame/game.png"></img>
          </div>
          <div className={aboutArticleClass + " animated fadeInUp"}>
            <Article
              subTitle="Multiplayer Game Scene"
              content="When a client connects to a server,
              the server sends the content and information to the client."
            />
          <Article
            content="If the client moves its character, the control messages are sent instantly.
            The other clients would receive the update messages and refresh their frames."
          />
          </div>
        </section>

        <section style={styles.sectionStyle} className="row">
          <div id="aboutImg" className={aboutImgClass + " aboutImg"}>
            <img src="./images/mpgame/multiplayer.png"></img>
          </div>
          <div className={aboutArticleClass}>
            <Article
              subTitle="Keep Synchronized."
              content="There is a playerlist recording statuses of all clients.
              When a client changes its' status, the playerlist would refresh and broadcast to other clients.
              "
            />
          </div>
        </section>
      </div>
    );
  }

});

module.exports = MultiplayerGame;
