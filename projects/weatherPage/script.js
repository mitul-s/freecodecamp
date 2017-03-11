$(document).ready(getWeather);
var API = "&APPID=4ddb1b82dfbc99cb9eedfc8c2f096deb";
var metric = document.querySelector('#metric');

function getWeather() {
	$.getJSON('http://ipinfo.io/json')
		.then(function (results) {
			var loc = results.loc.split(',');
			var lon = loc[1].toString(), 
				lat = loc[0].toString(), 
				url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +  API + "&units=metric";
			$('#location').text(results.city);
		$.getJSON(url)
			.then(function (results) {
				updateData(results);
			})
			.fail(function() {
				alert('error');
		});
	})
	.fail(function() {
		alert('error');
	});
}

function updateData(results) {
	$('#weatherText').text(Math.round(results.main.temp));
	$('#humidity').text(results.main.humidity);
	$('#wind').text(results.wind.speed);
	$('#desc').text(results.weather[0].description);
	var link = "https://source.unsplash.com/1600x1080/?"+ results.weather[0].main;
	$('body').css("background-image", 'url('+ link +')'); 
}

function metricChange(results){
	var x;
	if(metric.innerHTML === "ºC"){
		x = document.querySelector('#weatherText').innerHTML * 9 / 5 + 32;
		document.querySelector('#weatherText').innerHTML = Math.round(x);
		metric.innerHTML = "ºF";
	} else {
		x = (document.querySelector('#weatherText').innerHTML - 32) * 5 / 9;
		document.getElementById('weatherText').innerHTML = Math.round(x);
		metric.innerHTML = "ºC";
	}
}


$(document).ready(function(){
	$('#metric').click(metricChange);
});