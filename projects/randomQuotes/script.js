var authorName 	= document.querySelector('.author');
var newQuote 	= document.querySelector('.quote');

var xhr = new XMLHttpRequest();
/*xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&appid=4ddb1b82dfbc99cb9eedfc8c2f096deb&units=metric", false);*/
xhr.open("GET", "http://quotes.stormconsultancy.co.uk/random.json", false);
xhr.send();

var quoteData = JSON.parse(xhr.response);

function insert(){
	authorName.innerHTML = quoteData.author;
	newQuote.innerHTML = quoteData.quote;
}