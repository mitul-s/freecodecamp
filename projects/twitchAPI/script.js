var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "RobotCaleb", "noobs2ninjas", "streamerhouse"];

var userSet = document.querySelector('.all');
var item = document.querySelector('.item');

for(var i = 0; i < users.length; i++){
	dataLoad();
}

function dataLoad(){	
    $.ajax({
        url: "https://wind-bow.glitch.me/twitch-api/channels/" + users[i] + "?callback=?",
        dataType: "jsonp",
        jsonp: "callback",
		data: {
			format: "json"
		},
        success: function(data) { 
			getData(data);
        }
    });
    return false;
};

function userStatus(){
	$.ajax({
		url: "https://wind-bow.glitch.me/twitch-api/streams/" +  xxxxxx + "?callback=?",
		dataType: "jsonp",
		data: { format: "json" },
		success: function(response){
			console.log(i);
			if(response.stream == null){
				$('span').addClass('st-off');
			} else {
				$('span').addClass('st-on');
			}
		}
	})
}


function addUser(data){
	var newUser = '<li class="item"><a target="main" href="' + data.url + '"><p class="text"><img src="' + data.logo + '" class="icon" />' + data.display_name + '<span class="status"></span></p></a></li>';
	$(newUser).appendTo(userSet).css({'background-image': 'url(' + data.profile_banner + ')'});
}


function getData(data){
	addUser(data);
	userStatus();
}	



/*
function userSearch(){
	var userSearch = $('#search').val();
	$.ajax({
		url: "https://wind-bow.glitch.me/twitch-api/streams/" + userSearch,
		dataType: "jsonp",
		data: {
			format: "json"
		},
		success: function(data){
			getData(data);
		}
	});
}*/
