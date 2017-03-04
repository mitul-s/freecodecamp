var mainSkies = document.querySelector('#weatherText');

//var quoteData = JSON.parse(xhr.response);
var request = new XMLHttpRequest();
var url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=4ddb1b82dfbc99cb9eedfc8c2f096deb";
request.open("GET", url, true);

request.onload = function(){
	var data = JSON.parse(request.response);
	mainSkies.innerHTML = data.visibility;
}
request.send();

//
//var getIP = 'http://ip-api.com/json/';
//var openWeatherMap = ''
//$.getJSON(getIP).done(function(location) {
//    $.getJSON(openWeatherMap, {
//        lat: location.lat,
//        lon: location.lon,
//        units: 'metric',
//        APPID: 'APIKEY'
//    }).done(function(weather) {
//        console.log(weather)
//    })
//})
//
//
