function dataLoad(){
	var search = $('#search').val();
	var $wiki = document.querySelector('.wiki');

	//$wiki.text("");
	
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&format=json&callback=wikiCallback';
    var wikiRequestTimeout = setTimeout(function(){
        $wiki.text("failed to get wikipedia resources");
    }, 8000);

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        jsonp: "callback",
        success: function( response ) {            
			var articleList = response[1];
			var desc = response[2];
				
			if(search.length !== 0){
				swipe();
            	for (var i = 0; i < articleList.length; i++) {
                	articleStr = articleList[i];
                	var url = 'http://en.wikipedia.org/wiki/' + articleStr;
					var newHTML = "<a href='" + url + "'><li class='wiki-list'><h1>" + articleStr + "</h1><p id='description'>" + desc[i] + "</p></li></a>";
					$(newHTML).appendTo($wiki);
            	};
			} else {
				alert("Please type something or make a random search!");
			}
            clearTimeout(wikiRequestTimeout);
        }
    });
    return false;
};

function swipe(){
	$('.wrap').hide();
	$('#title').hide();
	$('.form-container').animate({
		marginTop: '-70px',
	}, 500);
	var newBtn = '<button id="submit-btn" class="ui inverted button">Search</button>';
	$(newBtn).appendTo('#form-container');	
}

$('#form-container').submit(dataLoad);
$('#submit-btn').click(dataLoad);

