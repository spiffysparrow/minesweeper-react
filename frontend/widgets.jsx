var React = require("react"),
    ReactDOM = require("react-dom"),
    Autocomplete = require("./autocomplete.jsx"),
    WeatherClock = require("./weather_clock.jsx"),
    Tabs = require("./tabs.jsx");

var names = ["David", "Hank", "Emma", "Jackie", "Tracy", "Ben", "John",
    "Adam", "Mike", "Jack", "Hannah", "Henry", "Dave", "Donald"];

var tabs = [
  {title: "Home", content: "Home page"},
  {title: "About", content: "This is our about page lol"},
  {title: "Contact", content: "555-555-5555"}
];

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <div>
      <Autocomplete items={ names } />
      <WeatherClock />
      <Tabs tabs={ tabs } />
    </div>
    ,
    document.getElementById("search")
  );
});
