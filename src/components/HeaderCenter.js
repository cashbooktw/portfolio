var React = require('react');
var PropTypes = React.PropTypes;

// Gives to thin grey line and title in the center
var HeaderCenter = React.createClass({

  render: function() {
    let styles = {
      headerCenter: {
        height: "1px",
        background: "#DDD",
        borderBottom: "#FFF solid 1px",
        marginBottom: "30px",
        position: "relative",
        verticalAlign: "bottom"
      },
      headerCenterSpan: {
        backgroundColor: "#FFF",
        position: "absolute",
        top: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "300px",
        textAlign: "center",
        display: "block",
        color: "#666666",
        textTransform: "uppercase",
        letterSpacing: "1px"
      }
    };
    return (
      <div style={styles.headerCenter}>
        <span style={styles.headerCenterSpan} className="h4">{this.props.text}</span>
      </div>
    );
  }

});

module.exports = HeaderCenter;
