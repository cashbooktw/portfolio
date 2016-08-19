var React = require('react');
var PropTypes = React.PropTypes;

//Article contains three differnt font-size, title, subTitle, and content
var Article = React.createClass({
  // contextTypes: {
  //  show: React.PropTypes.bool
  // },
  render: function() {
    let myArticle = [];
    if (this.props.title) {
      myArticle.push(<span className="font__middle" key={this.props.title}>{this.props.title}</span>)
      myArticle.push(<br key={this.props.title + "x"} />);
    }
    if (this.props.subTitle) {
      myArticle.push(<br key={this.props.subTitle + "x"}/>);
      myArticle.push(<h2 key={this.props.subTitle}>{this.props.subTitle}</h2>);
    }
    if (this.props.content) {
      myArticle.push(<br key={this.props.content + "x"}/>);
      myArticle.push(<h3 key={this.props.content}>{this.props.content}</h3>);
    }
    return (
      <div>
        {myArticle}
      </div>
    );
  }

});

module.exports = Article;
