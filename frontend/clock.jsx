var React = require("react");

var Clock = React.createClass({
  getInitialState: function() {
    return { time: new Date() };
  },

  componentDidMount: function() {
    this.intervalId = setInterval(function(){
      var time = this.state.time,
          seconds = this.state.time.getSeconds();

      time.setSeconds(seconds + 1);
      this.setState({ time: time } );
    }.bind(this), 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.intervalId);
  },

  render: function(){
    return (
      <div>Clock: {this.state.time.toString()}</div>
    );
  }
});

module.exports = Clock;
