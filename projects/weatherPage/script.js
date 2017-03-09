$(document).ready(getWeather);

//var mainSkies = document.querySelector('#weatherText');
//
////var quoteData = JSON.parse(xhr.response);
//var request = new XMLHttpRequest();
//var url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=4ddb1b82dfbc99cb9eedfc8c2f096deb";
//request.open("GET", url, true);
//
//request.onload = function(){
//	var data = JSON.parse(request.response);
//	mainSkies.innerHTML = data.visibility;
//}
//request.send();

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
var body = document.querySelector('body');
var API = "&APPID=4ddb1b82dfbc99cb9eedfc8c2f096deb";
//var lat = position.coords.latitude;
//var long = position.coords.longtitude;
//console.log(lat);
var mainUrl = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=4ddb1b82dfbc99cb9eedfc8c2f096deb";
var url = "http://api.openweathermap.org/data/2.5/weather?q=London" + API + "&units=imperial";
var degree = " ºF";


var x = document.querySelector(".test");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}



function getWeather() {
  $.ajax({
    dataType: "json",
    url: url,
    success: function(results) {	
  		updateData(results);
	}
  });
 }


function updateData(results){
	$('#weatherText').text(Math.round(results.main.temp) + degree);
	if(results.main.temp < 100){
		body.style.backgroundImage = "url('https://source.unsplash.com/mNCFOaaLu5o/1600x1080')";
	} else if(results.main.temp < 0){
		body.style.backgroundImage = "url('https://source.unsplash.com/pvCAEfIa55o/1600x1080')";
	}
	
}

function metricChange(){
	if(degree === " ºF"){
		url = mainUrl + "&units=metric";
		degree = " ºC";
		getWeather();
	} else {
		url = mainUrl + "&units=imperial";
		degree = " ºF"
		getWeather();
	}	
}

$(document).ready(function(){
	getWeather();
	$('#metric').click(metricChange);
});