/* 
 http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY} 
 
 ex: http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=b1b15e88fa797225412429c1c50c122a
 
 API key: ef9ef7ec1012658bff4d631d9e86073c
 
     url: "http://api.openweathermap.org/data/2.5/weather?q=Kitchener&units=metric&appid=ef9ef7ec1012658bff4d631d9e86073c"
 
*/

// variables for page display

var cityName;
var cityTemp;
var cityConditions;

//set up variables for API request

var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var units = "&units=metric";
var apiKey = "&appid=ef9ef7ec1012658bff4d631d9e86073c";

var dropdown = document.getElementById('citySelection');

var city = "";

// functions

dropdown.onchange = function changeCity() {
    city = citySelection.value;
    ajaxRequest(city);
}

var displayCity = function() {
    var city = document.getElementById('city');
    city.innerHTML = "<h2>" + cityName + "</h2>";
}

var displayTemp = function() {
    var temp = document.getElementById('temp');
    temp.innerHTML = '<p><i class="wi wi-thermometer-exterior"></i> ' + Math.ceil(cityTemp) + ' &#8451</p>';
}

var displayConditions = function() {
    var conditions = document.getElementById('conditions');
    
    if (cityConditions === "Thunderstorm") {
        conditions.innerHTML = '<p><i class="wi wi-thunderstorm"></i> Thunderstorm </p>' ;
    } else if (cityConditions === "Rain") {
        conditions.innerHTML = '<p><i class="wi wi-rain"></i> Rain </p>';
    } else if (cityConditions === "Drizzle") {
        conditions.innerHTML = '<p><i class="wi wi-sprinkle"></i> Drizzle </p>';
    } else if (cityConditions === "Snow") {
        conditions.innerHTML = '<p><i class="wi wi-snow"></i> Snow</p>';
    } else if (cityConditions === "Clouds") {
        conditions.innerHTML = '<p><i class="wi wi-cloudy"></i> Clouds </p>';
    } else {
        conditions.innerHTML = '<p><i class="wi wi-day-sunny"></i> Clear </p>';
    }

}

// make API request
var ajaxRequest = function(chooseCity) {

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
}
// display current temp & conditions for Kitchener
// display an icon to match current weather conditions?
