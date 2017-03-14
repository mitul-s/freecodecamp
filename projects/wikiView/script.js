function dataLoad(){
	var search = $('#search').val();
	var $wiki = document.querySelector('.wiki');
	
//	$wiki.text("");
	
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
//			var desc = response[2];
//			var link = response[3];
			
			if(search.length !== 0){
				$('#lucky-btn').hide();
            	for (var i = 0; i < articleList.length; i++) {
                	articleStr = articleList[i];
//					desc = desc[i];
                	var url = 'http://en.wikipedia.org/wiki/' + articleStr;
					var newHTML = "<li class='wiki-list'><a href='" + url + "'>" + articleStr + "</a></li>";
					$(newHTML).appendTo($wiki);
//					var newDesc = "<p>" + desc + "</p>";
//					$(newDesc).appendTo($('.wiki-list')).fadeIn(1000);
            	};
			} else {
				alert("Please type something or make a random search!");
			}
            clearTimeout(wikiRequestTimeout);
        }
    });
    return false;
};

$('#form-container').submit(dataLoad);