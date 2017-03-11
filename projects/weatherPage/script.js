$(document).ready(getWeather);
var API = "&APPID=4ddb1b82dfbc99cb9eedfc8c2f096deb";
var met = "&units=metric";
var imp = "&units=imperial";

function getWeather() {
	$.getJSON('http://ipinfo.io/json')
		.then(function(results){
			var loc = results.loc.split(',');
			var lon = loc[1].toString();
			var lat = loc[0].toString();
			console.log(lat, lon);
			var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +  API + met;
		$.getJSON(url)
			.then(function(results){
				updateData(results);
			})
			.fail(function(){
				alert('error');
		});
	})
	.fail(function() {
		alert('error');
	});
}

function updateData(results) {
	$('#location').text(results.name);
	$('#weatherText').text(Math.round(results.main.temp));
	var link = "https://source.unsplash.com/1600x1080/?"+ results.weather[0].main;
	$('body').css("background-image", 'url('+ link +')'); 
}

function metricChange(){
	alert('testing');
//	if(degree === " ºC"){
//		url = mainUrl + "&units=imperial";
//		degree = " ºF";
//		getWeather();
//	} else {
//		url = mainUrl + "&units=metric";
//		degree = " ºC"
//		getWeather();
//	}	
}

$(document).ready(function(){
	getWeather();
	$('#metric').click(metricChange);
});