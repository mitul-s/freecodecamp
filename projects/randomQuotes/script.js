/*
var authorName 	= document.querySelector('.author');
var newQuote 	= document.querySelector('.quote');

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://quotes.stormconsultancy.co.uk/random.json", false);
xhr.send();

var quoteData = JSON.parse(xhr.response);

var request = new XMLHttpRequest();
var url = "http://quotes.stormconsultancy.co.uk/random.json";
request.open("GET", url, true);

function insert(){
	location.reload();
}

request.onload = function(){
	var data = JSON.parse(request.response);
	authorName.innerHTML = data.author;
	newQuote.innerHTML = data.quote;	
}

request.send();
*/

$(document).ready(getQuote);

var colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f1c40f', '#34495e', '#4DAF7C', 'coral', '#F89406', '#22A7F0'];
var quoteBox = document.querySelector('.quoteBox');
var tweetBtn = document.querySelector('.tweet-btn');


function getQuote() {
  $.ajax({
    dataType: "jsonp",
    jsonpCallback: "parseQuote",
    url: "http://quotes.stormconsultancy.co.uk/random.json",
    success: function(results) {
		if(results.quote.length <= 150){
			$('.quote').text(results.quote);	
			$('.author').text(results.author);
			$('.tweet-link').attr("href", 'https://twitter.com/intent/tweet?text=' + results.quote + ' - ' + results.author);
		} else {
			getQuote();	
		}	
    }
  });
}

function colorChange(){
	var random = colors[Math.floor(Math.random() * colors.length)];
	quoteBox.style.backgroundColor = random;
}

$(document).ready(function() {
  // get a random quote when page loads
  getQuote();
  	$('.quote-btn').click(getQuote);
	$('.quote-btn').click(colorChange);
});