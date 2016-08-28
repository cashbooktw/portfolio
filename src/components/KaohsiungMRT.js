var React = require('react');
var PropTypes = React.PropTypes;
const Article = require('./Article');
// one of the profolios
var KaohsiungMRT = React.createClass({
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
              title="Kaohsiung MRT Immediate Information"
            />
          <h3>The map data is retrieved from Google Map API, and the MRT data is
            retrieved from <a href="http://data.kaohsiung.gov.tw/Opendata/">Open Data.Kaohsiung</a>.</h3>
          <h3>Demo site <a href="http://kaohsiung-mrt.herokuapp.com">here</a>.</h3>
          </div>
        </section>

        <section style={styles.sectionStyle} className="row">
          <div id="aboutImg" className={aboutImgClass + " animated fadeInUp aboutImg"}>
            <img src="./images/khmrt/KHMRT1.png"></img>
          </div>
          <div className={aboutArticleClass + " animated fadeInUp"}>
            <Article
              subTitle="Refresh Information"
              content="The information changes after a time period.
              The data is retrieved from node.js server on Heroku."
            />
          </div>
        </section>

        <section style={styles.sectionStyle} className="row">
          <div id="aboutImg" className={aboutImgClass + " aboutImg"}>
            <img src="./images/khmrt/KHMRT2.png"></img>
          </div>
          <div className={aboutArticleClass}>
            <Article
              subTitle="Interactive with map"
              content="The markers on the map are clickable.
              The marker moves to the center of the map after being clicked."
            />
            <Article
              content="The table section shows the arriving time of the MRT."
            />
          </div>
        </section>
      </div>
    );
  }

});

module.exports = KaohsiungMRT;
