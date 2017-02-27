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

$(document).ready(function() {
  // get a random quote when page loads
  getQuote();
  $('.btn').click(getQuote);
});


//http://codepen.io/marcywilliamspudalov/pen/PPqOmN