// Get all the keys from document
var btn = document.querySelectorAll('.btn');

// Add onclick event to all the keys and perform operations
for(var i = 0; i < btn.length; i++) {
	btn[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		if(btnVal) input.innerHTML += btnVal;
	} 
}