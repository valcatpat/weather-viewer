/* 
 http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY} 
 
 ex: http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=b1b15e88fa797225412429c1c50c122a
 
 API key: ef9ef7ec1012658bff4d631d9e86073c
 
 Data that can be pulled:
    - weather.main - weather parameters, ie rain, snow
    - main.temp - temperature (in K by default) - units=metric
    - name - city name
    
    url: "http://api.openweathermap.org/data/2.5/weather?q=Kitchener&units=metric&appid=ef9ef7ec1012658bff4d631d9e86073c"
 
*/

// variables for page display

var cityName;
var cityTemp;
var cityConditions;

//set up variables for API request

var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var city = "Kitchener";
var units = "&units=metric";
var apiKey = "&appid=ef9ef7ec1012658bff4d631d9e86073c";

// functions

var displayCity = function() {
    var city = document.getElementById('city');
    city.innerHTML = "<h2>" + cityName + "</h2>";
}

var displayTemp = function() {
    var temp = document.getElementById('temp');
    temp.innerHTML = "<p>The current temperature is " + cityTemp + ".</p>";
}

var displayConditions = function() {
    var conditions = document.getElementById('conditions');
    conditions.innerHTML = "<p>The current conditions are " + cityConditions + ".</p>";
}

// make API request (may need to request jsonp)
$.ajax({
    url: api + city + units + apiKey

}).done(function(data) {
//    console.log(data.name);
//    console.log(data.main.temp);
//    console.log(data.weather[0].main);
    cityName = data.name;
    cityTemp = data.main.temp;
    cityConditions = data.weather[0].main;
    displayCity();
    displayTemp();
    displayConditions();
});



// display current temp & conditions for Kitchener
// display an icon to match current weather conditions?
