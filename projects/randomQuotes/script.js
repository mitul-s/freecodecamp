$(document).ready(getQuote);

var colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', 'darksalmon', '#34495e', '#4DAF7C', 'coral', '#F89406', '#22A7F0'];
var quoteBox = document.querySelector('.quoteBox');
var tweetBtn = document.querySelector('.tweet-btn');
let lastColor;


function getQuote() {
  $.ajax({
    dataType: "jsonp",
    jsonpCallback: "parseQuote",
    url: "http://quotes.stormconsultancy.co.uk/random.json",
    success: function(results) {
	setTimeout(function(){
		if(results.quote.length <= 150){
			$('.quote').text(results.quote);	
			$('.author').text(results.author);
			$('.tweet-link').attr("href", 'https://twitter.com/intent/tweet?text=' + results.quote + ' - ' + results.author);
		} else {
			getQuote();	
		}
	}, 330)	
    }
  });
}

function quoteTransition(){
	var random = colors[Math.floor(Math.random() * colors.length)];
	if(random === lastColor){ // diff colour each time
		return quoteTransition();
	}
		quoteBox.style.backgroundColor = random;
		$('.quote').fadeOut(400);
		$('.author').fadeOut(400);
		$('.quote').fadeIn(1500);
		$('.author').fadeIn(1500);
		lastColor = random;
}

$(document).ready(function() {
  // get a random quote when page loads
  getQuote();
  	$('.quote-btn').click(quoteTransition);
	$('.quote-btn').click(getQuote);
});