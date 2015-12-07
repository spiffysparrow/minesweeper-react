var React = require("react");

var Weather = React.createClass({
  getInitialState: function() {

    return { temp: "", weather: "" };
  },

  componentDidMount: function() {
    var coords;
    var thisWeather = this;
    var location = navigator.geolocation;
    location.getCurrentPosition(function(pos){
      coords = pos.coords;
      var request = new XMLHttpRequest();
      request.open('GET',
          "http://api.openweathermap.org/data/2.5/weather?lat=" +
          coords.latitude + "&lon=" + coords.longitude +
          "&APPID=645c5d39c7603f17e23fcaffcea1a3c1", true);

      request.onload = function(){
        if (request.status === 200){
          var response = JSON.parse(request.responseText);
          console.log(response.wea);
          var weather = response.weather[0].description;
          var temp = response.main.temp - 273;
          thisWeather.setState({ temp: temp, weather: weather });
        }else{
          console.log("bad request, status" + request.status);
        }
      };

      request.send();
    });
  },

  componentWillUnmount: function() {

  },

  render: function(){
    return (
      <div>Weather: {this.state.weather}, Temp: {this.state.temp}

      </div>
    );
  }
});

module.exports = Weather;
