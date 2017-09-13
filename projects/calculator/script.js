var btn = document.querySelectorAll('.btn');

for (var i = 0; i < btn.length; i++) {
	btn[i].onclick = function(e) {
		
		var input = document.querySelector('.numbers');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		if(btnVal) input.innerHTML += btnVal;
	} 
}

//