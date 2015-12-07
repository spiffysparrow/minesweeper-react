var React = require("react"),
  Weather = require("./weather.jsx"),
  Clock = require("./clock.jsx");

var WeatherClock = React.createClass({
  componentDidMount: function(){

  },

  componentWillUnmount: function(){

  },

  render: function(){
    return (
      <div id="weather-clock">
        <Clock />
        <Weather/>
      </div>
    );
  }
});

module.exports = WeatherClock;
