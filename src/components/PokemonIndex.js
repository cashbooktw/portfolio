var React = require('react');
var PropTypes = React.PropTypes;
const Article = require('./Article');
// one of the profolios
var PokemonIndex = React.createClass({
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
              title="Pokémon Index"
            />
          <h3>This is implemeted by React and ReFlux.
            The css and RWD style are implemented by bootstrap.</h3>
          <h3>The basic data is retrieved from <a href="http://pokeapi.co/ by API" target="_blank">pokeapi</a>.
            To optimize the page loading, I uses hard code data instead.</h3>
          <h3>Demo site <a href="https://cashbooktw.github.io/react-pokedex/public/" target="_blank">here</a></h3>
          </div>
        </section>

        <section style={styles.sectionStyle} className="row">
          <div id="aboutImg" className={aboutImgClass + " animated fadeInUp aboutImg"}>
            <img src="./images/pokedex/first-page.png"></img>
          </div>
          <div className={aboutArticleClass + " animated fadeInUp"}>
            <Article
              subTitle="Main page"
              content="Each Pokemon has: image, name, types, and index."
            />
          </div>
        </section>

        <section style={styles.sectionStyle} className="row">
          <div id="aboutImg" className={aboutImgClass + " aboutImg"}>
            <img src="./images/pokedex/search.png"></img>
          </div>
          <div className={aboutArticleClass}>
            <Article
              subTitle="Search bar"
              content="It finds all similar matches and hide/remove the other
                Pokemons when user enters a number or a name."
            />
          </div>
        </section>

        <section style={styles.sectionStyle} className="row">
          <div id="aboutImg" className={aboutImgClass + " aboutImg"}>
            <img src="./images/pokedex/name-z-to-a.png"></img>
          </div>
          <div className={aboutArticleClass}>
            <Article
              subTitle="Sort drop down"
              content="Sorts from A-Z, Z-A, Lowest Number First, or Highest Number first."
            />
          </div>
        </section>

        <section style={styles.sectionStyle} className="row">
          <div id="aboutImg" className={aboutImgClass + " aboutImg"}>
            <img src="./images/pokedex/pikachu.png"></img>
          </div>
          <div className={aboutArticleClass}>
            <Article
              subTitle="Details"
              content="Clicking any Pokémon shows detail information of that Pokémon."
            />
          </div>
        </section>

        <section style={styles.sectionStyle} className="row">
          <div id="aboutImg" className={aboutImgClass + " aboutImg"}>
            <img src="./images/pokedex/mobiledetail.png"></img>
          </div>
          <div className={aboutArticleClass}>
            <Article
              subTitle="RWD style"
              content="Main page and detail pages changes along with viewport width."
            />
          </div>
        </section>
      </div>
    );
  }

});

module.exports = PokemonIndex;
