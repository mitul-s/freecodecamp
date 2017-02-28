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

var colors = ['red', 'blue', 'green', 'purple', 'yellow', 'black', 'lightseagreen', 'coral']; // colour testing - to be changed
var quoteBox = document.querySelector('.quoteBox');


function getQuote() {
  $.ajax({
    dataType: "jsonp",
    jsonpCallback: "parseQuote",
    url: "http://quotes.stormconsultancy.co.uk/random.json",
    success: function(results) {
      $('.quote').text(results.quote);
      $('.author').text(results.author);
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


//http://codepen.io/marcywilliamspudalov/pen/PPqOmN