var React = require('react');
var PropTypes = React.PropTypes;

var Article = React.createClass({

  render: function() {
    let myArticle = [];
    if (this.props.title) {
      myArticle.push(<span className="font__large" key={this.props.title}>{this.props.title}</span>)
      myArticle.push(<br key={this.props.title + "x"} />);
    }
    if (this.props.subTitle) {
      myArticle.push(<br key={this.props.subTitle + "x"}/>);
      myArticle.push(<h2 key={this.props.subTitle}>{this.props.subTitle}</h2>);
    }
    if (this.props.content) {
      myArticle.push(<br key={this.props.content + "x"}/>);
      myArticle.push(<h4 key={this.props.content}>{this.props.content}</h4>);
    }
    // <span className="font__large">about me</span>
    // <h2>I am a UX/UI Designer and Front End Developer from Sydney, Australia.</h2>
    // <h4>I enjoy turning complex problems into simple, beautiful and intuitive interface designs. When I'm not coding or pushing pixels, you'll find me in the gym or on the court shooting hoops.</h4>
    return (
      <div>
        {myArticle}
      </div>
    );
  }

});

module.exports = Article;
