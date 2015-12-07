var React = require("react"),
    ReactDOM = require("react-dom"),
    Autocomplete = require("./autocomplete.jsx"),
    WeatherClock = require("./weather_clock.jsx");

var names = ["David", "Hank", "Emma", "Jackie", "Tracy", "Ben", "John",
    "Adam", "Mike", "Jack", "Hannah", "Henry", "Dave", "Donald"];

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <div>
      <Autocomplete items={ names } />
      <WeatherClock />
    </div>
    ,
    document.getElementById("search")
  );
});
